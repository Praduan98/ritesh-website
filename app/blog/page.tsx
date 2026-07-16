import type { Metadata } from "next";
import BlogIndex from "@/components/site/BlogIndex";
import { articles, categories } from "@/data/articles";

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

export default function Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}><span className="accent">Articles</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            Signal-led GTM, dark funnel strategy, AI agents and the systems that connect them. Written for operators.
          </p>
        </div>
      </section>

      {/* M02 · Filterable index */}
      <section className="section tint">
        <BlogIndex articles={articles} categories={categories} />
      </section>
    </>
  );
}
