import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "GTM Blueprint Sprint™ — 4-Week 1:1 GTM Consulting" },
  description:
    "Four weeks, eight sessions, one blueprint. GTM audit, ICP and signal map, stack architecture and a phased roadmap — 1:1 with Ritesh Osta.",
  alternates: { canonical: "/programs/gtm-blueprint-sprint" },
};

// Hand-drawn line icons (viewBox 0 0 24 24; stroke set in CSS via the hue).
const ICONS: Record<string, ReactNode> = {
  // Founders — a rocket, ambition on the launch pad
  rocket: <><path d="M12 2c2.8 2.2 4 5.3 4 8.5 0 2.4-.6 4.3-1.5 6H9.5C8.6 14.8 8 12.9 8 10.5 8 7.3 9.2 4.2 12 2Z" /><circle cx="12" cy="9" r="1.6" /><path d="M9.5 16.5 7 18l1 3 2-1M14.5 16.5 17 18l-1 3-2-1" /></>,
  // CROs — a revenue line trending up
  growth: <><path d="M4 20V4M4 20h16" /><path d="M7.5 15l3-3.5 3 2.5 5-6" /><path d="M15.5 8h4v4" /></>,
  // Teams — a group of people
  team: <><circle cx="9" cy="8.5" r="2.6" /><path d="M4 18a5 5 0 0 1 10 0" /><circle cx="16.5" cy="9.5" r="2" /><path d="M15.2 13.6A4.5 4.5 0 0 1 20 18" /></>,
  // Audit — a magnifier over ruled lines
  audit: <><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5" /><path d="M8 9.5h5M8 12h3.5" /></>,
  // ICP & signal — a concentric target
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></>,
  // Architecture — stacked layers
  layers: <><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="M3 12.5 12 17.5l9-5" /><path d="M3 16.5 12 21.5l9-5" /></>,
  // Roadmap — a winding route between two nodes
  route: <><circle cx="6.5" cy="18" r="2.2" /><circle cx="17.5" cy="6" r="2.2" /><path d="M8.7 18h5.3a3 3 0 0 0 0-6H10a3 3 0 0 1 0-6h5.3" /></>,
};

// AA-safe text partner for each hue (used for small mono labels on white).
const INK: Record<string, string> = {
  "var(--cyan)": "var(--teal)",
  "var(--cyan-dark)": "var(--teal)",
  "var(--gold-shade)": "var(--gold-text)",
  "var(--iris)": "var(--iris-deep)",
};

const FACTS = [
  { big: "4 weeks", cap: "Audit to roadmap, in order" },
  { big: "2 sessions per week", cap: "Eight working sessions in total" },
  { big: "1:1 with Ritesh", cap: "No juniors, no hand-offs" },
];

const AUDIENCE = [
  { label: "For Founders", icon: "rocket", hue: "var(--cyan)",
    body: "Founders whose outbound has stopped working — and who don't yet know why." },
  { label: "For CROs", icon: "growth", hue: "var(--iris)",
    body: "CROs and heads of growth who have the tools, but not the system." },
  { label: "For Teams", icon: "team", hue: "var(--gold-shade)",
    body: "Teams about to spend six figures on GTM headcount who should spend it on architecture first." },
];

const WEEKS = [
  { n: "1", name: "Audit", hue: "var(--cyan)",
    desc: "Your current motion, stack, data and pipeline maths — what's broken, and what's expensive." },
  { n: "2", name: "ICP & Signal Map", hue: "var(--cyan-dark)",
    desc: "Who actually buys, and which of the 40+ signals predict it in your market." },
  { n: "3", name: "Architecture", hue: "var(--gold-shade)",
    desc: "The detection, enrichment, scoring and activation layers — and the tools for each." },
  { n: "4", name: "Roadmap", hue: "var(--iris)",
    desc: "A phased build plan with owners, sequencing and the numbers it should move." },
];

const DELIVERABLES = [
  { icon: "audit", hue: "var(--cyan)", title: "GTM Audit", body: "Every leak in your motion, named and costed." },
  { icon: "target", hue: "var(--cyan-dark)", title: "ICP & Signal Map", body: "An ICP definition and a signal map scored for your market." },
  { icon: "layers", hue: "var(--gold-shade)", title: "Stack Architecture", body: "Detection through activation — tool by tool." },
  { icon: "route", hue: "var(--iris)", title: "Execution Roadmap", body: "A phased plan your team, or mine, can build." },
];

const RELATED = [
  { name: "GTM Engine Build", sub: "Done-with-you implementation", href: "/programs/gtm-engine-build" },
  { name: "GTM Team Coaching", sub: "Level up your in-house team", href: "/programs/gtm-team-coaching" },
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

const arrowGo = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M5 12h13M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

      {/* M02 · Who this is for — hue-coded audience cards */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Who This Is For</h2>
            <p>Three people this sprint was built for — and the exact bind each one is in.</p>
          </div>
          <div className="bp-fit-grid">
            {AUDIENCE.map((a) => (
              <article key={a.label} className="bp-fit reveal" style={{ "--bp-hue": a.hue } as CSSProperties}>
                <span className="bp-fit-ic"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[a.icon]}</svg></span>
                <h3 className="bp-fit-label">{a.label}</h3>
                <p className="bp-fit-body">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · What we do — connected 4-week timeline */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Four Weeks, In Order</h2>
            <p>Audit first, roadmap last — each week builds on the one before it.</p>
          </div>
          <ol className="bp-weeks">
            {WEEKS.map((w, i) => (
              <li key={w.n} className="bp-week reveal"
                style={{ "--bp-hue": w.hue, "--bp-ink": INK[w.hue], "--bp-next": (WEEKS[i + 1] ?? w).hue } as CSSProperties}>
                <span className="bp-week-node" aria-hidden="true">{w.n}</span>
                <div className="bp-week-card">
                  <h3 className="bp-week-name">{w.name}</h3>
                  <p className="bp-week-desc">{w.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* M04 · What you walk away with — deliverable cards */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What You Walk Away With</h2>
            <p>Four artifacts you keep — whether you build them with your team or mine.</p>
          </div>
          <div className="bp-deliver-grid">
            {DELIVERABLES.map((d, i) => (
              <article key={d.title} className="bp-deliver reveal" style={{ "--bp-hue": d.hue, "--bp-ink": INK[d.hue] } as CSSProperties}>
                <span className="bp-deliver-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="bp-deliver-ic"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[d.icon]}</svg></span>
                <div>
                  <h3 className="bp-deliver-title">{d.title}</h3>
                  <p className="bp-deliver-body">{d.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* M05 · Related programs + closing CTA */}
      {/* Not paddingTop:0 like the other "continuation" sections on the site — M04 above
          is a .section.tint, so its background and bottom hairline close the band right
          here. With no top padding "Also explore" sat flush against that border. Reduced
          rather than full section padding (same scale as .section.feature.stats-band),
          since the tint band's own bottom padding already carries part of the gap. */}
      <section className="section" style={{ paddingTop: "clamp(56px,7vw,96px)" }}>
        <div className="wrap">
          <div className="reveal">
            <div className="bp-related">
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="bp-rel-card">
                  <span className="bp-rel-l">
                    <span className="bp-rel-name">{r.name}</span>
                    <span className="bp-rel-sub">{r.sub}</span>
                  </span>
                  <span className="bp-rel-go">{arrowGo}</span>
                </Link>
              ))}
            </div>
          </div>
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
