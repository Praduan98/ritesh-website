import Link from "next/link";
import type { Metadata } from "next";
import { SignalsChain } from "@/components/diagrams/FrameworkDiagrams";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "Signal-Led GTM Team Coaching — 4-Week Program" },
  description:
    "Four weeks training your RevOps, marketing ops and SDR leads to run the S.I.G.N.A.L.S playbook on your own pipeline, accounts and stack.",
  alternates: { canonical: "/programs/gtm-team-coaching" },
};

const FACTS = [
  { k: "Cadence", d: "4 weeks · 2 live sessions per week" },
  { k: "Cohort", d: "Small cohort — your core GTM team" },
  { k: "Material", d: "Your accounts, your stack, your data" },
  { k: "Keeps", d: "Playbook and templates, yours to keep" },
];

const HERO_FACTS = [
  "4 weeks · 2 live sessions/week",
  "Your accounts, your stack, your data",
  "Playbook and templates, yours to keep",
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

      {/* M02 · What your team learns */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What Your Team Learns</h2>
            <p>
              One letter of the playbook per session, applied live to your accounts: how to spot the signals that
              matter in your market, integrate them without building a data swamp, generate messaging that earns a
              reply, and automate the parts that should never need a human.
            </p>
          </div>
          <SignalsChain />
        </div>
      </section>

      {/* M03 · Format */}
      <section className="section">
        <div className="wrap">
          <div className="grid g4">
            {FACTS.map((f) => (
              <div key={f.k} className="card reveal">
                <p style={{ marginTop: "var(--s3)", color: "var(--ink)", fontWeight: 600 }}>{f.d}</p>
              </div>
            ))}
          </div>
          <p className="mini reveal" style={{ marginTop: "clamp(28px,4vw,44px)", display: "flex", gap: "var(--s5)", flexWrap: "wrap", alignItems: "center" }}>
            Also see:
            <Link href="/programs/gtm-blueprint-sprint" className="btn-link">GTM Blueprint Sprint&trade; <span className="arw">→</span></Link>
            <Link href="/programs/gtm-engine-build" className="btn-link">GTM Engine Build <span className="arw">→</span></Link>
          </p>
        </div>
      </section>

      {/* M04 · Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
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
