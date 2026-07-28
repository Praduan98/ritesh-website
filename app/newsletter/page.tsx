import Image from "next/image";
import type { Metadata } from "next";
import NLBlock from "@/components/modules/NLBlock";
import PhotoFrame from "@/components/site/PhotoFrame";
import SubscribeForm from "@/components/site/SubscribeForm";

export const metadata: Metadata = {
  title: { absolute: "Ritesh's Newsletter — One GTM Play Every Week" },
  description:
    "One signal-led GTM play every week: the framework, the stack and the automation behind it. Written for people who have to ship it on Monday.",
  alternates: { canonical: "/newsletter" },
};

const BENEFITS = [
  { t: "A play, not a think-piece", d: "one thing you can build this week, with the trigger, the tool and the logic." },
  { t: "The stack, named", d: "which tool, which workflow, which prompt — no vendor-neutral hand-waving." },
  { t: "Real teardowns", d: "GTM systems pulled apart, mine and other people’s, including the parts that failed." },
  { t: "Signal-led thinking", d: "how to detect buying intent before the form fill, and act on it automatically." },
  { t: "First access", d: "new frameworks, templates and tools before they go anywhere else." },
];

const REVIEWERS = ["/images/reviewer-1.webp", "/images/reviewer-2.webp", "/images/reviewer-3.webp"];

const check = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="var(--teal)" />
    <path d="M7 12.4l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Newsletter", item: "https://riteshosta.com/newsletter" },
  ],
};

export default function Newsletter() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, image right, blended through the centre */}
      <section className="split-hero">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-newsletter.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "58% center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>Ritesh&rsquo;s <span className="accent">Newsletter</span></h1>
            <p className="lead">
              One signal-led GTM play every week — the framework, the stack, and the automation behind it.
              Written for people who have to ship it on Monday.
            </p>
            <div className="hero-cta">
              <a href="#subscribe" className="btn btn-primary">Subscribe free <span className="arw">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Subscribe card — the reference's subscribe block (== NLBlock card variant) */}
      <section className="wrap" id="subscribe" style={{ paddingBlock: "clamp(44px,7vw,88px)" }}>
        <NLBlock variant="card" />
      </section>

      {/* M03 · Why subscribe — visual left, benefit checklist right */}
      <section className="section tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <PhotoFrame src="/images/ritesh-friendly.webp" alt="Ritesh Osta"
              tag="One play · every week" objectPosition="center 12%" />
            <div className="reveal">
              <h2 style={{ fontSize: "clamp(1.9rem,1.4rem + 2vw,3rem)", maxWidth: "14ch" }}>Why Subscribe?</h2>
              <p style={{ color: "var(--muted)", marginTop: 18, maxWidth: "52ch" }}>
                Every week I share one thing I&rsquo;d actually build — battle-tested plays, real teardowns and the exact
                stack behind them, from a decade-plus inside B2B go-to-market.
              </p>
              <p style={{ color: "var(--muted)", marginTop: 14, maxWidth: "52ch" }}>
                No recycled think-pieces. The same thinking, tools and workflows I use to build GTM engines for
                clients — so your team can ship them too.
              </p>
              <span className="wl-label">By joining, you&rsquo;ll get</span>
              <ul className="why-list">
                {BENEFITS.map((b) => (
                  <li key={b.t}><span className="why-ic">{check}</span><span><b>{b.t}</b> — {b.d}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* M04 · Dark CTA band — one more subscribe prompt + social proof */}
      <section className="section feature">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem,1.4rem + 2.6vw,3.4rem)", maxWidth: "16ch", marginInline: "auto" }}>
            Don&rsquo;t Miss a Single Play
          </h2>
          <p style={{ color: "var(--ink-2)", marginTop: 16, maxWidth: "48ch", marginInline: "auto", fontSize: "clamp(1.05rem,1rem + .4vw,1.2rem)" }}>
            Join founders, RevOps and GTM leaders who read one signal-led play every week. No pitch.
          </p>
          <div style={{ marginTop: "clamp(28px,3.5vw,40px)" }}>
            <SubscribeForm />
          </div>
          <div className="nl-cta-proof">
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
