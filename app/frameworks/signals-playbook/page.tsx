import Link from "next/link";
import type { Metadata } from "next";
import { SignalsChain } from "@/components/diagrams/FrameworkDiagrams";

export const metadata: Metadata = {
  title: { absolute: "The S.I.G.N.A.L.S Playbook — Signal-Led GTM Execution" },
  description:
    "Spot, Integrate, Generate, Nurture, Automate, Learn, Scale. The seven-step playbook that turns detected buyer signals into booked B2B revenue.",
  alternates: { canonical: "/frameworks/signals-playbook" },
};

const STEPS = [
  { L: "S", name: "Spot", desc: "Spot high-intent signals across channels. Pricing-page visits, hiring surges, ATS or HRMS adoption, repeat ad engagement, LinkedIn activity." },
  { L: "I", name: "Integrate", desc: "Integrate signals into a single system. CRM, enrichment tools, data pipelines, identity resolution — no silos, no duplicates." },
  { L: "G", name: "Generate", ignite: true, desc: "Generate contextual messaging with AI. Role-specific, industry-specific, signal-aware, dynamically personalised." },
  { L: "N", name: "Nurture", desc: "Nurture through orchestrated multi-touch sequences. LinkedIn to email to ads to sales, with channel-switching logic and exit conditions." },
  { L: "A", name: "Automate", desc: "Automate routing, scoring and execution. Workflows, alerts, ownership rules, task creation." },
  { L: "L", name: "Learn", desc: "Learn from outcomes. Replies, meetings, pipeline, revenue attribution — signals get smarter over time." },
  { L: "S", name: "Scale", desc: "Scale only what works. Proven playbooks into new geographies, new ICPs, new segments." },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://riteshosta.com/frameworks" },
    { "@type": "ListItem", position: 3, name: "S.I.G.N.A.L.S Playbook", item: "https://riteshosta.com/frameworks/signals-playbook" },
  ],
};

export default function SignalsPlaybook() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>The <span className="accent">S.I.G.N.A.L.S</span> Playbook</h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            DARK is the vision. S.I.G.N.A.L.S is how it becomes revenue — seven steps, each with an owner, a tool and a trigger.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/playbooks" className="btn btn-primary"><span className="dot" />Download the playbook</Link>
            <Link href="/programs/gtm-team-coaching" className="btn btn-ghost">Team coaching</Link>
          </div>
        </div>
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}><SignalsChain /></div>
      </section>

      {/* M02 · The seven steps */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Seven Steps, Signal to Revenue</h2>
            <p>One letter at a time. Each step has a job, a set of tools, and a trigger that hands off to the next.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {STEPS.map((s, i) => (
              <div key={i} className="reveal" style={{ display: "flex", gap: "clamp(16px,3vw,32px)", alignItems: "flex-start", padding: "clamp(20px,3vw,30px) 0", borderTop: i === 0 ? "none" : "1px solid var(--hairline)" }}>
                <span aria-hidden="true" style={{
                  flex: "none", width: 58, height: 58, borderRadius: "50%", display: "grid", placeItems: "center",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem",
                  color: s.ignite ? "#5A3B00" : "#FFFFFF",
                  background: s.ignite ? "linear-gradient(135deg,#FAD27D,#F4B740)" : "var(--grad-teal)",
                  boxShadow: s.ignite ? "var(--glow-gold)" : "var(--glow-teal)",
                }}>{s.L}</span>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: "1.4rem", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                    {s.name}
                    {s.ignite && <span className="badge b-star" style={{ background: "rgba(244,183,64,.16)" }}>Ignition</span>}
                  </h3>
                  <p style={{ marginTop: 8, color: "var(--muted)", fontSize: "1.06rem", lineHeight: 1.6, maxWidth: "62ch" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · The formula — feature band */}
      <section className="section feature">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 960 }}>
          <p className="reveal" style={{ marginTop: 20, fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-.02em", color: "#FFFFFF", fontSize: "clamp(1.7rem,1.1rem+2.6vw,3.2rem)", lineHeight: 1.2 }}>
            Role <span style={{ color: "var(--cyan-light)" }}>+</span> Context <span style={{ color: "var(--cyan-light)" }}>+</span> Signal <span style={{ color: "var(--cyan-light)" }}>+</span> Enrichment <span style={{ color: "var(--cyan-light)" }}>=</span> Pipeline
          </p>
          <p className="reveal" style={{ marginTop: 22, color: "#D6F0EE", fontSize: "1.15rem", maxWidth: "52ch", marginInline: "auto" }}>
            Forty-plus buyer signals tracked. Every one of them turned into outreach a human would actually answer.
          </p>
        </div>
      </section>

      {/* M04 · Next layer */}
      <section className="section" style={{ paddingTop: "clamp(56px,8vw,96px)" }}>
        <div className="wrap">
          <Link href="/frameworks/gtm-engines" className="card-link reveal">
            <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s5)", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "52ch" }}>
                <p style={{ marginTop: 12, color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.3rem,1.1rem+1vw,1.9rem)", lineHeight: 1.3, letterSpacing: "-.015em" }}>
                  S.I.G.N.A.L.S is what to run. The 3 GTM Engines is who runs it.
                </p>
              </div>
              <span className="btn-link" style={{ fontSize: "1.1rem" }}>Read Layer 3: The 3 GTM Engines <span className="arw">→</span></span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
