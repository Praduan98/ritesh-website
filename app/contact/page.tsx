import type { Metadata } from "next";
import SocialLinks from "@/components/site/SocialLinks";

export const metadata: Metadata = {
  title: { absolute: "Contact Ritesh Osta — Book a GTM Strategy Call" },
  description:
    "Thirty minutes, no deck, no pitch. Tell me what is broken in your B2B pipeline and I will tell you what I would do about it. Book a time.",
  alternates: { canonical: "/contact" },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://riteshosta.com/contact" },
  ],
};

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero — copy left / scheduler right */}
      <section className="hero wrap">
        <div className="split" style={{ alignItems: "center" }}>
          <div>
            <h1>Let&rsquo;s <span className="accent">Talk</span></h1>
            <p className="lead">
              Pick a time that works. Thirty minutes, no deck, no pitch — tell me what is broken and I will
              tell you what I would do about it.
            </p>
            <p style={{ marginTop: "var(--s6)", fontSize: "1.08rem", color: "var(--ink-2)" }}>
              Prefer email?{" "}
              <a href="mailto:ritesh@insightstap.com" className="btn-link">
                ritesh@insightstap.com <span className="arw">→</span>
              </a>
            </p>
          </div>
          <div className="card reveal">
            {/* TODO: replace placeholder with the HubSpot Meetings embed (latest_aes_meeting_link) */}
            <div style={{
              marginTop: "var(--s5)", aspectRatio: "4/3", border: "1px dashed var(--hairline-2)",
              borderRadius: "var(--r-md)", display: "grid", placeItems: "center",
              color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: ".85rem", textAlign: "center", padding: "var(--s4)",
            }}>
              HubSpot Meetings embed — latest_aes_meeting_link
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Elsewhere */}
      <section className="section tint" style={{ paddingBlock: "clamp(56px,7vw,96px)" }}>
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Find Me Online</h2>
          </div>
          <div className="reveal"><SocialLinks variant="row" /></div>
        </div>
      </section>
    </>
  );
}
