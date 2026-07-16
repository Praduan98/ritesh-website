"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds `.in` to every `.reveal` element when it scrolls into view.
// Re-runs on every route change: this component lives in the root layout
// (which persists across client-side navigation), so without depending on
// the pathname it would only ever observe the FIRST page's elements — every
// page reached by clicking a link would keep its `.reveal` content hidden
// (opacity:0) and look empty. Fallback: if IntersectionObserver is missing,
// reveal everything immediately.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;
    // Wait one frame so the freshly-navigated page's DOM/layout is ready
    // (also needed for getTotalLength on newly-mounted SVG traces).
    const raf = requestAnimationFrame(() => {
      // Arm every trigger-line path with its length so `.in .trace-draw` can draw it.
      document.querySelectorAll<SVGPathElement>(".trace-draw").forEach((p) => {
        try { p.style.setProperty("--len", String(p.getTotalLength())); } catch {}
      });

      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
      if (!els.length) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("in"));
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io!.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
