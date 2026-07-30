import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CtaBand from "@/components/modules/CtaBand";
import { testimonials, type Testimonial } from "@/data/testimonials";

export const metadata: Metadata = {
  title: { absolute: "Client Testimonials — Ritesh Osta, Top Rated Fiverr Pro" },
  description:
    "A decade of client reviews from Fiverr and Upwork. Read what B2B founders and growth leads say about working with Ritesh Osta.",
  alternates: { canonical: "/testimonials" },
};

// A decorative double-quote mark. Solid (inherits currentColor) for the cards…
const QUOTE = (
  <svg viewBox="0 0 42 32" fill="currentColor" aria-hidden="true">
    <path d="M0 32V19.4C0 8.7 6.6 1.6 17.4 0l1.4 5.2C12.1 6.6 8.5 10.2 8.4 15H16v17H0Zm23 0V19.4C23 8.7 29.6 1.6 40.4 0l1.4 5.2C35.1 6.6 31.5 10.2 31.4 15H39v17H23Z" />
  </svg>
);
// …and a cyan→iris gradient for the featured pull-quote.
const QUOTE_GRAD = (
  <svg viewBox="0 0 42 32" aria-hidden="true">
    <defs>
      <linearGradient id="ts-qg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0DCFCF" />
        <stop offset="1" stopColor="#6C5CE7" />
      </linearGradient>
    </defs>
    <path fill="url(#ts-qg)" d="M0 32V19.4C0 8.7 6.6 1.6 17.4 0l1.4 5.2C12.1 6.6 8.5 10.2 8.4 15H16v17H0Zm23 0V19.4C23 8.7 29.6 1.6 40.4 0l1.4 5.2C35.1 6.6 31.5 10.2 31.4 15H39v17H23Z" />
  </svg>
);

const HUES = ["var(--cyan)", "var(--iris)", "var(--gold-shade)", "var(--cyan-dark)"];
const INK: Record<string, string> = {
  "var(--cyan)": "var(--teal)",
  "var(--cyan-dark)": "var(--teal)",
  "var(--gold-shade)": "var(--gold-text)",
  "var(--iris)": "var(--iris-deep)",
};

// Headshot when we have one, otherwise a monogram in the card's hue.
function Avatar({ t }: { t: Testimonial }) {
  return t.image
    ? <Image className="ts-av" src={t.image} alt={t.name} width={56} height={56} />
    : <span className="ts-mono" aria-hidden="true">{t.name.charAt(0)}</span>;
}

// Review-source wordmark — the brand name in its own colour (nominative attribution).
const SRC_META: Record<Testimonial["source"], { label: string; cls: string }> = {
  Fiverr: { label: "fiverr", cls: "src-fiverr" },
  Upwork: { label: "upwork", cls: "src-upwork" },
  Verified: { label: "verified", cls: "src-verified" },
};

function SourceBadge({ source }: { source: Testimonial["source"] }) {
  const m = SRC_META[source];
  return <span className={`src-badge ${m.cls}`}>{m.label}</span>;
}

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://riteshosta.com/testimonials" },
  ],
};

// Only show real reviews — two entries are still bracketed placeholders in the data.
const reviews = testimonials.filter((t) => !t.quote.includes("PLACEHOLDER"));
const featured = reviews.find((t) => t.metrics && t.metrics.length > 0) ?? reviews[0];
const rest = reviews.filter((t) => t !== featured);

export default function Testimonials() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, a client win right, blended through the centre */}
      <section className="split-hero">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-testimonials.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "center 34%" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>What Clients <span className="accent">Say</span></h1>
            <p className="lead">A decade of reviews, straight from Fiverr and Upwork — unedited.</p>
            {/* [CONFIRM] review counts are perishable — verify on launch day (Annex A row 4) */}
            <div className="ts-hero-trust">
              <span className="ts-stars" aria-hidden="true">★★★★★</span>
              <span className="ts-trust-text"><b>5.0</b> average · <b>55</b> reviews · <b>43</b> five-star</span>
              <span className="badge b-star">Top Rated Fiverr Pro</span>
            </div>
            <div className="hero-cta">
              <Link href="/work-with-me" className="btn btn-primary">Work With Me <span className="arw">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Featured testimonial — big pulled quote with the numbers */}
      {featured && (
        <section className="section" style={{ paddingBottom: "clamp(40px,5vw,64px)" }}>
          <div className="wrap">
            <figure className="ts-feat reveal" style={{ "--ts-hue": "var(--cyan)", "--ts-ink": "var(--teal)" } as CSSProperties}>
              <span className="ts-feat-mark">{QUOTE_GRAD}</span>
              <blockquote className="ts-feat-quote">{featured.quote}</blockquote>
              {featured.metrics && (
                <div className="ts-feat-metrics">
                  {featured.metrics.map((m) => {
                    const sp = m.indexOf(" ");
                    const fig = sp === -1 ? m : m.slice(0, sp);
                    const lab = sp === -1 ? "" : m.slice(sp + 1);
                    return (
                      <div key={m} className="ts-metric">
                        <span className="ts-metric-fig">{fig}</span>
                        {lab && <span className="ts-metric-lab">{lab}</span>}
                      </div>
                    );
                  })}
                </div>
              )}
              <figcaption className="ts-feat-by">
                <Avatar t={featured} />
                <span className="ts-feat-name"><b>{featured.name}</b><span>{featured.role}</span></span>
                <SourceBadge source={featured.source} />
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* M03 · The wall — quote cards with a quote mark + avatar per review */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Straight From the Source</h2>
            <p>Real reviews from a decade on Fiverr and Upwork — carried across word for word.</p>
          </div>
          <div className="ts-wall">
            {rest.map((t, i) => {
              const hue = HUES[i % HUES.length];
              return (
                <figure key={t.name + t.role} className="ts-card reveal"
                  style={{ "--ts-hue": hue, "--ts-ink": INK[hue] } as CSSProperties}>
                  <span className="ts-card-mark">{QUOTE}</span>
                  <SourceBadge source={t.source} />
                  <blockquote className="ts-card-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="ts-card-by">
                    <Avatar t={t} />
                    <span className="ts-card-name"><b>{t.name}</b><span>{t.role}</span></span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <div style={{ marginTop: "clamp(28px,3.5vw,44px)" }}>
            <Link href="/work" className="btn-link">See the systems behind the reviews <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M04 · Closing CTA */}
      <section className="section">
        <div className="wrap">
          <CtaBand
            heading="Want Results Like These?"
            ctas={[
              { label: "Work With Me", href: "/work-with-me", primary: true },
              { label: "See the work", href: "/work" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
