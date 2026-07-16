import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/modules/CtaBand";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// e.g. "2026-03-04" -> "4 Mar 2026" without locale/timezone drift.
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[m - 1]} ${y}`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: { absolute: `${article.title} | Ritesh Osta` },
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `https://riteshosta.com/blog/${article.slug}`;

  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: "Ritesh Osta", url: "https://riteshosta.com" },
    publisher: { "@type": "Person", name: "Ritesh Osta" },
    mainEntityOfPage: url,
  };

  const BREADCRUMB = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://riteshosta.com/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Article hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 760, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto", marginTop: 20 }}>{article.title}</h1>
          <p style={{ marginTop: "var(--s5)" }}>
            <Link href={article.pillarHref} className="btn-link">
              Part of: {article.pillarAnchor} <span className="arw">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* M02 · Body */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              maxWidth: "68ch",
              marginInline: "auto",
              fontSize: "1.12rem",
              lineHeight: 1.75,
              color: "var(--ink-2)",
            }}
          >
            {article.body.map((block, i) => (
              <div key={i}>
                {block.h && (
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem,1.2rem + .8vw,1.9rem)",
                      marginTop: i === 0 ? 0 : "var(--s8)",
                      marginBottom: "var(--s4)",
                    }}
                  >
                    {block.h}
                  </h2>
                )}
                <p style={{ marginTop: block.h ? 0 : (i === 0 ? 0 : "var(--s5)"), color: "var(--ink-2)" }}>
                  {block.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CtaBand
            heading="Build the System, Not Just the Slide"
            body="Read the framework this article is built on, or tell me where your pipeline is stuck."
            ctas={[
              { label: "Read the frameworks", href: "/frameworks", primary: true },
              { label: "Work With Me", href: "/work-with-me" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
