import Link from "next/link";
import type { Metadata } from "next";
import { ThreeEngines } from "@/components/diagrams/FrameworkDiagrams";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "The 3 GTM Engines — Signal, Personalisation, Activation" },
  description:
    "Three engines, three owners, one revenue system. How RevOps, marketing ops and sales ops split the work of signal-led go-to-market.",
  alternates: { canonical: "/frameworks/gtm-engines" },
};

const ENGINES = [
  { n: "Engine 01", name: "Signal Engine", purpose: "Detect and qualify demand.", owner: "RevOps, data or GTM ops",
    handles: ["Signal detection", "Data ingestion", "Scoring logic", "Identity resolution"], dark: "Detect" },
  { n: "Engine 02", name: "Personalisation Engine", purpose: "Turn signals into relevance.", owner: "Marketing ops",
    handles: ["AI messaging", "Personalisation logic", "Content variants", "ICP alignment"], dark: "Augment" },
  { n: "Engine 03", name: "Activation Engine", purpose: "Convert intent into pipeline.", owner: "Sales ops & SDRs",
    handles: ["Outreach execution", "Cadence orchestration", "Alerts & tasks", "CRM updates"], dark: "Reach & Kaizen" },
];

const STACK = [
  { t: "DARK", d: "explains where demand lives" },
  { t: "S.I.G.N.A.L.S", d: "executes how demand is captured" },
  { t: "3 Engines", d: "define who owns what" },
  { t: "BRIDGE Ads", d: "accelerate conversion" },
  { t: "ABM 2.0", d: "scale what works" },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://riteshosta.com/frameworks" },
    { "@type": "ListItem", position: 3, name: "The 3 GTM Engines", item: "https://riteshosta.com/frameworks/gtm-engines" },
  ],
};

export default function GtmEngines() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>The <span className="accent">3 GTM Engines</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            Signals run through three engines. Each has one owner, one job and one stack. No shared ownership, because
            shared ownership is no ownership.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary"><span className="dot" />Book a call</Link>
            <Link href="/programs/gtm-engine-build" className="btn btn-ghost">See the Engine Build</Link>
          </div>
        </div>
        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}><ThreeEngines /></div>
      </section>

      {/* M02 · The engines */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Three Engines, Three Owners</h2>
            <p>Each engine maps to one layer of the DARK funnel — so the vision and the org chart line up.</p>
          </div>
          <div className="grid g3">
            {ENGINES.map((e) => (
              <div key={e.name} className="card reveal" style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: 12 }}>{e.name}</h3>
                <p style={{ marginTop: 6, color: "var(--ink)", fontWeight: 600, fontSize: "1.05rem" }}>{e.purpose}</p>
                <p className="mini" style={{ marginTop: 14, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: ".08em", fontSize: ".72rem", color: "var(--muted)" }}>
                  Owned by {e.owner}
                </p>
                <div className="pillrow" style={{ marginTop: 14 }}>
                  {e.handles.map((h) => <span key={h} className="pill">{h}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · The full stack, simplified */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>The Full Stack, Simplified</h2>
            <p>Read all three layers in order and the whole system collapses into five lines.</p>
          </div>
          <div className="card reveal" style={{ padding: 0, overflow: "hidden" }}>
            {STACK.map((s, i) => (
              <div key={s.t} style={{ display: "flex", alignItems: "baseline", gap: "clamp(14px,3vw,32px)", padding: "clamp(18px,2.4vw,26px) clamp(22px,3vw,36px)", borderTop: i === 0 ? "none" : "1px solid var(--hairline)" }}>
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--muted-2)", fontSize: ".85rem", flex: "none", width: 26 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.15rem,1rem+.7vw,1.5rem)", color: "var(--ink)", flex: "none", minWidth: "clamp(120px,22vw,190px)", letterSpacing: "-.01em" }}>{s.t}</span>
                <span style={{ color: "var(--muted)", fontSize: "1.05rem" }}>{s.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M04 · Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            heading="Want This Running In Your Company?"
            body="I build these engines with your team, then hand them the keys."
            ctas={[
              { label: "See the GTM Engine Build", href: "/programs/gtm-engine-build", primary: true },
              { label: "Book a call", href: "/contact" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
