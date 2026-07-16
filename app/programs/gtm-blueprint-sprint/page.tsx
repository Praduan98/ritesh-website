import Link from "next/link";
import type { Metadata } from "next";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "GTM Blueprint Sprint™ — 4-Week 1:1 GTM Consulting" },
  description:
    "Four weeks, eight sessions, one blueprint. GTM audit, ICP and signal map, stack architecture and a phased roadmap — 1:1 with Ritesh Osta.",
  alternates: { canonical: "/programs/gtm-blueprint-sprint" },
};

const FACTS = [
  { big: "4 weeks", cap: "Audit to roadmap, in order" },
  { big: "2 sessions per week", cap: "Eight working sessions in total" },
  { big: "1:1 with Ritesh", cap: "No juniors, no hand-offs" },
];

const AUDIENCE = [
  { label: "For founders", body: "Founders whose outbound has stopped working and who do not yet know why." },
  { label: "For CROs", body: "CROs and heads of growth who have the tools but not the system." },
  { label: "For teams", body: "Teams about to spend six figures on GTM headcount who should spend it on architecture first." },
];

const WEEKS = [
  { n: "1", name: "Audit", desc: "Your current motion, stack, data and pipeline maths — what is broken and what is expensive." },
  { n: "2", name: "ICP and signal map", desc: "Who actually buys, and which of the 40+ signals predict it in your market." },
  { n: "3", name: "Architecture", desc: "The detection, enrichment, scoring and activation layers, and the tools for each." },
  { n: "4", name: "Roadmap", desc: "Phased build plan with owners, sequencing and the numbers it should move." },
];

const DELIVERABLES = [
  "A GTM audit with the leaks named and costed.",
  "An ICP definition and a signal map scored for your market.",
  "A stack architecture — detection through activation, tool by tool.",
  "A phased execution roadmap your team, or mine, can build.",
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "GTM Blueprint Sprint", item: "https://riteshosta.com/programs/gtm-blueprint-sprint" },
  ],
};

const SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GTM Blueprint Sprint",
  serviceType: "GTM consulting",
  provider: { "@type": "Person", name: "Ritesh Osta" },
  areaServed: "Worldwide",
  description:
    "Four weeks, eight sessions, one blueprint. GTM audit, ICP and signal map, stack architecture and a phased roadmap — 1:1 with Ritesh Osta.",
  url: "https://riteshosta.com/programs/gtm-blueprint-sprint",
};

export default function GtmBlueprintSprint() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />

      {/* M01 · Hero — split: copy left, program fact card right */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>GTM Blueprint <span className="accent">Sprint™</span></h1>
            <p className="lead">
              Four weeks, eight sessions, one blueprint. We map your ICP, your signals and your stack — and you
              leave with a roadmap your team can build from on day one.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Apply for a Sprint</Link>
            </div>
          </div>
          <div className="card reveal" style={{ alignSelf: "center", width: "100%" }}>
            <div style={{ marginTop: "var(--s5)", display: "flex", flexDirection: "column" }}>
              {FACTS.map((f, i) => (
                <div key={f.big} style={{ padding: "clamp(16px,2vw,22px) 0", borderTop: i === 0 ? "none" : "1px solid var(--hairline)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.7rem,1.3rem + 1.4vw,2.4rem)", lineHeight: 1.1, letterSpacing: "-.02em", color: "var(--ink)" }}>
                    {f.big}
                  </p>
                  <p className="mini" style={{ marginTop: 6 }}>{f.cap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Who this is for */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Who This Is For</h2>
          </div>
          <div className="grid g3">
            {AUDIENCE.map((a) => (
              <div key={a.label} className="card reveal">
                <p style={{ marginTop: 14 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · What we do — 4-week timeline */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Four Weeks, In Order</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {WEEKS.map((w, i) => (
              <div key={w.n} className="reveal" style={{ display: "flex", gap: "clamp(16px,3vw,32px)", alignItems: "flex-start", padding: "clamp(20px,3vw,30px) 0", borderTop: i === 0 ? "none" : "1px solid var(--hairline)" }}>
                <span aria-hidden="true" style={{
                  flex: "none", width: 58, height: 58, borderRadius: "50%", display: "grid", placeItems: "center",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem",
                  color: "#FFFFFF", background: "var(--grad-teal)", boxShadow: "var(--glow-teal)",
                }}>{w.n}</span>
                <div style={{ paddingTop: 4 }}>
                  <p className="mini" style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: ".1em", fontSize: ".72rem", fontWeight: 700 }}>
                    Week {w.n}
                  </p>
                  <h3 style={{ fontSize: "1.4rem", marginTop: 6 }}>{w.name}</h3>
                  <p style={{ marginTop: 8, color: "var(--muted)", fontSize: "1.06rem", lineHeight: 1.6, maxWidth: "62ch" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M04 · What you walk away with */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What You Walk Away With</h2>
          </div>
          <div className="grid g2">
            {DELIVERABLES.map((d, i) => (
              <div key={d} className="card reveal">
                <p style={{ marginTop: 14 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sideways links + M05 · Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="mini reveal" style={{ display: "flex", alignItems: "center", gap: "var(--s4)", flexWrap: "wrap", marginBottom: "var(--s6)" }}>
            Also see:
            <Link href="/programs/gtm-engine-build" className="btn-link">GTM Engine Build <span className="arw">→</span></Link>
            <Link href="/programs/gtm-team-coaching" className="btn-link">Team Coaching <span className="arw">→</span></Link>
          </p>
          <CtaBand
            heading="Four Weeks. One Blueprint."
            body="I take a limited number of sprints per quarter. Tell me where the pipeline is stuck."
            ctas={[
              { label: "Apply for a Sprint", href: "/contact", primary: true },
              { label: "See all programs", href: "/work-with-me" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
