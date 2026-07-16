"use client";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";

// Manual re-trigger slider (no auto-loop, per the motion law + WCAG 2.2.2).
export default function QuoteSlider() {
  const [i, setI] = useState(0);
  const items = testimonials.filter((t) => t.slider);
  return (
    <div className="qslider">
      {items.map((t, idx) => (
        <figure key={idx} className={`quote${idx === i ? " active" : ""}`} aria-hidden={idx !== i}>
          <p>&ldquo;{t.quote}&rdquo;</p>
          <figcaption className="attr">
            <span className="src">{t.source}</span>
            {t.name}, {t.role}
          </figcaption>
        </figure>
      ))}
      <div className="qdots" role="group" aria-label="Testimonial controls">
        {items.map((_, idx) => (
          <button key={idx} type="button" className={idx === i ? "on" : ""}
            aria-label={`Show testimonial ${idx + 1}`} aria-pressed={idx === i}
            onClick={() => setI(idx)} />
        ))}
      </div>
    </div>
  );
}
