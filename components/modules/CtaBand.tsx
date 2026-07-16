import Link from "next/link";

type CTA = { label: string; href: string; primary?: boolean };

// Closing conversion band. Appears at the foot of every page except Contact and legal.
export default function CtaBand({
  heading, body, ctas,
}: { heading: string; body?: string; ctas: CTA[] }) {
  return (
    <div className="ctaband reveal">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="30" x2="1200" y2="30" style={{ stroke: "var(--trace-soft)" }} strokeWidth="1" />
        <path d="M0 30 H980 L1020 30 L1048 12 L1076 30 H1200" fill="none" style={{ stroke: "var(--trace)" }} strokeWidth="1.6" />
        <circle cx="1048" cy="12" r="4" fill="#F4B740" />
      </svg>
      {/* h2 (not h3) so it never skips a level on pages where the band is the only section; styles mirror .ctaband h3 */}
      <h2 style={{ fontSize: "clamp(2rem,1.5rem+2.2vw,3.2rem)", maxWidth: "22ch", fontWeight: 800, letterSpacing: "-.025em", color: "#FFFFFF" }}>{heading}</h2>
      {body && <p>{body}</p>}
      <div className="btns">
        {ctas.map((c) => (
          <Link key={c.href + c.label} href={c.href} className={`btn ${c.primary ? "btn-primary" : "btn-ghost"}`}>
            {c.primary && <span className="dot" />}{c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
