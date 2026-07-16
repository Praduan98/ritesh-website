import Link from "next/link";
import type { Metadata } from "next";
import CtaBand from "@/components/modules/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "Speaking & Workshops — B2B GTM, AI Agents, ABM" },
  description:
    "Keynotes and workshops on signal-led GTM, the dark funnel and AI agents in B2B. Ritesh Osta speaks in English, Hindi and Bengali, worldwide.",
  alternates: { canonical: "/speaking" },
};

const TALKS = [
  {
    kicker: "Keynote · 30–45 min",
    // [CONFIRM] talk title is verbatim from the architecture; the 98% figure needs a citation or softening before publish (Annex A row 12)
    title: "The 98% You Cannot See",
    body: "Why most buying intent never reaches your CRM, and what to do about it. The DARK framework as a keynote. 30–45 minutes.",
  },
  {
    kicker: "Keynote · 30–45 min",
    title: "Run Your B2B Like an E-commerce Engine",
    body: "What B2B can steal from e-commerce ops: signals, automation and a funnel that improves itself. 30–45 minutes.",
  },
  {
    kicker: "Workshop · 2–3 hrs",
    title: "AI Agents That Actually Book Meetings",
    body: "A working teardown of SDR, chat and voice agents in production — including the ones that failed. Workshop format, 2–3 hours.",
  },
];

const ORGANISER_FACTS = [
  { label: "Formats", value: "Keynote, workshop, panel, team training" },
  { label: "Languages", value: "English, Hindi, Bengali" },
  { label: "Location", value: "Based in India, available worldwide and remote" },
  { label: "Press kit", value: "Bio, headshots and logo pack" },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Speaking & Workshops", item: "https://riteshosta.com/speaking" },
  ],
};

const SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Speaking & Workshops",
  serviceType: "Keynote & workshop speaking",
  provider: { "@type": "Person", name: "Ritesh Osta" },
  areaServed: "Worldwide",
  description:
    "Keynotes and workshops on signal-led GTM, the dark funnel and AI agents in B2B. Ritesh Osta speaks in English, Hindi and Bengali, worldwide.",
  url: "https://riteshosta.com/speaking",
};

export default function Speaking() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE) }} />

      {/* M01 · Hero — centred (Annex B: stage photo not yet sourced; page ships without hero image) */}
      <section className="hero wrap">
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>Speaking &amp; <span className="accent">Workshops</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            I speak about what happens after the tools arrive — how B2B teams engineer demand instead of chasing it.
            Keynotes, workshops and team training.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary"><span className="dot" />Enquire about speaking</Link>
          </div>
        </div>
      </section>

      {/* M02 · Talks */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What I Speak About</h2>
          </div>
          <div className="grid g3">
            {TALKS.map((t) => (
              <div key={t.title} className="card reveal" style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: 12 }}>{t.title}</h3>
                <p style={{ marginTop: 6 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Organiser kit */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>For Organisers</h2>
          </div>
          <div className="card reveal" style={{ padding: 0, overflow: "hidden" }}>
            {ORGANISER_FACTS.map((f, i) => (
              <div key={f.label} style={{
                display: "flex", flexWrap: "wrap", gap: "clamp(8px,2vw,32px)", alignItems: "baseline",
                padding: "clamp(18px,2.4vw,26px) clamp(24px,3vw,40px)",
                borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: ".1em",
                  fontSize: ".72rem", fontWeight: 700, color: "var(--muted)",
                  flex: "none", minWidth: "clamp(110px,20vw,160px)",
                }}>{f.label}</span>
                <span style={{ color: "var(--ink)", fontSize: "1.06rem", fontWeight: 500 }}>{f.value}</span>
              </div>
            ))}
          </div>

          {/* Annex B: press kit ZIP does not exist yet — build backlog. Rendered disabled, playbooks pattern. */}
          <div className="reveal" style={{ marginTop: "clamp(24px,3vw,36px)" }}>
            <button className="btn btn-ghost" type="button" aria-disabled="true"
              style={{ opacity: 0.6, cursor: "default" }}>
              Download the press kit
            </button>
            <p className="mini" style={{ marginTop: 10 }}>Press kit ships at launch — or available on request.</p>
          </div>
        </div>
      </section>

      {/* M04 · Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            heading="Bring Signal-Led GTM to Your Stage"
            body="Tell me the audience and the format. I will tailor the talk to what your room actually runs."
            ctas={[
              { label: "Enquire about speaking", href: "/contact", primary: true },
              { label: "Watch talks", href: "/videos" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
