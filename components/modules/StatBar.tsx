"use client";
import { useEffect, useRef } from "react";

export type Stat = { value: number; suffix?: string; decimals?: number; cap: string; gold?: boolean };

export default function StatBar({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion:reduce)").matches;
    const figs = Array.from(root.querySelectorAll<HTMLElement>(".figure"));

    const run = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.target || "0");
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const suf = el.dataset.suffix || "";
      if (reduce) { el.textContent = target.toFixed(dec) + suf; return; }
      const dur = 1400;
      let start: number | null = null;
      const frame = (ts: number) => {
        if (start === null) start = ts;
        const t = Math.min((ts - start) / dur, 1);
        if (t < 0.5) {
          el.textContent = (Math.random() * target).toFixed(dec) + suf; // sensor scramble
          requestAnimationFrame(frame);
        } else {
          const ease = 1 - Math.pow(1 - t, 3);
          el.textContent = (target * ease).toFixed(dec) + suf;
          if (t < 1) requestAnimationFrame(frame);
          else el.textContent = target.toFixed(dec) + suf;
        }
      };
      requestAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) { figs.forEach(run); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { run(e.target as HTMLElement); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    figs.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);

  return (
    <div className="statbar" ref={ref}>
      {stats.map((s, i) => (
        <div key={i} className={`stat${s.gold ? " gold" : ""}`}>
          <span className="figure" data-target={s.value} data-suffix={s.suffix || ""} data-decimals={s.decimals || 0}>0</span>
          <span className="cap">{s.cap}</span>
        </div>
      ))}
    </div>
  );
}
