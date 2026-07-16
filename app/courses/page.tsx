import type { Metadata } from "next";
import NLBlock from "@/components/modules/NLBlock";

export const metadata: Metadata = {
  title: { absolute: "Courses — B2B GTM & Marketing Automation Training" },
  description:
    "Self-paced training on the systems I build for clients: the frameworks, the stack and the automations, taught end to end by Ritesh Osta.",
  alternates: { canonical: "/courses" },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://riteshosta.com/courses" },
  ],
};

const COURSES = [
  {
    kicker: "Self-paced · 8 modules",
    title: "The DARK Funnel, End to End",
    body: "Map where B2B demand actually lives, then build the detection and scoring logic to capture it before your competitors do.",
    price: "From $—",
  },
  {
    kicker: "Self-paced · 6 modules",
    title: "Building Your Signal Stack",
    body: "Assemble the tools, data pipes and automations that turn raw buyer signals into a working, owned go-to-market system.",
    price: "From $—",
  },
  {
    kicker: "Self-paced · 7 modules",
    title: "AI Agents for B2B GTM",
    body: "Design and ship AI agents that qualify, personalise and activate demand — the same patterns I build into client engines.",
    price: "From $—",
  },
];

export default function Courses() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>Courses</h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            Self-paced training on the systems I build for clients — the frameworks, the stack and the
            automations, taught end to end.
          </p>
        </div>
      </section>

      {/* M02 · Course grid */}
      {/* [PLACEHOLDER] mirror the live catalogue from riteshosta.com/s/store; checkout stays on Graphy (RO-PG014, §1.6 decision). Titles/prices are placeholders. */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Learn the System, Not Just the Theory</h2>
            <p>Every course maps to a framework I ship for clients. Enrol and checkout happen on Graphy.</p>
          </div>
          <div className="grid g3">
            {COURSES.map((c) => (
              <div key={c.title} className="card reveal" style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: 12 }}>{c.title}</h3>
                <p style={{ marginTop: 6 }}>{c.body}</p>
                <p className="mini" style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--accent-text)", letterSpacing: "-.01em" }}>
                  {c.price}
                </p>
                <div style={{ marginTop: "auto", paddingTop: 20 }}>
                  {/* [CONFIRM] Graphy store URL before publish */}
                  <a href="https://riteshosta.com/s/store" target="_blank" rel="noopener" className="btn btn-primary">
                    <span className="dot" />Enrol on Graphy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Newsletter — homepage feature treatment */}
      <section className="section">
        <div className="wrap">
          <NLBlock variant="feature" />
        </div>
      </section>
    </>
  );
}
