import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "Signal-Led GTM Team Coaching — 4-Week Program" },
  description:
    "Four weeks training your RevOps, marketing ops and SDR leads to run the S.I.G.N.A.L.S playbook on your own pipeline, accounts and stack.",
  alternates: { canonical: "/programs/gtm-team-coaching" },
};

// Hand-drawn line icons (viewBox 0 0 24 24; stroke set in CSS via the hue).
const ICONS: Record<string, ReactNode> = {
  // Spot — a radar sweep catching a blip
  radar: <><path d="M3 12a9 9 0 0 1 9-9" /><path d="M7 12a5 5 0 0 1 5-5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><path d="M12 12 18.5 5.5" /><circle cx="18.6" cy="5.4" r="1.5" /></>,
  // Integrate — separate streams merging into one
  merge: <><path d="M3 6h4c4 0 4 6 8 6h6" /><path d="M3 18h4c4 0 4-6 8-6" /><path d="M18 9l3 3-3 3" /></>,
  // Generate — a spark of ignition
  spark: <><path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" /></>,
  // Automate — a gear turning itself
  gear: <><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" /></>,
  // Cadence — a calendar with two marked sessions
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /><circle cx="8.5" cy="14" r="1" fill="currentColor" stroke="none" /><circle cx="15.5" cy="14" r="1" fill="currentColor" stroke="none" /></>,
  // Cohort — a small group of people
  team: <><circle cx="9" cy="8.5" r="2.6" /><path d="M4 18a5 5 0 0 1 10 0" /><circle cx="16.5" cy="9.5" r="2" /><path d="M15.2 13.6A4.5 4.5 0 0 1 20 18" /></>,
  // Material — your data / stack
  database: <><ellipse cx="12" cy="6" rx="7" ry="2.8" /><path d="M5 6v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" /><path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" /></>,
  // Keeps — a bookmark you hold onto
  bookmark: <><path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.5a1 1 0 0 1 1-1Z" /></>,
};

// Hero fact card — kept verbatim (the hero is unchanged).
const HERO_FACTS = [
  "4 weeks · 2 live sessions/week",
  "Your accounts, your stack, your data",
  "Playbook and templates, yours to keep",
];

const LEARN = [
  { icon: "radar", hue: "var(--cyan)", title: "Spot the signals",
    body: "Find the buying signals that actually predict revenue in your market." },
  { icon: "merge", hue: "var(--cyan-dark)", title: "Integrate cleanly",
    body: "Pull every signal into one system — without building a data swamp." },
  { icon: "spark", hue: "var(--gold-shade)", title: "Generate replies",
    body: "Write signal-aware messaging that earns an answer, not an unsubscribe." },
  { icon: "gear", hue: "var(--iris)", title: "Automate the rest",
    body: "Hand the repeatable work to workflows, so the team scales without babysitting it." },
];

const FORMAT = [
  { icon: "calendar", hue: "var(--cyan)", title: "Cadence", body: "Four weeks, two live sessions a week." },
  { icon: "team", hue: "var(--cyan-dark)", title: "Cohort", body: "A small cohort — your core GTM team." },
  { icon: "database", hue: "var(--gold-shade)", title: "Material", body: "Your accounts, your stack, your data — never a case study." },
  { icon: "bookmark", hue: "var(--iris)", title: "Yours to keep", body: "The playbook and every template, yours to keep." },
];

const RELATED = [
  { name: "GTM Blueprint Sprint™", sub: "4-week 1:1 strategy intensive", href: "/programs/gtm-blueprint-sprint" },
  { name: "GTM Engine Build", sub: "Done-with-you implementation", href: "/programs/gtm-engine-build" },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Signal-Led GTM Team Coaching", item: "https://riteshosta.com/programs/gtm-team-coaching" },
  ],
};

const SERVICE = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Signal-Led GTM Team Coaching",
  serviceType: "GTM team coaching",
  url: "https://riteshosta.com/programs/gtm-team-coaching",
  description:
    "Four weeks training your RevOps, marketing ops and SDR leads to run the S.I.G.N.A.L.S playbook on your own pipeline, accounts and stack.",
  provider: {
    "@type": "Person", name: "Ritesh Osta", url: "https://riteshosta.com",
    worksFor: { "@type": "Organization", name: "InsightsTap", url: "https://insightstap.com" },
  },
};

const arrowGo = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M5 12h13M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GtmTeamCoaching() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />

      {/* M01 · Hero — split: copy left, fact card right */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>Signal-Led <span className="accent">GTM Coaching</span></h1>
            <p className="lead">
              I train your RevOps, marketing ops and SDR leads to run the S.I.G.N.A.L.S playbook themselves.
              Four weeks, twice a week, working on your pipeline — not a case study.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Enquire about coaching</Link>
            </div>
          </div>
          <div className="card" style={{ alignSelf: "center", width: "100%", maxWidth: 470, justifySelf: "center" }}>
            <div style={{ marginTop: "var(--s4)" }}>
              {HERO_FACTS.map((f, i) => (
                <p key={f} style={{
                  padding: "clamp(14px,1.8vw,18px) 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
                  color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "clamp(1.05rem,1rem + .4vw,1.25rem)", letterSpacing: "-.01em",
                }}>{f}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* M02 · What your team learns — four capability cards */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What Your Team Learns</h2>
            <p>One letter of the playbook per session, applied live to your own accounts — until your team can run it without me.</p>
          </div>
          <div className="tc-grid4">
            {LEARN.map((c) => (
              <article key={c.title} className="bp-fit reveal" style={{ "--bp-hue": c.hue } as CSSProperties}>
                <span className="bp-fit-ic"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[c.icon]}</svg></span>
                <h3 className="bp-fit-label">{c.title}</h3>
                <p className="bp-fit-body">{c.body}</p>
              </article>
            ))}
          </div>
          <p className="mini reveal tc-more">
            Built on the full seven-step{" "}
            <Link href="/frameworks/signals-playbook" className="btn-link">S.I.G.N.A.L.S playbook <span className="arw">→</span></Link>
          </p>
        </div>
      </section>

      {/* M03 · How it runs — format cards */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>How It Runs</h2>
            <p>Four weeks, built around your team&rsquo;s calendar and your live pipeline.</p>
          </div>
          <div className="tc-grid4">
            {FORMAT.map((c) => (
              <article key={c.title} className="bp-fit reveal" style={{ "--bp-hue": c.hue } as CSSProperties}>
                <span className="bp-fit-ic"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[c.icon]}</svg></span>
                <h3 className="bp-fit-label">{c.title}</h3>
                <p className="bp-fit-body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* M04 · Related programs + closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
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
            heading="Train the Team That Has to Run It"
            body="The system has to outlive the engagement. That is the whole point."
            ctas={[
              { label: "Enquire about coaching", href: "/contact", primary: true },
              { label: "Read the playbook", href: "/frameworks/signals-playbook" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
