import Link from "next/link";
import type { Metadata } from "next";
import CtaBand from "@/components/modules/CtaBand";
import QuoteSlider from "@/components/modules/QuoteSlider";
import { cases } from "@/data/cases";

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

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>Systems I&rsquo;ve <span className="accent">Shipped</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            Ten years of turning buyer signals into pipeline — for SaaS founders, IT services firms and enterprise GTM
            teams now leading their markets.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/work-with-me" className="btn btn-primary"><span className="dot" />Work With Me</Link>
            <Link href="/contact" className="btn btn-ghost">Book a call</Link>
          </div>
        </div>
      </section>

      {/* M02 · Case list */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Eight Systems, Real Numbers</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px,2.5vw,32px)" }}>
            {cases.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="card-link reveal">
                <article className="card">
                  <h3>{c.title}</h3>
                  <p style={{ maxWidth: "62ch" }}>{c.body}</p>
                  {c.metric && (
                    <p style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--accent-text)", letterSpacing: "-.01em" }}>
                      {c.metric}
                    </p>
                  )}
                  <p style={{ marginTop: 14 }}>
                    <span className="btn-link">Read the full case study <span className="arw">→</span></span>
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Testimonials */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>What My Clients Say</h2>
          </div>
          <div className="reveal"><QuoteSlider /></div>
          <div style={{ marginTop: 24 }}>
            <Link href="/testimonials" className="btn-link">Read all testimonials <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M04 · Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            heading={"Let’s Build Your GTM Engine"}
            body="Tell me where your pipeline is stuck. I will show you the signals you are missing."
            ctas={[
              { label: "Book a Strategy Call", href: "/contact", primary: true },
              { label: "Download the GTM Playbook", href: "/playbooks" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
