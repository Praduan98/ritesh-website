import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Courses — B2B GTM & Marketing Automation Training" },
  description:
    "Self-paced training on the systems I build for clients: the frameworks, the stack and the automations, taught end to end by Ritesh Osta.",
  alternates: { canonical: "/courses" },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Courses", item: "https://riteshosta.com/courses" },
  ],
};

// [PLACEHOLDER] mirror the live catalogue from riteshosta.com/s/store; checkout stays on Graphy
// (RO-PG014, §1.6 decision). Titles are placeholders until the store is wired.
const STORE = "https://riteshosta.com/s/store";

const COURSES = [
  {
    hue: "c1", img: "/images/course-1.webp",
    title: "The DARK Funnel, End to End",
    body: "Map where B2B demand actually lives, then build the detection and scoring logic to capture it before your competitors do.",
  },
  {
    hue: "c2", img: "/images/course-2.webp",
    title: "Building Your Signal Stack",
    body: "Assemble the tools, data pipes and automations that turn raw buyer signals into a working, owned go-to-market system.",
  },
  {
    hue: "c3", img: "/images/course-3.webp",
    title: "AI Agents for B2B GTM",
    body: "Design and ship AI agents that qualify, personalise and activate demand — the same patterns I build into client engines.",
  },
];

export default function Courses() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, image right, blended through the centre */}
      <section className="split-hero">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-courses.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "38% center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>My <span className="accent">Courses</span></h1>
            <p className="lead">
              Real-world lessons from 20+ years of B2B go-to-market, product and startup work — the same
              frameworks and systems I build for clients, taught end to end.
            </p>
            <div className="hero-cta">
              <a href="#catalogue" className="btn btn-primary">Browse the courses <span className="arw">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Course catalogue — reference-style large cards, two-up */}
      <section className="section" id="catalogue">
        <div className="wrap">
          <div className="grid g2 courses-grid">
            {COURSES.map((c) => (
              <a key={c.title} href={STORE} target="_blank" rel="noopener"
                className={`course-card reveal course-${c.hue}`}>
                <span className="cc-banner">
                  <Image className="cc-img" src={c.img} alt="" fill sizes="(max-width:719px) 92vw, 46vw" />
                  <span className="cc-scrim" />
                  <span className="cc-banner-title">{c.title}</span>
                </span>
                <span className="cc-body">
                  <span className="cc-excerpt">{c.body}</span>
                  <span className="cc-cta">Enrol on Graphy <span className="arw">→</span></span>
                </span>
              </a>
            ))}
            {/* balances the 2-up grid and carries the new-course signup (the reference page has no newsletter block) */}
            <Link href="/newsletter" className="course-card course-notify reveal">
              {/* playful decorative cluster — floating course chips + gold twinkle */}
              <span className="cn-chip cn-chip-2" aria-hidden="true" />
              <span className="cn-chip cn-chip-1" aria-hidden="true" />
              <span className="cn-star" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z" /></svg>
              </span>
              <span className="cn-inner">
                <span className="cn-title">New courses drop regularly</span>
                <span className="cn-body">Get an email the moment the next one goes live — no spam, unsubscribe anytime.</span>
                <span className="cn-cta">Get notified <span className="arw">→</span></span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
