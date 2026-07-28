"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * SignalRoadmap — scroll-linked illumination for the S.I.G.N.A.L.S serpentine.
 *
 * Progressive enhancement contract
 * -------------------------------
 * The road (rails + arcs + nodes) is plain server-rendered markup and is styled
 * FULLY LIT by default. This component only ever *removes* light: it adds
 * `.sc-live` to the track, which is the sole hook the "unlit" CSS is scoped to,
 * then drives each segment's `--p` (0→1) from scroll position and flags the
 * reached steps with `.is-on`.
 *
 * So:  no JS  -> road fully lit, every node active (valid final state).
 *      reduced motion -> we never go live, same fully-lit state, zero listeners.
 *      JS + motion ok -> the road draws itself down the page as you read.
 *
 * Perf: one passive scroll listener, coalesced into a single rAF. Inside the
 * frame every getBoundingClientRect() happens before any style write, so the
 * browser does exactly one layout flush per frame. Values are quantised to 3dp
 * so unchanged segments are skipped entirely.
 */

/** The reading line, as a fraction of viewport height. A node lights when it crosses it. */
const FRONT = 0.62;

export default function SignalRoadmap({ children }: { children: ReactNode }) {
  const shell = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = shell.current;
    if (!root) return;
    const track = root.querySelector<HTMLElement>(".sc-track");
    if (!track) return;

    // Segments, in DOM order: rail₁, arc₁, rail₂, arc₂ … rail₇ (no arc after the last step).
    const segs = Array.from(track.querySelectorAll<HTMLElement>(".sc-rail,.sc-arc"));
    const steps = Array.from(track.querySelectorAll<HTMLElement>(".sc-step"));
    const nodes = steps.map((s) => s.querySelector<HTMLElement>(".sc-node"));
    if (!segs.length || !steps.length) return;

    // Refine the dash length. The arc viewBox is fixed (0 0 120 180) so this is a
    // constant in user units — measured once, never on resize. CSS already carries
    // the same number as a fallback, so a 0 here (path not rendered yet) is harmless.
    track.querySelectorAll<SVGPathElement>(".sc-arc-fill").forEach((p) => {
      try {
        const len = p.getTotalLength();
        if (len > 1) p.style.setProperty("--len", String(Math.round(len * 100) / 100));
      } catch {
        /* non-rendered path — keep the CSS fallback */
      }
    });

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lastP: number[] = new Array(segs.length).fill(-1);
    let litIndex = -1;
    let raf = 0;
    let armRaf = 0;
    let live = false;

    const paint = () => {
      raf = 0;
      const front = window.innerHeight * FRONT;

      // ---- read phase: every measurement first, so this costs one layout ----
      const segRects = segs.map((el) => el.getBoundingClientRect());
      const nodeMid = nodes.map((n) => {
        if (!n) return Infinity;
        const r = n.getBoundingClientRect();
        return r.height ? r.top + r.height / 2 : Infinity;
      });

      // ---- write phase ----
      for (let i = 0; i < segs.length; i++) {
        const r = segRects[i];
        if (r.height <= 0) continue; // arcs are display:none in single-spine mode
        const raw = (front - r.top) / r.height;
        const p = Math.round((raw < 0 ? 0 : raw > 1 ? 1 : raw) * 1000) / 1000;
        if (p === lastP[i]) continue;
        lastP[i] = p;
        segs[i].style.setProperty("--p", String(p));
      }

      let idx = -1;
      for (let i = 0; i < nodeMid.length; i++) if (nodeMid[i] <= front) idx = i;
      if (idx !== litIndex) {
        // Monotonic: everything up to the reached step stays lit, so deep links
        // and fast scrolls never leave a half-built road behind you.
        for (let i = 0; i < steps.length; i++) steps[i].classList.toggle("is-on", i <= idx);
        litIndex = idx;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    const enable = () => {
      if (live) return;
      live = true;
      track.classList.add("sc-live");
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      paint(); // synchronous first pass — nothing above the line ever flashes unlit
      // Arm transitions only once the dim state has actually been painted. Without
      // this, .sc-live lands after first paint and the whole road animates from lit
      // -> dim in front of the reader. Two frames: one to paint, one to arm.
      armRaf = requestAnimationFrame(() => {
        armRaf = requestAnimationFrame(() => {
          armRaf = 0;
          track.classList.add("sc-armed");
        });
      });
    };

    const disable = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      if (armRaf) cancelAnimationFrame(armRaf);
      armRaf = 0;
      if (!live) return;
      live = false;
      track.classList.remove("sc-live", "sc-armed");
      segs.forEach((el) => el.style.removeProperty("--p"));
      steps.forEach((el) => el.classList.remove("is-on"));
      lastP.fill(-1);
      litIndex = -1;
    };

    const sync = () => (mq.matches ? disable() : enable());
    sync();

    // Card heights move when webfonts swap or the layout reflows; repaint without
    // waiting for a scroll. (Rects are re-read every frame, so nothing goes stale.)
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScroll) : null;
    ro?.observe(track);
    mq.addEventListener("change", sync);

    return () => {
      mq.removeEventListener("change", sync);
      ro?.disconnect();
      disable();
    };
  }, []);

  return (
    <div className="sc-shell" ref={shell}>
      {children}
    </div>
  );
}
