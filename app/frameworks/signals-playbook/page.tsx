import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import SignalRoadmap from "@/components/site/SignalRoadmap";

export const metadata: Metadata = {
  title: { absolute: "The S.I.G.N.A.L.S Playbook — Signal-Led GTM Execution" },
  description:
    "Spot, Integrate, Generate, Nurture, Automate, Learn, Scale. The seven-step playbook that turns detected buyer signals into booked B2B revenue.",
  alternates: { canonical: "/frameworks/signals-playbook" },
};

// Hand-drawn line icons, one per step.
const ICONS: Record<string, ReactNode> = {
  // Spot — radar sweep catching a blip
  Spot: <><path d="M3 12a9 9 0 0 1 9-9" /><path d="M7 12a5 5 0 0 1 5-5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><path d="M12 12 18.5 5.5" /><circle cx="18.6" cy="5.4" r="1.5" /></>,
  // Integrate — separate streams merging into one
  Integrate: <><path d="M3 6h4c4 0 4 6 8 6h6" /><path d="M3 18h4c4 0 4-6 8-6" /><path d="M18 9l3 3-3 3" /></>,
  // Generate — spark / ignition
  Generate: <><path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" /></>,
  // Nurture — multi-touch sequence
  Nurture: <><circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="12" r="2" /><path d="M7 6h5a5 5 0 0 1 5 5v.4" /><path d="M7 18h5a5 5 0 0 0 5-5v-.4" /></>,
  // Automate — gear + bolt
  Automate: <><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" /></>,
  // Learn — feedback loop over a rising line
  Learn: <><path d="M3 16l5-5 3.5 3.5L21 5" /><path d="M15 5h6v6" /><path d="M4.5 20a7.5 7.5 0 0 0 12.6-3" /></>,
  // Scale — expanding stack
  Scale: <><path d="M3 20h4v-6H3zM10 20h4V9h-4zM17 20h4V4h-4z" /></>,
};

const STEPS = [
  { L: "S", name: "Spot", hue: "var(--cyan)",
    intro: "Spot high-intent signals across every channel — before a form is ever filled.",
    list: ["Pricing-page & repeat visits", "Hiring surges & job posts", "ATS / HRMS adoption", "Repeat ad engagement", "LinkedIn activity"],
    quote: "Intent shows up long before a lead does." },
  { L: "I", name: "Integrate", hue: "var(--cyan-dark)",
    intro: "Integrate every signal into one system with a single source of truth.",
    list: ["CRM as the system of record", "Enrichment & data pipelines", "Identity resolution", "No silos, no duplicates"],
    quote: "A signal in a silo is a signal you can't act on." },
  { L: "G", name: "Generate", hue: "var(--gold-shade)", ignite: true,
    intro: "Generate contextual messaging with AI — written for the person, not the persona.",
    list: ["Role-specific angles", "Industry-specific proof", "Signal-aware openers", "Dynamic personalisation"],
    quote: "Relevance is the whole product." },
  { L: "N", name: "Nurture", hue: "var(--iris)",
    intro: "Nurture through orchestrated multi-touch sequences that switch channels intelligently.",
    list: ["LinkedIn → email → ads → sales", "Channel-switching logic", "Exit conditions that respect intent"],
    quote: "Cadence beats volume, every time." },
  { L: "A", name: "Automate", hue: "var(--cyan)",
    intro: "Automate routing, scoring and execution so the system runs without babysitting.",
    list: ["Workflows & alerts", "Scoring and ownership rules", "Automatic task creation"],
    quote: "If a human has to remember it, it will not happen." },
  { L: "L", name: "Learn", hue: "var(--cyan-dark)",
    intro: "Learn from outcomes so the model gets sharper with every cycle.",
    list: ["Replies & meetings booked", "Pipeline and revenue attribution", "Re-scored signal weights"],
    quote: "A score that never gets corrected is just a guess." },
  { L: "S", name: "Scale", hue: "var(--iris)", wide: true,
    intro: "Scale only what is already proven — then repeat it in new markets.",
    list: ["Proven playbooks first", "New geographies", "New ICPs and segments", "New channels once the motion holds"],
    quote: "Scale amplifies whatever you feed it — so only feed it what works." },
];

// The "formula" payoff band — four signal inputs, hue-matched to the roadmap
// order (cyan → teal → gold → iris), each with a one-word gloss.
const SF_INPUTS: { label: string; cap: string; hue: string; icon: ReactNode }[] = [
  { label: "Role", cap: "who", hue: "#6AE3E1",
    icon: <><circle cx="12" cy="8" r="3.4" /><path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" /></> },
  { label: "Context", cap: "where", hue: "#12B9AE",
    icon: <><path d="M12 3 3.5 7.4 12 11.8l8.5-4.4L12 3Z" /><path d="M3.7 12 12 16.4 20.3 12" /><path d="M3.7 16.4 12 20.8l8.3-4.4" /></> },
  { label: "Signal", cap: "when", hue: "#FAD27D",
    icon: <><circle cx="5.5" cy="18.5" r="1.4" /><path d="M5.5 13.4a5.1 5.1 0 0 1 5.1 5.1" /><path d="M5.5 8.3a10.2 10.2 0 0 1 10.2 10.2" /><circle cx="16.4" cy="7.6" r="1.3" /></> },
  { label: "Enrichment", cap: "so what", hue: "#A29BFE",
    icon: <><ellipse cx="8.8" cy="6.4" rx="5.2" ry="2.2" /><path d="M3.6 6.4v5.5c0 1.24 2.33 2.25 5.2 2.25s5.2-1.01 5.2-2.25V6.4" /><path d="M3.6 9.15c0 1.24 2.33 2.25 5.2 2.25s5.2-1.01 5.2-2.25" /><path d="M18.6 3.1l.86 2.02 2.02.86-2.02.86-.86 2.02-.86-2.02-2.02-.86 2.02-.86z" /></> },
];

// Pipeline outcome — a funnel narrowing to flow.
const SF_FUNNEL: ReactNode = <path d="M3.5 5h17l-6.6 7.6V19l-3.8 2v-8.4L3.5 5Z" />;

// AA-safe text partner for each step hue (the raw cyans fail on the tint band).
const INK: Record<string, string> = {
  "var(--cyan)": "var(--teal)",
  "var(--cyan-dark)": "var(--teal)",
  "var(--gold-shade)": "var(--gold-text)",
  "var(--iris)": "var(--iris-deep)",
};

// One connector arc, in a fixed 0 0 120 180 viewBox. Both end tangents are
// vertical, so it joins the straight rail above and below without a kink.
const ARC = "M0 0 C0 108 120 72 120 180";

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
    { "@type": "ListItem", position: 3, name: "S.I.G.N.A.L.S Playbook", item: "https://riteshosta.com/frameworks/signals-playbook" },
  ],
};

export default function SignalsPlaybook() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, signal-fibre image right, blended through the centre */}
      <section className="split-hero sh-dark">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-signals.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>The <span className="accent">S.I.G.N.A.L.S</span> Playbook</h1>
            <p className="lead">
              DARK is the vision. S.I.G.N.A.L.S is how it becomes revenue — seven steps, each with an
              owner, a tool and a trigger.
            </p>
            <div className="hero-cta">
              <Link href="/playbooks" className="btn btn-primary">Download the playbook <span className="arw">→</span></Link>
              <Link href="/programs/gtm-team-coaching" className="btn btn-ghost">Team coaching</Link>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · The seven steps */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>Seven Steps, Signal to Revenue</h2>
            <p>One letter at a time. Each step has a job, a set of tools, and a trigger that hands off to the next.</p>
          </div>
          <SignalRoadmap>
            <ol className="sc-track" role="list" aria-label="The seven S.I.G.N.A.L.S steps, in order">
              {STEPS.map((s, i) => {
                const next = STEPS[i + 1];
                return (
                  <li
                    key={s.name}
                    className={`sc-step${s.ignite ? " sc-ignite" : ""}`}
                    style={{ "--sc-hue": s.hue, "--sc-ink": INK[s.hue] } as CSSProperties}
                  >
                    {/* the road — straight rail down this row, arc across to the next */}
                    <i className="sc-rail" aria-hidden="true" />
                    {next && (
                      <svg className="sc-arc" viewBox="0 0 120 180" aria-hidden="true" focusable="false">
                        <defs>
                          {/* stop-color goes through `style`, not the presentation
                              attribute — var() is only substituted in real declarations */}
                          <linearGradient id={`sc-arc-${i}`} x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" style={{ stopColor: s.hue }} />
                            <stop offset="1" style={{ stopColor: next.hue }} />
                          </linearGradient>
                        </defs>
                        <path className="sc-arc-base" d={ARC} />
                        <path className="sc-arc-fill" d={ARC} stroke={`url(#sc-arc-${i})`} />
                      </svg>
                    )}

                    <span className="sc-node" aria-hidden="true">
                      <svg viewBox="0 0 24 24">{ICONS[s.name]}</svg>
                    </span>

                    <div className="sc-marker">
                      <div className="sc-mhead">
                        <span className="sc-letter" aria-hidden="true">{s.L}</span>
                        <p className="sc-count">
                          <b>Step {String(i + 1).padStart(2, "0")}</b> / 07
                        </p>
                      </div>
                      <p className="sc-quote">{s.quote}</p>
                    </div>

                    <article className="sc-card">
                      <h3 className="sc-title">
                        {s.name}
                        {s.ignite && <span className="sc-badge">Ignition</span>}
                      </h3>
                      <p className="sc-intro">{s.intro}</p>
                      <ul className="sc-list">
                        {s.list.map((l) => (
                          <li key={l}><span className="sc-check" aria-hidden="true">{check}</span><span>{l}</span></li>
                        ))}
                      </ul>
                    </article>
                  </li>
                );
              })}
            </ol>
          </SignalRoadmap>
        </div>
      </section>

      {/* M03 · The formula — editorial payoff band (formula left, mega proof-stat right) */}
      <section className="section feature">
        <div className="wrap">
          <div className="sf-band reveal">
            <div className="sf-mast">
              <span className="sf-kicker sf-kicker--cyan">The&nbsp;Formula</span>
              <span className="sf-rule" aria-hidden="true" />
              <span className="sf-kicker sf-kicker--gold">The&nbsp;Payoff</span>
            </div>

            <div className="sf-grid">
              {/* LEFT — the formula as display type */}
              <div className="sf-eq">
                <p className="sf-inputs" aria-label="Role plus Context plus Signal plus Enrichment equals Pipeline">
                  {SF_INPUTS.map((t, i) => (
                    <span className="sf-term" key={t.label} aria-hidden="true"
                      style={{ "--sf-c": t.hue, "--sf-i": i } as CSSProperties}>
                      <span className="sf-term-line">
                        <span className="sf-term-ic"><svg viewBox="0 0 24 24">{t.icon}</svg></span>
                        <span className="sf-term-word">{t.label}</span>
                        {i < SF_INPUTS.length - 1 && <span className="sf-plus">+</span>}
                      </span>
                      <span className="sf-term-cap">{t.cap}</span>
                    </span>
                  ))}
                </p>
                <p className="sf-outcome" aria-hidden="true">
                  <span className="sf-eqmark">=</span>
                  <span className="sf-pipeline">
                    <span className="sf-pipeline-ic"><svg viewBox="0 0 24 24">{SF_FUNNEL}</svg></span>
                    Pipeline
                  </span>
                </p>
              </div>

              <div className="sf-divider" aria-hidden="true" />

              {/* RIGHT — the proof, promoted to a mega stat */}
              <div className="sf-stat">
                <p className="sf-sr">Forty-plus buyer signals tracked.</p>
                <div className="sf-num" aria-hidden="true">40<span className="sf-num-plus">+</span></div>
                <div className="sf-num-label" aria-hidden="true">Buyer signals tracked</div>
                <p className="sf-proof">
                  Every one of them turned into outreach a human would actually answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M04 · Next layer */}
      <section className="section next-layer">
        <div className="wrap">
          <Link href="/frameworks/gtm-engines" className="card-link reveal">
            <div className="card df-next">
              <div>
                <span className="df-next-kicker">Layer 03</span>
                <p className="df-next-title">S.I.G.N.A.L.S is what to run. The 3 GTM Engines is who runs it.</p>
              </div>
              <span className="btn-link">Read the 3 GTM Engines <span className="arw">→</span></span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
