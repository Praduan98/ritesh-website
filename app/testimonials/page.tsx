import Link from "next/link";
import type { Metadata } from "next";
import CtaBand from "@/components/modules/CtaBand";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: { absolute: "Client Testimonials — Ritesh Osta, Top Rated Fiverr Pro" },
  description:
    "A decade of client reviews from Fiverr and Upwork. Read what B2B founders and growth leads say about working with Ritesh Osta.",
  alternates: { canonical: "/testimonials" },
};

const STATS = [
  { figure: "5.0 ★", cap: "average" },
  { figure: "55", cap: "reviews" },
  { figure: "43", cap: "five-star" },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://riteshosta.com/testimonials" },
  ],
};

export default function Testimonials() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero (centred, compact) */}
      <section className="hero wrap" style={{ paddingBottom: "clamp(36px,5vw,56px)" }}>
        <div style={{ maxWidth: 780, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>What Clients <span className="accent">Say</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "48ch" }}>
            A decade of reviews, straight from Fiverr and Upwork. Unedited.
          </p>
        </div>
      </section>

      {/* Stat strip — slim card row under the hero */}
      {/* [CONFIRM] counts are perishable — verify on launch day (Annex A row 4) */}
      <section className="wrap" style={{ paddingBottom: "clamp(44px,7vw,80px)" }}>
        <div className="card reveal" style={{
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
          gap: "clamp(20px,3vw,48px)", padding: "clamp(20px,2.5vw,28px) clamp(24px,3.5vw,48px)",
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(24px,4vw,64px)" }}>
            {STATS.map((s) => (
              <div key={s.cap} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.45rem,1.2rem + .9vw,1.9rem)", letterSpacing: "-.02em", lineHeight: 1, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>
                  {s.figure}
                </span>
                <span className="mini">{s.cap}</span>
              </div>
            ))}
          </div>
          <span className="badge b-star">Top Rated Fiverr Pro</span>
        </div>
      </section>

      {/* M02 · Quote grid */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Straight From the Source</h2>
          </div>
          <div style={{ columnWidth: 340, columnGap: 24 }}>
            {testimonials.map((t) => (
              <figure key={t.name + t.role} className="card reveal" style={{ breakInside: "avoid", marginBottom: 24 }}>
                {/* .src badge styling inlined — the class is scoped to .quote in globals.css */}
                <span className="src" style={{
                  fontFamily: "var(--font-mono)", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em",
                  textTransform: "uppercase", border: "1px solid rgba(6,109,109,.4)", borderRadius: "var(--r-pill)",
                  padding: "4px 11px", color: "var(--accent-text)", background: "var(--chip)", display: "inline-block",
                }}>{t.source}</span>
                <blockquote style={{ margin: 0, marginTop: 16 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.45, letterSpacing: "-.012em", color: "var(--ink)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mini" style={{ marginTop: 16 }}>{t.name} · {t.role}</figcaption>
              </figure>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/work" className="btn-link">See the systems behind the reviews <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M03 · Closing CTA */}
      <section className="section">
        <div className="wrap">
          <CtaBand
            heading="Want Results Like These?"
            ctas={[
              { label: "Work With Me", href: "/work-with-me", primary: true },
              { label: "See the work", href: "/work" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
