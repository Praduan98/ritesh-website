import Link from "next/link";

type CTA = { label: string; href: string; primary?: boolean };

// Closing conversion band. Appears at the foot of every page except Contact and legal.
export default function CtaBand({
  heading, body, ctas,
}: { heading: string; body?: string; ctas: CTA[] }) {
  return (
    <div className="ctaband reveal">
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
