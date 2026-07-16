import Link from "next/link";
import type { Metadata } from "next";
import SignalOrbit from "@/components/diagrams/SignalOrbit";
import NLBlock from "@/components/modules/NLBlock";

export const metadata: Metadata = {
  title: { absolute: "GTM Frameworks — DARK, SIGNALS & the 3 Engines" },
  description:
    "Three layers, one operating model. The DARK Funnel, the S.I.G.N.A.L.S playbook and the 3 GTM Engines — the system behind signal-led B2B growth.",
  alternates: { canonical: "/frameworks" },
};

// One row per layer: role + audience + cadence + link to the deep-dive page.
// (Merges the old plain table and the redundant "layer by layer" cards.)
const LAYERS = [
  { n: "01", name: "DARK Framework", role: "Vision — the “why”", who: "Executives, all-hands, keynote", when: "First 5–10 minutes", href: "/frameworks/dark-funnel", hue: "var(--cyan)" },
  { n: "02", name: "S.I.G.N.A.L.S", role: "Execution playbook — the “how”", who: "RevOps, marketing ops, SDR/BDR managers", when: "Workshop & playbook handoff", href: "/frameworks/signals-playbook", hue: "var(--cyan-dark)" },
  { n: "03", name: "The 3 GTM Engines", role: "Tech & ownership — the “who runs it”", who: "Ops leads, tooling owners, IT", when: "Implementation deep-dives", href: "/frameworks/gtm-engines", hue: "var(--iris)" },
];

const ACCEL = [
  { label: "BRIDGE Ads", title: "Ads that sit between signals and sales",
    body: "Signal-activated ads that don’t educate cold buyers — they bridge existing intent to action, firing only when behaviour says a buyer is in-market.",
    icon: <><circle cx="5" cy="16" r="2" /><circle cx="19" cy="16" r="2" /><path d="M5 16a10 8 0 0 1 14 0" /><path d="M12 8.5V4M9.5 6l2.5-2 2.5 2" /></> },
  { label: "ABM 2.0", title: "Orchestration, not an account list",
    body: "Signal-led account orchestration: dynamic selection, buying-group focus and behaviour-based prioritisation across all three engines.",
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></> },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://riteshosta.com/frameworks" },
  ],
};

export default function Frameworks() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero + interactive system map */}
      <section className="hero orbit-band wrap">
        <div style={{ maxWidth: 780, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto", marginTop: 16 }}>
            Modern Revenue <span className="accent">Is a System</span>
          </h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "52ch" }}>
            GTM doesn’t fail because teams lack tools. It fails because teams operate without a system. Mine has three layers — explore them below.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/playbooks" className="btn btn-primary"><span className="dot" />Download the playbook</Link>
            <Link href="/work-with-me" className="btn btn-ghost">Work With Me</Link>
          </div>
        </div>
        <div style={{ marginTop: "clamp(44px,5vw,72px)" }}><SignalOrbit /></div>
      </section>

      {/* M02 · One system, three altitudes — the ladder (audience + cadence + deep-dive link) */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>One System, Three Altitudes</h2>
            <p>One idea for the boardroom, one for the operators, one for the people who own the tools. Same system, three altitudes.</p>
          </div>
          <div className="fw-ladder">
            {LAYERS.map((l) => (
              <Link key={l.href} href={l.href} className="fw-alt reveal" style={{ "--fw-hue": l.hue } as React.CSSProperties}>
                <span className="fw-alt-num">{l.n}</span>
                <div className="fw-alt-main">
                  <div>
                    <span className="fw-alt-name">{l.name}</span>
                    <span className="fw-alt-role">{l.role}</span>
                  </div>
                  <div className="fw-alt-facts">
                    <div><span className="fw-fact-label">Who it’s for</span><span className="fw-fact-val">{l.who}</span></div>
                    <div><span className="fw-fact-label">When it lands</span><span className="fw-fact-val">{l.when}</span></div>
                  </div>
                </div>
                <span className="fw-alt-go" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Two accelerators */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Two Accelerators</h2>
            <p>Two motions that plug into the system once the three layers are running.</p>
          </div>
          <div className="grid g2">
            {ACCEL.map((a) => (
              <div key={a.label} className="card reveal">
                <span className="icon-badge"><svg viewBox="0 0 24 24" aria-hidden="true">{a.icon}</svg></span>
                <h3 style={{ marginTop: 12 }}>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M04 · Signature method — feature band */}
      <section className="section feature">
        <div className="wrap fw-method" style={{ textAlign: "center", maxWidth: 940 }}>
          <svg className="fw-method-trace reveal" viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="15" x2="220" y2="15" stroke="rgba(13,207,207,.35)" strokeWidth="1" />
            <path d="M0 15 H150 L166 15 L182 5 L198 15 H220" fill="none" stroke="#0DCFCF" strokeWidth="1.6" strokeLinejoin="round" />
            <circle cx="182" cy="5" r="3.4" fill="#F4B740" />
          </svg>
          <p className="fw-quote reveal">
            &ldquo;We don’t generate more leads. We detect demand earlier, act smarter, and compound results.&rdquo;
          </p>
          <p className="fw-method-tag reveal">This is Signal-Led GTM Engineering.</p>
        </div>
      </section>

      {/* M05 · Newsletter — homepage feature treatment */}
      <section className="section">
        <div className="wrap"><NLBlock variant="feature" /></div>
      </section>
    </>
  );
}
