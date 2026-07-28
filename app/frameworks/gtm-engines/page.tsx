import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "The 3 GTM Engines — Signal, Personalisation, Activation" },
  description:
    "Three engines, three owners, one revenue system. How RevOps, marketing ops and sales ops split the work of signal-led go-to-market.",
  alternates: { canonical: "/frameworks/gtm-engines" },
};

// Hand-drawn line icons, one per engine.
const ICONS: Record<string, ReactNode> = {
  // Signal — a radar sweep catching an unseen blip
  signal: <><path d="M3 12a9 9 0 0 1 9-9" /><path d="M7 12a5 5 0 0 1 5-5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><path d="M12 12 18.5 5.5" /><circle cx="18.6" cy="5.4" r="1.5" /></>,
  // Personalisation — a message tailored with a spark
  personalisation: <><path d="M5 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8l-4 3.4V15H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /><path d="M12 7.6l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9.9-1.9Z" /></>,
  // Activation — a bolt firing intent into pipeline
  activation: <><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" /></>,
};

const ENGINES = [
  { key: "signal", n: "Engine 01", name: "Signal Engine", purpose: "Detect and qualify demand.", owner: "RevOps, data or GTM ops",
    handles: ["Signal detection", "Data ingestion", "Scoring logic", "Identity resolution"], dark: "Detect", hue: "var(--cyan)" },
  { key: "personalisation", n: "Engine 02", name: "Personalisation Engine", purpose: "Turn signals into relevance.", owner: "Marketing ops",
    handles: ["AI messaging", "Personalisation logic", "Content variants", "ICP alignment"], dark: "Augment", hue: "var(--iris)" },
  { key: "activation", n: "Engine 03", name: "Activation Engine", purpose: "Convert intent into pipeline.", owner: "Sales ops & SDRs",
    handles: ["Outreach execution", "Cadence orchestration", "Alerts & tasks", "CRM updates"], dark: "Reach & Kaizen", hue: "var(--gold-shade)" },
];

const STACK = [
  { t: "DARK", d: "explains where demand lives" },
  { t: "S.I.G.N.A.L.S", d: "executes how demand is captured" },
  { t: "3 Engines", d: "define who owns what" },
  { t: "BRIDGE Ads", d: "accelerate conversion" },
  { t: "ABM 2.0", d: "scale what works" },
];

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

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

      {/* M01 · Split hero (dark) — copy left, the three engine "orbs" right, emerging from a deep-green field */}
      <section className="split-hero sh-dark">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-gtm-orbs.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <span className="sh-eyebrow">Layer 03 · Ownership</span>
            <h1>The <span className="accent">3 GTM Engines</span></h1>
            <p className="lead">
              Signals run through three engines. Each has one owner, one job and one stack — no shared ownership,
              because shared ownership is no ownership.
            </p>
            <div className="hero-cta">
              <Link href="/programs/gtm-engine-build" className="btn btn-primary">See the Engine Build <span className="arw">→</span></Link>
              <Link href="/contact" className="btn btn-ghost">Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Three engines, three owners */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>Three Engines, Three Owners</h2>
            <p>Each engine maps to one layer of the DARK funnel — so the vision and the org chart line up.</p>
          </div>
          <div className="engine-grid">
            {ENGINES.map((e) => (
              <article key={e.key} className="engine-card reveal" style={{ "--ec-hue": e.hue } as CSSProperties}>
                <div className="ec-top">
                  <span className="ec-icon"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[e.key]}</svg></span>
                  <span className="ec-num">{e.n}</span>
                </div>
                <h3 className="ec-name">{e.name}</h3>
                <p className="ec-purpose">{e.purpose}</p>
                <span className="ec-owner">Owned by {e.owner}</span>
                <ul className="ec-list">
                  {e.handles.map((h) => (
                    <li key={h}><span className="ec-check">{check}</span><span>{h}</span></li>
                  ))}
                </ul>
                <span className="ec-maps">Maps to DARK · {e.dark}</span>
              </article>
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
          <div className="card fw-stack reveal">
            {STACK.map((s, i) => (
              <div key={s.t} className="fs-row">
                <span className="fs-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="fs-name">{s.t}</span>
                <span className="fs-desc">{s.d}</span>
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
