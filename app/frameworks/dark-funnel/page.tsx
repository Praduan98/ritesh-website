import Link from "next/link";
import type { Metadata } from "next";
import { DarkLoop } from "@/components/diagrams/FrameworkDiagrams";

export const metadata: Metadata = {
  title: { absolute: "The DARK Funnel Framework — Detect, Augment, Reach" },
  description:
    "Most buying intent never reaches your CRM. The DARK Funnel framework shows how to detect demand before the form fill and turn it into pipeline.",
  alternates: { canonical: "/frameworks/dark-funnel" },
};

const STEPS = [
  { L: "D", h: "D — Detect", intro: "Detect demand while it is still invisible.",
    list: ["Anonymous website behaviour", "Job postings & hiring signals", "Tech adoption & stack changes", "Content engagement", "Competitor & category research"],
    quote: "If you wait for a form fill, you are already late." },
  { L: "A", h: "A — Augment", intro: "Augment detected signals with context.",
    list: ["Firmographics", "Technographics", "Role & seniority", "Buying-group indicators", "Historical CRM context"],
    quote: "Every signal becomes actionable intelligence, not raw data." },
  { L: "R", h: "R — Reach", intro: "Reach buyers in the moment intent peaks.",
    list: ["LinkedIn — organic & automated", "Email", "BRIDGE Ads", "Sales-assisted outreach"],
    quote: "Reach is triggered by behaviour, not by a schedule." },
  { L: "K", h: "K — Kaizen", intro: "Continuously improve the system.",
    list: ["Measure what converts", "Re-score signals", "Adjust workflows", "Double down on what works"],
    quote: "Each cycle compounds pipeline efficiency." },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://riteshosta.com/frameworks" },
    { "@type": "ListItem", position: 3, name: "DARK Funnel", item: "https://riteshosta.com/frameworks/dark-funnel" },
  ],
};

export default function DarkFunnel() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 860, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>The <span className="accent">D.A.R.K</span> Funnel</h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "52ch" }}>
            Most buying intent is invisible to your CRM, your ads dashboard and your lead reports. DARK is how we see
            demand before it becomes a lead.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/playbooks" className="btn btn-primary"><span className="dot" />Download the DARK playbook</Link>
            <Link href="/contact" className="btn btn-ghost">Book a call</Link>
          </div>
        </div>
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}><DarkLoop /></div>
      </section>

      {/* M02–M05 · D / A / R / K alternating blocks */}
      <section className="section">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,8vw,112px)" }}>
          {STEPS.map((s, i) => {
            const visual = (
              <div className="reveal" key="v" style={{ position: "relative", borderRadius: "var(--r-xl)", padding: "clamp(28px,4vw,48px)", background: "var(--grad-accent)", overflow: "hidden", minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, lineHeight: 1, fontSize: "clamp(4.5rem,13vw,8rem)", letterSpacing: "-.04em", background: "var(--grad-headline)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{s.L}</div>
                <svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" style={{ width: "100%", height: 26, marginTop: 24 }}>
                  <line x1="0" y1="26" x2="400" y2="26" style={{ stroke: "var(--trace-soft)" }} strokeWidth="1" strokeDasharray="4 6" />
                  <path d="M0 24 H210 L240 22 L262 6 L286 22 H400" fill="none" style={{ stroke: "var(--cyan-dark)" }} strokeWidth="2" />
                  <circle cx="262" cy="6" r="4.5" fill="#F4B740" />
                </svg>
              </div>
            );
            const copy = (
              <div className="reveal" key="c">
                <h2 style={{ marginTop: 14, fontSize: "clamp(1.9rem,1.4rem+1.8vw,2.8rem)" }}>{s.h}</h2>
                <p style={{ marginTop: 14, color: "var(--ink-2)", fontSize: "1.14rem", fontWeight: 500 }}>{s.intro}</p>
                <div className="pillrow" style={{ marginTop: 20 }}>
                  {s.list.map((l) => <span key={l} className="pill">{l}</span>)}
                </div>
                <blockquote style={{ margin: "26px 0 0", paddingLeft: 20, borderLeft: "3px solid var(--cyan)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", lineHeight: 1.4, color: "var(--ink)", letterSpacing: "-.01em" }}>
                  {s.quote}
                </blockquote>
              </div>
            );
            return (
              <div key={s.L} className="split" style={{ alignItems: "center" }}>
                {i % 2 === 0 ? [visual, copy] : [copy, visual]}
              </div>
            );
          })}
        </div>
      </section>

      {/* M06 · Next layer */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link href="/frameworks/signals-playbook" className="card-link reveal">
            <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s5)", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "52ch" }}>
                <p style={{ marginTop: 12, color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.3rem,1.1rem+1vw,1.9rem)", lineHeight: 1.3, letterSpacing: "-.015em" }}>
                  DARK explains where demand lives. S.I.G.N.A.L.S is how you capture it.
                </p>
              </div>
              <span className="btn-link" style={{ fontSize: "1.1rem" }}>Read Layer 2: S.I.G.N.A.L.S <span className="arw">→</span></span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
