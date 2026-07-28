import type { Metadata } from "next";
import QualifyForm from "@/components/site/QualifyForm";
import LogoWall from "@/components/modules/LogoWall";
import { hueVars } from "@/data/cardHues";

export const metadata: Metadata = {
  title: { absolute: "Work With Me — Discuss Your Project" },
  description:
    "Tell me about your GTM project. Book a call to get a custom pipeline diagnosis, a 90-day roadmap, a signal map and an automation blueprint from a Top Rated Fiverr Pro.",
  alternates: { canonical: "/work-with-me" },
};

// Credential bullets — grounded in the site's published stats (homepage stat bar + Fiverr rating).
const CREDS = [
  "250+ GTM projects delivered for B2B tech companies",
  "$100M+ in pipeline generated for clients",
  "20+ years across B2B go-to-market and product",
  "Top Rated Fiverr Pro — 5.0 across 55 reviews",
  "Direct access to the DARK framework, S.I.G.N.A.L.S and the 3 GTM Engines",
];

// "What you get on the call" — the reference's four-benefit grid, in GTM terms.
const GETS = [
  {
    title: "Pipeline Diagnosis",
    body: "Where your funnel leaks — mapped signal by signal, before we touch a single tool.",
    icon: <path d="M3 5h18l-7 8v5l-4 2v-7L3 5Z" />,
  },
  {
    title: "90-Day Roadmap",
    body: "A sequenced plan of plays, with milestones, owners and the order to ship them.",
    icon: <><rect x="3.5" y="4.5" width="17" height="16" rx="2" /><path d="M3.5 9h17M8 3v4M16 3v4" /></>,
  },
  {
    title: "Signal & Data Map",
    body: "Which buying signals to capture and act on — and where they already live in your stack.",
    icon: <><path d="M4 13a8 8 0 0 1 8-8" /><path d="M7.5 13a4.5 4.5 0 0 1 4.5-4.5" /><circle cx="12" cy="13" r="1.6" /></>,
  },
  {
    title: "Automation Blueprint",
    body: "The stack and workflows that run the engine — without adding headcount.",
    icon: <><circle cx="12" cy="12" r="3.3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.1 5.1l2.1 2.1M16.8 16.8l2.1 2.1M18.9 5.1l-2.1 2.1M7.2 16.8l-2.1 2.1" /></>,
  },
];

const check = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="var(--chip)" />
    <path d="M7 12.4l3.2 3.2L17 9" fill="none" stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Work With Me", item: "https://riteshosta.com/work-with-me" },
  ],
};

export default function WorkWithMe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero — copy + credentials (left), project form (right) */}
      <section className="hero wrap" id="book">
        <div className="hero-grid">
          <div>
            <h1 style={{ maxWidth: "15ch" }}>Discuss Your<br /><span className="accent">Project</span></h1>
            <ul className="wwm-creds">
              {CREDS.map((c) => (
                <li key={c}>{check}<span>{c}</span></li>
              ))}
            </ul>
          </div>
          <QualifyForm />
        </div>
      </section>

      {/* M02 · Social proof — client logo strip */}
      <section className="section tint" style={{ paddingBlock: "clamp(48px,6vw,88px)" }}>
        <div className="wrap">
          <div
            className="section-head reveal"
            style={{ textAlign: "center", alignItems: "center", marginInline: "auto", marginBottom: "clamp(28px,3.5vw,48px)" }}
          >
            <h2>250+ GTM projects delivered — from startup to enterprise</h2>
          </div>
          <LogoWall heading="" layout="marquee" />
        </div>
      </section>

      {/* M03 · What you get — dark brand band */}
      <section className="section feature">
        <div className="wrap">
          <div
            className="section-head reveal"
            style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}
          >
            <h2>Book a Call to Get Your Custom GTM Strategy</h2>
          </div>
          <div className="grid g2">
            {GETS.map((g, i) => (
              <div key={g.title} className="card hue-card wwm-benefit reveal" style={hueVars(i)}>
                <span className="icon-badge"><svg viewBox="0 0 24 24" aria-hidden="true">{g.icon}</svg></span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "clamp(40px,5vw,64px)" }}>
            <a href="#book" className="btn btn-primary"><span className="dot" />Book a Call</a>
          </div>
        </div>
      </section>
    </>
  );
}
