import type { Metadata } from "next";
import NLBlock from "@/components/modules/NLBlock";
import VideoLibrary from "@/components/modules/VideoLibrary";
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
  const catCount = new Set(videos.map((v) => v.cat)).size;
  const featured = videos.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero — "signal broadcast" console */}
      <section className="vhero">
        <div className="wrap">
          <div className="vhero-grid">
            <div>
              <h1>
                Frameworks, teardowns &amp; <span className="accent">playbooks.</span>
              </h1>
              <p className="lead">
                How signal-led GTM actually works — the real systems, the real stack, recorded as I build them.
                No theory.
              </p>
              <div className="vhero-ticks" aria-label="Library stats">
                <div><b>{videos.length}</b><span>Sessions</span></div>
                <div><b>{catCount}</b><span>Topics</span></div>
                <div><b>1</b><span>Operating system</span></div>
              </div>
              <div className="hero-cta">
                <a href="#library" className="btn btn-primary"><span className="dot" />Start watching</a>
                {/* "Subscribe on YouTube" ghost button removed pending the real channel URL —
                    restore here as .btn.btn-ghost when the client provides it. */}
              </div>
            </div>

            {/* drifting real-thumbnail console + equalizer (decorative) */}
            <div className="vhero-console" aria-hidden="true">
              <div className="vhero-shot s2"><img src={ytThumb(featured[1].youtubeId)} alt="" loading="lazy" /></div>
              <div className="vhero-shot s3"><img src={ytThumb(featured[2].youtubeId)} alt="" loading="lazy" /></div>
              <div className="vhero-shot s1">
                <img src={ytThumb(featured[0].youtubeId)} alt="" />
                <span className="play">▶</span>
              </div>
              <div className="vhero-eq"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · Library */}
      <section className="section tint" id="library">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Watch the Systems Get Built</h2>
            <p>Every on-demand session from the InsightsTap webinar series — press play, right here.</p>
          </div>
          <VideoLibrary />
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
