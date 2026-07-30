import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import StatCounter from "@/components/site/StatCounter";

export const metadata: Metadata = {
  title: { absolute: "GTM Engine Build — Done-For-You GTM Systems" },
  description:
    "Signal stack, AI agents, CRM automation and BRIDGE Ads, built and live in 4 to 6 weeks by the InsightsTap team. From $10K per implementation.",
  alternates: { canonical: "/programs/gtm-engine-build" },
};

// Hand-drawn line icons (viewBox 0 0 24 24; stroke set in CSS via the hue).
const ICONS: Record<string, ReactNode> = {
  // Signal Infrastructure — a radar sweep catching a blip
  radar: <><path d="M3 12a9 9 0 0 1 9-9" /><path d="M7 12a5 5 0 0 1 5-5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><path d="M12 12 18.5 5.5" /><circle cx="18.6" cy="5.4" r="1.5" /></>,
  // AI Agents — a chat bubble with a spark
  ai: <><path d="M5 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8l-4 3.4V15H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /><path d="M12 7.6l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9.9-1.9Z" /></>,
  // CRM as a Decision Engine — a hub routing to four nodes
  hub: <><circle cx="12" cy="12" r="2.6" /><circle cx="5" cy="6" r="1.8" /><circle cx="19" cy="6" r="1.8" /><circle cx="5" cy="18" r="1.8" /><circle cx="19" cy="18" r="1.8" /><path d="M6.5 7.2 10 10.3M17.5 7.2 14 10.3M6.5 16.8 10 13.7M17.5 16.8 14 13.7" /></>,
  // Outreach Orchestration — a paper plane
  send: <><path d="M21 4 3 11l7 3 3 7 8-17Z" /><path d="M21 4 10 14" /></>,
  // BRIDGE Ads — a megaphone broadcasting
  ads: <><path d="M3.5 10v4l11 4V6L3.5 10Z" /><path d="M14.5 7.5a4.5 4.5 0 0 1 0 9" /><path d="M6.5 15v2.4a1.5 1.5 0 0 0 3 0V16" /></>,
};

const FACTS = ["4–12 weeks, scope-dependent", "Built by the InsightsTap team", "Your team gets the keys"];

const BUILD = [
  { icon: "radar", hue: "var(--cyan)", name: "Signal Infrastructure",
    desc: "Detection layer, enrichment pipeline, scoring engine, activation triggers. Clay, RB2B, Factors.ai, Common Room." },
  { icon: "ai", hue: "var(--iris)", name: "AI Agents",
    desc: "SDR, chat and voice agents on GPT-4o and Claude. They personalise, they qualify, they book." },
  { icon: "hub", hue: "var(--cyan-dark)", name: "CRM as a Decision Engine",
    desc: "HubSpot or Salesforce rebuilt around routing, scoring and lifecycle logic. We integrate — we do not rip and replace." },
  { icon: "send", hue: "var(--gold-shade)", name: "Outreach Orchestration",
    desc: "Smartlead, Apollo, Instantly and Lemlist wired to the signal layer, with channel-switching and exit conditions." },
  { icon: "ads", hue: "var(--cyan)", name: "BRIDGE Ads",
    desc: "LinkedIn, Google and Meta triggered by signals, warming accounts before a human ever reaches out." },
];

const RELATED = [
  { name: "GTM Blueprint Sprint™", sub: "4-week 1:1 strategy intensive", href: "/programs/gtm-blueprint-sprint" },
  { name: "GTM Team Coaching", sub: "Train your in-house team", href: "/programs/gtm-team-coaching" },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "GTM Engine Build", item: "https://riteshosta.com/programs/gtm-engine-build" },
  ],
};

const SERVICE = {
  "@context": "https://schema.org", "@type": "Service",
  name: "GTM Engine Build",
  serviceType: "GTM implementation",
  provider: { "@type": "Person", name: "Ritesh Osta" },
  areaServed: "Worldwide",
  description:
    "Signal stack, AI agents, CRM automation and BRIDGE Ads, built and live in 4 to 6 weeks by the InsightsTap team. From $10K per implementation.",
  url: "https://riteshosta.com/programs/gtm-engine-build",
};

const arrowGo = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M5 12h13M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GtmEngineBuild() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />

      {/* M01 · Hero — split: copy left, fact card right */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>GTM <span className="accent">Engine Build</span></h1>
            <p className="lead">
              You have the blueprint. My team at{" "}
              <a href="https://insightstap.com" target="_blank" rel="noopener">InsightsTap</a>{" "}
              builds it — signal stack, AI agents, CRM automation and BRIDGE Ads, live and running in weeks, not quarters.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Book a scoping call</Link>
            </div>
          </div>
          {/* Engagement window is 4–12 weeks scope-dependent; "most engines go live in 4–6" (M03) — both verbatim from the architecture */}
          <div style={{ width: "100%", maxWidth: 470, justifySelf: "center" }}>
            <div className="card reveal" style={{ width: "100%" }}>
              <div style={{ marginTop: "var(--s4)" }}>
                {FACTS.map((f, i) => (
                  <p key={f} style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.1rem,1rem + .5vw,1.35rem)",
                    color: "var(--ink)", letterSpacing: "-.01em", lineHeight: 1.35,
                    padding: "clamp(14px,1.8vw,20px) 0", borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
                  }}>{f}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · What gets built — hue-coded system cards */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What Gets Built</h2>
            <p>Five systems, wired into one engine — built by the InsightsTap team, then handed to yours.</p>
          </div>
          <div className="bp-fit-grid">
            {BUILD.map((b) => (
              <article key={b.name} className="bp-fit reveal" style={{ "--bp-hue": b.hue } as CSSProperties}>
                <span className="bp-fit-ic"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[b.icon]}</svg></span>
                <h3 className="bp-fit-label">{b.name}</h3>
                <p className="bp-fit-body">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Timeline & price — stat band */}
      <section className="section feature stats-band">
        <div className="wrap">
          <div className="eb-timing">
            <h2 className="eb-timing-h reveal">Live in Weeks, <span className="eb-accent">Not Quarters</span></h2>
            <div className="eb-stats reveal">
              <StatCounter prefix="4–" value={6} unit="wks" caption="to a live engine" />
              <StatCounter value={2} unit="wks" caption="to first pipeline, usually" />
              {/* [CONFIRM] $10K figure predates current positioning — verify before ship */}
              <StatCounter prefix="$" value={10} bigSuffix="K" unit="+" caption="per build · scope-dependent" />
            </div>
          </div>
        </div>
      </section>

      {/* M04 · Related programs + closing CTA (ctaband inlined so the InsightsTap button can carry target/rel) */}
      <section className="section">
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
          <div className="ctaband reveal">
            <h3>Ready to Build?</h3>
            <p>Tell me where the pipeline is stuck. I will show you the signals you are missing.</p>
            <div className="btns">
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Book a scoping call</Link>
              <a href="https://insightstap.com" target="_blank" rel="noopener" className="btn btn-ghost">See InsightsTap</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
