"use client";
import { useState } from "react";
import Link from "next/link";
import type { Article, ArticleCategory } from "@/data/articles";

type Filter = "All" | ArticleCategory;

// Client-side category filter for the /blog index. Server passes the full
// article list + category vocabulary; state only toggles which cards render.
function fmtDate(iso: string): string {
  const d = new Date(iso);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export default function BlogIndex({
  articles, categories,
}: { articles: Article[]; categories: ArticleCategory[] }) {
  const [active, setActive] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...categories];
  const shown = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="wrap">
      <div className="pillrow" style={{ marginBottom: "clamp(32px,4vw,48px)" }} role="group" aria-label="Filter articles by category">
        {filters.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f)}
              className="pill"
              style={
                on
                  ? { cursor: "pointer", background: "var(--grad-teal)", color: "#FFFFFF", borderColor: "transparent", fontWeight: 600 }
                  : { cursor: "pointer" }
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="mini">No articles in this category yet — check back soon.</p>
      ) : (
        <div className="grid g3">
          {shown.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="card-link">
              <article className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <h3 style={{ marginTop: 14 }}>{a.title}</h3>
                <p style={{ marginTop: 8 }}>{a.excerpt}</p>
                <p className="mini" style={{ marginTop: "auto", paddingTop: 18, fontFamily: "var(--font-mono)", letterSpacing: ".04em" }}>
                  {fmtDate(a.date)}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
