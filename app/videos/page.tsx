import type { Metadata } from "next";
import Link from "next/link";
import NLBlock from "@/components/modules/NLBlock";
import { videos, ytThumb } from "@/data/videos";

export const metadata: Metadata = {
  title: { absolute: "Videos — GTM Frameworks & Teardowns | Ritesh Osta" },
  description:
    "How signal-led GTM actually works: framework breakdowns, system teardowns and AI agent builds. No theory, just the systems that shipped.",
  alternates: { canonical: "/videos" },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Videos", item: "https://riteshosta.com/videos" },
  ],
};

export default function Videos() {
  const featured = videos.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero — white: copy (left) + cartoon collage (right) */}
      <section className="vhero-light">
        <div className="wrap">
          <div className="vhl-grid">
            <div className="vhl-copy">
              <h1>My Videos</h1>
              <p>
                When I started recording these, it was simply a way to document the GTM systems I was
                building. Over time it turned into a library of teardowns, frameworks and live builds
                that founders and RevOps leaders keep coming back to.
              </p>
              <p>
                You&rsquo;ll find deep dives into real pipelines, behind-the-scenes system builds, and
                the plays for turning buying signals into revenue — no theory, just what shipped.
              </p>
              <div className="vhl-cta">
                <a href="#library" className="btn btn-primary"><span className="dot" />Start watching</a>
              </div>
            </div>

            {/* cartoon collage — decorative (animated: deal-in entrance + idle float + pointer parallax) */}
            <div className="vhl-collage" aria-hidden="true">
              <span className="vhl-scene" />
              <span className="vhl-blob g" />
              <span className="vhl-blob p" />

              <div className="vhl-card c2">
                <img src={ytThumb(featured[1].youtubeId)} alt="" loading="lazy" />
                <span className="cap">On-demand</span>
                <span className="tt">{featured[1].title}</span>
              </div>
              <div className="vhl-card c3">
                <img src={ytThumb(featured[2].youtubeId)} alt="" loading="lazy" />
                <span className="cap">On-demand</span>
                <span className="tt">{featured[2].title}</span>
              </div>
              <div className="vhl-card c1">
                <img src={ytThumb(featured[0].youtubeId)} alt="" />
                <span className="cap">Featured</span>
                <span className="tt">{featured[0].title}</span>
              </div>

              <span className="vhl-yt" />

              {/* gold twinkle stars (sit in negative space, behind the cards) */}
              <span className="vhl-spark s1" />
              <span className="vhl-spark s2" />

              <svg className="vhl-doodle" viewBox="0 0 100 100" fill="none">
                {/* top-right cartoon arrow — solid hand-drawn hook pointing down-left at the cards */}
                <path d="M95 9 C 99 23 90 30 80 28" stroke="#0A0A0A" strokeWidth="2.7"
                  strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <path d="M86 23 L80 28.2 L85.5 34" stroke="#0A0A0A" strokeWidth="2.7"
                  strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                {/* bottom-left cartoon arrow — solid hand-drawn hook pointing up-right at the cards */}
                <path d="M5 88 C 1 73 12 66 23 70" stroke="#0A0A0A" strokeWidth="2.7"
                  strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <path d="M17 64 L23.2 70 L18 76" stroke="#0A0A0A" strokeWidth="2.7"
                  strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                {/* gold spark near the top card */}
                <g stroke="#F4B740" strokeWidth="1.8" strokeLinecap="round" vectorEffect="non-scaling-stroke">
                  <path d="M22 9 v-6" /><path d="M15 12 l-4 -4" /><path d="M29 12 l4 -4" />
                </g>
                {/* scattered cartoon energy marks */}
                <circle cx="8" cy="28" r="1.2" fill="#0DCFCF" />
                <circle cx="6" cy="35" r="0.85" fill="#F4B740" />
                <circle cx="95" cy="50" r="1.2" fill="#6C5CE7" />
                <g stroke="#F4B740" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke">
                  <path d="M92 89 v-4.5" /><path d="M87 91.5 l-3 -3" /><path d="M97 91.5 l3 -3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Library — reference-style thumbnail cards */}
      <section className="section tint" id="library">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Watch the Systems Get Built</h2>
            <p>Every on-demand session from the InsightsTap webinar series, in one place.</p>
          </div>
          <div className="grid g3 vgrid" role="list" aria-label={`${videos.length} videos`}>
            {videos.map((v) => (
              <Link key={v.slug} href={`/videos/${v.slug}`} className="vcard-link" role="listitem">
                <div className="vcard-thumb">
                  <img src={ytThumb(v.youtubeId)} alt="" loading="lazy" decoding="async" />
                </div>
                <h3 className="vcard-title">{v.title}</h3>
                <span className="vcard-meta">{v.cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Newsletter — homepage feature treatment */}
      <section className="section">
        <div className="wrap">
          <NLBlock variant="feature" />
        </div>
      </section>
    </>
  );
}
