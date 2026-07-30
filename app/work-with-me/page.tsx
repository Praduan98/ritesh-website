import type { Metadata } from "next";
import type { CSSProperties } from "react";
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
// Icons are the hand-drawn set in /public/icons, painted via CSS mask rather than
// <img>: these files carry no fill attribute, so as an image they'd render black
// and vanish on the dark band. Masking lets them take the brand colour and invert
// on card hover like the outline icons they replaced. Keeping them as files (not
// inline SVG) keeps ~19KB of path data out of the HTML.
const GETS = [
  {
    title: "Pipeline Diagnosis",
    body: "Where your funnel leaks — mapped signal by signal, before we touch a single tool.",
    icon: "/icons/funnel-tool_3907091.svg",
  },
  {
    title: "90-Day Roadmap",
    body: "A sequenced plan of plays, with milestones, owners and the order to ship them.",
    icon: "/icons/calendar_4771798.svg",
  },
  {
    title: "Signal & Data Map",
    body: "Which buying signals to capture and act on — and where they already live in your stack.",
    icon: "/icons/radar_4850008.svg",
  },
  {
    title: "Automation Blueprint",
    body: "The stack and workflows that run the engine — without adding headcount.",
    icon: "/icons/design_8457355.svg",
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
                <span className="icon-badge">
                  <i className="wwm-ic" aria-hidden="true" style={{ "--ic": `url(${g.icon})` } as CSSProperties} />
                </span>
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
