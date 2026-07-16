import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "GTM Engine Build — Done-For-You GTM Systems" },
  description:
    "Signal stack, AI agents, CRM automation and BRIDGE Ads, built and live in 4 to 6 weeks by the InsightsTap team. From $10K per implementation.",
  alternates: { canonical: "/programs/gtm-engine-build" },
};

const BUILD = [
  { name: "Signal Infrastructure", desc: "Detection layer, enrichment pipeline, scoring engine, activation triggers. Clay, RB2B, Factors.ai, Common Room." },
  { name: "AI Agents", desc: "SDR, chat and voice agents on GPT-4o and Claude. They personalise, they qualify, they book." },
  { name: "CRM as a Decision Engine", desc: "HubSpot or Salesforce rebuilt around routing, scoring and lifecycle logic. We integrate — we do not rip and replace." },
  { name: "Outreach Orchestration", desc: "Smartlead, Apollo, Instantly and Lemlist wired to the signal layer, with channel-switching and exit conditions." },
  { name: "BRIDGE Ads", desc: "LinkedIn, Google and Meta triggered by signals, warming accounts before a human ever reaches out." },
];

const FACTS = ["4–12 weeks, scope-dependent", "Built by the InsightsTap team", "Your team gets the keys"];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "GTM Engine Build", item: "https://riteshosta.com/programs/gtm-engine-build" },
  ],
};

const SERVICE = {
  "@context": "https://schema.org", "@type": "Service",
  name: "GTM Engine Build",
  serviceType: "GTM implementation",
  provider: { "@type": "Person", name: "Ritesh Osta" },
  areaServed: "Worldwide",
  description:
    "Signal stack, AI agents, CRM automation and BRIDGE Ads, built and live in 4 to 6 weeks by the InsightsTap team. From $10K per implementation.",
  url: "https://riteshosta.com/programs/gtm-engine-build",
};

export default function GtmEngineBuild() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />

      {/* M01 · Hero — split: copy left, fact card right */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>GTM <span className="accent">Engine Build</span></h1>
            <p className="lead">
              You have the blueprint. My team at{" "}
              <a href="https://insightstap.com" target="_blank" rel="noopener">InsightsTap</a>{" "}
              builds it — signal stack, AI agents, CRM automation and BRIDGE Ads, live and running in weeks, not quarters.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Book a scoping call</Link>
            </div>
          </div>
          {/* Engagement window is 4–12 weeks scope-dependent; "most engines go live in 4–6" (M03) — both verbatim from the architecture */}
          <div style={{ width: "100%", maxWidth: 470, justifySelf: "center" }}>
            <div className="card reveal" style={{ width: "100%" }}>
              <div style={{ marginTop: "var(--s4)" }}>
                {FACTS.map((f, i) => (
                  <p key={f} style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.1rem,1rem + .5vw,1.35rem)",
                    color: "var(--ink)", letterSpacing: "-.01em", lineHeight: 1.35,
                    padding: "clamp(14px,1.8vw,20px) 0", borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
                  }}>{f}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · What gets built */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What Gets Built</h2>
          </div>
          <div className="grid g3">
            {BUILD.map((b) => (
              <div key={b.name} className="card reveal">
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Timeline & price — fact band */}
      <section className="section feature" style={{ paddingBlock: "clamp(56px,7vw,96px)" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 960 }}>
          <p className="reveal" style={{
            fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-.022em",
            color: "#FFFFFF", fontSize: "clamp(1.7rem,1.1rem + 2.6vw,3.2rem)", lineHeight: 1.15,
          }}>
            Most engines go live in <span style={{ color: "var(--cyan-light)" }}>4–6 weeks</span>.
          </p>
          <p className="reveal" style={{ marginTop: 20, color: "#D6F0EE", fontSize: "1.15rem", maxWidth: "52ch", marginInline: "auto" }}>
            Signal detection and outreach usually generate pipeline inside the first two.
          </p>
          {/* [CONFIRM] $10K figure predates current positioning — verify before ship */}
          <p className="reveal" style={{
            marginTop: 28, fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: ".88rem",
            letterSpacing: ".12em", textTransform: "uppercase", color: "var(--cyan-light)",
          }}>
            From $10K per implementation · scope-dependent
          </p>
        </div>
      </section>

      {/* Sideways links */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="grid g2">
            <Link href="/programs/gtm-blueprint-sprint" className="card-link reveal">
              <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s4)", flexWrap: "wrap" }}>
                <div>
                  <p style={{ marginTop: 10, color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "-.01em" }}>
                    GTM Blueprint Sprint&trade;
                  </p>
                </div>
                <span className="btn-link">View <span className="arw">→</span></span>
              </div>
            </Link>
            <Link href="/programs/gtm-team-coaching" className="card-link reveal">
              <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s4)", flexWrap: "wrap" }}>
                <div>
                  <p style={{ marginTop: 10, color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "-.01em" }}>
                    Team Coaching
                  </p>
                </div>
                <span className="btn-link">View <span className="arw">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* M04 · Closing CTA — ctaband markup inlined so the InsightsTap button can carry target/rel */}
      <section className="section">
        <div className="wrap">
          <div className="ctaband reveal">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="30" x2="1200" y2="30" style={{ stroke: "var(--trace-soft)" }} strokeWidth="1" />
              <path d="M0 30 H980 L1020 30 L1048 12 L1076 30 H1200" fill="none" style={{ stroke: "var(--trace)" }} strokeWidth="1.6" />
              <circle cx="1048" cy="12" r="4" fill="#F4B740" />
            </svg>
            <h3>Ready to Build?</h3>
            <p>Tell me where the pipeline is stuck. I will show you the signals you are missing.</p>
            <div className="btns">
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Book a scoping call</Link>
              <a href="https://insightstap.com" target="_blank" rel="noopener" className="btn btn-ghost">See InsightsTap</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
