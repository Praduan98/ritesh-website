import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/modules/CtaBand";
import { VideoEmbed } from "@/components/modules/VideoCard";
import { videos, getVideo, ytThumb } from "@/data/videos";

export async function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const v = getVideo(slug);
  if (!v) return {};
  return {
    title: { absolute: `${v.title} | Ritesh Osta` },
    description: v.summary,
    alternates: { canonical: `/videos/${v.slug}` },
  };
}

export default async function VideoPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const v = getVideo(slug);
  if (!v) notFound();

  // VideoObject — real YouTube asset (InsightsTap webinar library).
  // [CONFIRM] uploadDate per session before publish (not exposed by the source page).
  const videoObject = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.summary,
    thumbnailUrl: [ytThumb(v.youtubeId)],
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    publisher: {
      "@type": "Person",
      name: "Ritesh Osta",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
      { "@type": "ListItem", position: 2, name: "Videos", item: "https://riteshosta.com/videos" },
      { "@type": "ListItem", position: 3, name: v.title, item: `https://riteshosta.com/videos/${v.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObject) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero — centred, compact */}
      <section className="hero wrap" style={{ paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto", marginTop: 16 }}>{v.title}</h1>
        </div>
      </section>

      {/* Real embed (click-to-play; thumbnail until pressed) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            className="reveal video-card"
            style={{ maxWidth: 920, marginInline: "auto" }}
          >
            <VideoEmbed id={v.youtubeId} title={v.title} />
          </div>
        </div>
      </section>

      {/* Summary + transcript */}
      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <div className="section-head" style={{ marginBottom: "var(--s5)" }}>
              </div>
              <p style={{ color: "var(--ink-2)", fontSize: "1.08rem", lineHeight: 1.65 }}>{v.summary}</p>
            </div>
            <div className="reveal">
              <div className="card">
                <p style={{ marginTop: 16 }}>
                  A full transcript of this session is being prepared and will appear here once it is
                  published. Want it sooner? Ask me directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="wrap">
          <CtaBand
            heading="Prefer It Built For You?"
            ctas={[
              { label: "Work With Me", href: "/work-with-me", primary: true },
              { label: "All videos", href: "/videos" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
