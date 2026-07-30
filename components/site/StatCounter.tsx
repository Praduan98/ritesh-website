"use client";
import { useEffect, useRef, useState } from "react";

/* Count-up stat for the GTM Engine Build band (.eb-stat).
   Starts at 0 and eases up to `value` the first time it scrolls into view.
   Honours prefers-reduced-motion (jumps straight to the final value). */
type Props = {
  value: number;
  from?: number;
  prefix?: string;   // white, before the number (e.g. "4–", "$")
  bigSuffix?: string; // white, after the number (e.g. "K")
  unit?: string;      // accent chip after the number (e.g. "wks", "+")
  caption: string;
  duration?: number;  // ms
};

export default function StatCounter({
  value, from = 0, prefix = "", bigSuffix = "", unit, caption, duration = 1400,
}: Props) {
  const [n, setN] = useState(from);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setN(Math.round(from + (value - from) * eased));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, from, duration]);

  return (
    <div className="eb-stat" ref={ref}>
      <span className="eb-stat-big">
        {prefix}{n}{bigSuffix}{unit ? <span className="eb-stat-unit">{unit}</span> : null}
      </span>
      <span className="eb-stat-cap">{caption}</span>
    </div>
  );
}
