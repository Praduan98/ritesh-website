import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";

export const metadata: Metadata = {
  title: { absolute: "The DARK Funnel Framework — Detect, Augment, Reach" },
  description:
    "Most buying intent never reaches your CRM. The DARK Funnel framework shows how to detect demand before the form fill and turn it into pipeline.",
  alternates: { canonical: "/frameworks/dark-funnel" },
};

// Hand-drawn line icons, one per move.
const ICONS: Record<string, ReactNode> = {
  // Detect — radar sweep picking up an unseen blip
  D: <><path d="M3 12a9 9 0 0 1 9-9" /><path d="M7 12a5 5 0 0 1 5-5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><path d="M12 12 18.5 5.5" /><circle cx="18.6" cy="5.4" r="1.5" /></>,
  // Augment — stacked layers of context
  A: <><path d="M12 3 20.5 7.6 12 12 3.5 7.6 12 3Z" /><path d="M3.5 12 12 16.5 20.5 12" /><path d="M3.5 16.5 12 21 20.5 16.5" /></>,
  // Reach — paper plane fired at the peak
  R: <><path d="M21 4 3 11l7 3 3 7 8-17Z" /><path d="M21 4 10 14" /></>,
  // Kaizen — a self-improving loop
  K: <><path d="M4.5 12a7.5 7.5 0 0 1 12.9-5.2" /><path d="M17.6 3.4v3.4h-3.4" /><path d="M19.5 12a7.5 7.5 0 0 1-12.9 5.2" /><path d="M6.4 20.6v-3.4h3.4" /></>,
};

const HUES: Record<string, string> = {
  D: "var(--cyan)", A: "var(--cyan-dark)", R: "var(--gold-shade)", K: "var(--iris)",
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
    { "@type": "ListItem", position: 3, name: "DARK Funnel", item: "https://riteshosta.com/frameworks/dark-funnel" },
  ],
};

export default function DarkFunnel() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, the DARK Funnel diagram right, softly blended */}
      <section className="split-hero df-hero">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-dark-funnel.webp" alt="" fill priority quality={92}
            sizes="(max-width:820px) 100vw, 56vw" style={{ objectFit: "contain", objectPosition: "center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <span className="sh-eyebrow">Layer 01 · The Vision</span>
            <h1>The <span className="accent">D.A.R.K</span> Funnel</h1>
            <p className="lead">
              Most buying intent is invisible to your CRM, your ads dashboard and your lead reports. DARK is how we see
              demand before it becomes a lead.
            </p>
            <div className="hero-cta">
              <Link href="/playbooks" className="btn btn-primary">Download the DARK playbook <span className="arw">→</span></Link>
              <Link href="/contact" className="btn btn-ghost">Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · The four moves — D / A / R / K */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>Four Moves, One Loop</h2>
            <p>Detect demand while it&rsquo;s invisible, augment it with context, reach at the peak — then improve every cycle. Kaizen loops back to Detect.</p>
          </div>
          <div className="dark-grid">
            {STEPS.map((s) => (
              <article key={s.L} className="dark-step reveal" style={{ "--ds-hue": HUES[s.L] } as CSSProperties}>
                <span className="ds-watermark" aria-hidden="true">{s.L}</span>
                <div className="ds-head">
                  <span className="ds-icon"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[s.L]}</svg></span>
                  <h3 className="ds-title">{s.h}</h3>
                </div>
                <p className="ds-intro">{s.intro}</p>
                <ul className="ds-list">
                  {s.list.map((l) => (
                    <li key={l}><span className="ds-check">{check}</span><span>{l}</span></li>
                  ))}
                </ul>
                <p className="ds-quote">{s.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Next layer */}
      <section className="section next-layer">
        <div className="wrap">
          <Link href="/frameworks/signals-playbook" className="card-link reveal">
            <div className="card df-next">
              <div>
                <span className="df-next-kicker">Layer 02</span>
                <p className="df-next-title">DARK explains where demand lives. S.I.G.N.A.L.S is how you capture it.</p>
              </div>
              <span className="btn-link">Read the S.I.G.N.A.L.S playbook <span className="arw">→</span></span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
