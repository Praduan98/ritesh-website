import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NLBlock from "@/components/modules/NLBlock";
import InlineSubscribe from "@/components/site/InlineSubscribe";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: { absolute: "Articles on GTM Engineering & the Dark Funnel" },
  description:
    "Signal-led GTM, dark funnel strategy, AI agents, ABM and RevOps — written for operators who have to build the system, not just present it.",
  alternates: { canonical: "/blog" },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://riteshosta.com/blog" },
  ],
};

// e.g. "2026-06-18" -> "June 18, 2026" without locale/timezone drift.
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function Blog() {
  // Newest first — a chronological reading list, like the reference layout.
  const posts = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero — 50/50 dark band: content (left), image bleeding in from the right, blended at the seam */}
      <section className="blog-hero">
        <div className="wrap blog-hero-wrap">
          <div className="blog-hero-copy">
            <h1>Articles</h1>
            <p>
              Each week I break down signal-led GTM — the dark funnel, AI agents, ABM and the
              RevOps systems that connect them. Written for operators who have to build it, not
              just present it.
            </p>
            <InlineSubscribe />
            <div className="blog-hero-proof">
              <span className="nlc-avatars">
                <Image src="/images/reviewer-1.webp" alt="" width={42} height={42} />
                <Image src="/images/reviewer-2.webp" alt="" width={42} height={42} />
                <Image src="/images/reviewer-3.webp" alt="" width={42} height={42} />
              </span>
              <span className="blog-hero-proof-text">
                <b>Join 1,200+ other operators</b>
                <span><span className="nlc-stars" aria-hidden="true">★★★★★</span> 5.0 · 55 reviews</span>
              </span>
            </div>
          </div>
        </div>
        <div className="blog-hero-photo" aria-hidden="true">
          <Image
            src="/images/blog-hero.jpg"
            alt=""
            fill
            priority
            quality={92}
            sizes="(max-width:920px) 100vw, 58vw"
          />
        </div>
      </section>

      {/* M02 · Article grid — branded cards (reference card pattern) */}
      <section className="section">
        <div className="wrap">
          <div className="grid g2 blog-grid">
            {posts.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card-link">
                <article className="card blog-card">
                  <div className="blog-card-meta">
                    <span className="blog-chip">{a.category}</span>
                    <span className="blog-card-date">{fmtDate(a.date)}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p className="blog-card-excerpt">{a.excerpt}</p>
                  <div className="blog-card-foot">
                    <span className="blog-card-more">Continue Reading <span className="arw">→</span></span>
                    <span className="blog-card-time">{a.readMins} min read</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Closing newsletter — subscribe card (matches the reference bottom section) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <NLBlock variant="card" />
        </div>
      </section>
    </>
  );
}
