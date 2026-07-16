"use client";
import { useEffect, useRef } from "react";

// Fixed, engineered background: layered gradient-orb meshes in different brand
// shades, a masked signal grid + dot matrix, and concentric "signal rings".
// Subtle scroll parallax layered on top of the slow CSS orb drift; both are
// disabled under prefers-reduced-motion.
export default function SiteBackground() {
  const irisRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const amberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion:reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (irisRef.current) irisRef.current.style.transform = `translateY(${y * 0.06}px)`;
        if (cyanRef.current) cyanRef.current.style.transform = `translateY(${y * -0.05}px)`;
        if (ringsRef.current) ringsRef.current.style.transform = `translateY(${y * -0.08}px) rotate(${y * 0.01}deg)`;
        if (amberRef.current) amberRef.current.style.transform = `translateY(${y * 0.04}px)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="grid-tex" />
      <div className="dot-tex" />
      <div className="mesh m-teal" />
      <div className="mesh m-iris" ref={irisRef} />
      <div className="mesh m-cyan" ref={cyanRef} />
      <div className="mesh m-amber" ref={amberRef} />
      <div className="rings" ref={ringsRef}>
        <svg viewBox="0 0 360 360" width="360" height="360">
          <defs>
            <radialGradient id="ringfade" cx="50%" cy="50%" r="50%">
              <stop offset="55%" stopColor="var(--trace)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--trace)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g fill="none" stroke="url(#ringfade)" strokeWidth="1">
            <circle cx="180" cy="180" r="64" />
            <circle cx="180" cy="180" r="110" />
            <circle cx="180" cy="180" r="158" />
          </g>
          <circle cx="180" cy="180" r="4" fill="var(--amber)" opacity="0.8" />
          <path d="M22 180 H120 L150 178 L172 132 L194 178 H338" fill="none" stroke="var(--trace-soft)" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}
