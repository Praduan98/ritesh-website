import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import QuoteSlider from "@/components/modules/QuoteSlider";
import { cases } from "@/data/cases";

const REVIEWERS = ["/images/reviewer-1.webp", "/images/reviewer-2.webp", "/images/reviewer-3.webp"];

// Per-case card-head photo (Unsplash, free licence), keyed by case slug.
const CASE_IMG: Record<string, string> = {
  "it-services-cac": "/images/case-it-services-cac.webp",
  "b2b-saas-ai-sdr": "/images/case-b2b-saas-ai-sdr.webp",
  "msp-hiring-spikes": "/images/case-msp-hiring-spikes.webp",
  jobfeeder: "/images/case-jobfeeder.webp",
  "ava-ai-voice-agent": "/images/case-ava-ai-voice-agent.webp",
  onegpt: "/images/case-onegpt.webp",
  aetherpilot: "/images/case-aetherpilot.webp",
  connectchat: "/images/case-connectchat.webp",
};

export const metadata: Metadata = {
  title: { absolute: "Work — GTM Systems & AI Agents | Ritesh Osta" },
  description:
    "Case studies from a decade of B2B GTM engineering: 40% lower CAC, 3× pipeline velocity, AI voice agents and real-time hiring-signal detection.",
  alternates: { canonical: "/work" },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Work", item: "https://riteshosta.com/work" },
  ],
};

export default function Work() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, image right, blended through the centre */}
      <section className="split-hero">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-work.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>Systems I&rsquo;ve <span className="accent">Shipped</span></h1>
            <p className="lead">
              Ten years of turning buyer signals into pipeline — for SaaS founders, IT services firms and
              enterprise GTM teams now leading their markets.
            </p>
            <div className="hero-cta">
              <Link href="/work-with-me" className="btn btn-primary">Work With Me <span className="arw">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Agency & Product — the two ventures */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>The Agency &amp; The Product</h2>
            <p>Two ventures, one operating system — a GTM engineering studio for B2B teams, and a connected AI product suite.</p>
          </div>
          <div className="grid g2 venture-grid">
            <a href="https://insightstap.com/" target="_blank" rel="noopener noreferrer" className="venture-card reveal">
              <span className="vt-eyebrow">Agency</span>
              <span className="vt-logo">
                <Image className="vt-mark" src="/brand/insightstap.webp" alt="" width={52} height={52} />
                <span className="vt-name">InsightsTap</span>
              </span>
              <p className="vt-desc">
                My GTM engineering studio — AI-powered ABM, performance marketing and HubSpot automation
                that turn buyer signals into pipeline for B2B teams.
              </p>
              <span className="vt-cta">Visit InsightsTap <span className="arw">↗</span></span>
            </a>
            <a href="https://allaisuite.com/" target="_blank" rel="noopener noreferrer" className="venture-card reveal">
              <span className="vt-eyebrow">Product</span>
              <span className="vt-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="vt-mark" src="/brand/allai-icon.svg" alt="" width={52} height={52} />
                <span className="vt-name">AllAI Suite</span>
              </span>
              <p className="vt-desc">
                One connected AI suite for every team — purpose-built AI agents across sales, support,
                finance, HR and ops, in a single platform.
              </p>
              <span className="vt-cta">Visit AllAI Suite <span className="arw">↗</span></span>
            </a>
          </div>
        </div>
      </section>

      {/* M03 · Case studies — two-up cards, bespoke per-case art in each head */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>Eight Systems, Real Numbers</h2>
          </div>
          <div className="grid g2 work-grid">
            {cases.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="course-card work-card reveal">
                <div className="wc-head">
                  <Image className="wc-img" src={CASE_IMG[c.slug]} alt="" fill sizes="(max-width:719px) 92vw, 46vw" />
                  <span className="wc-scrim" />
                </div>
                <div className="wc-body">
                  <h3 className="wc-title">{c.title}</h3>
                  <span className="wc-excerpt">{c.body}</span>
                  {c.metric && <span className="wc-metric">{c.metric}</span>}
                  <span className="cc-cta">Read the full case study <span className="arw">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Testimonials */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>What My Clients Say</h2>
          </div>
          <div className="reveal"><QuoteSlider /></div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/testimonials" className="btn-link">Read all testimonials <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M04 · Closing CTA — heading + hand-drawn arrow + button + social proof (reference: my-work CTA) */}
      <section className="section feature work-cta-band">
        <div className="wrap work-cta">
          <h2 className="work-cta-h">Work With Me to Build Your Next GTM Win</h2>
          <div className="work-cta-action reveal">
            <svg className="work-cta-arrow" viewBox="24 20 148 172" fill="none" aria-hidden="true">
              <path d="M112 34 C 66 42 42 92 62 130 C 80 160 116 170 150 174" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M130 156 L154 176 L128 182" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/work-with-me" className="work-cta-btn">Discuss Your Project</Link>
          </div>
          <div className="work-cta-proof">
            <span className="work-cta-join">Join the B2B teams behind 250+ shipped GTM projects.</span>
            <span className="nlc-avatars">
              {REVIEWERS.map((src) => (
                <Image key={src} src={src} alt="" width={40} height={40} />
              ))}
            </span>
            <span className="nl-cta-rating"><span className="nlc-stars" aria-hidden="true">★★★★★</span> <b>5.0 · 55 reviews</b></span>
          </div>
        </div>
      </section>
    </>
  );
}
