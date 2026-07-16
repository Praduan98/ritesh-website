import type { MetadataRoute } from "next";
import { cases } from "@/data/cases";
import { articles } from "@/data/articles";
import { videos } from "@/data/videos";

const BASE = "https://riteshosta.com";
const LASTMOD = "2026-07-16"; // static; bump at release. Legal pages are noindex → excluded.

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1.0, "weekly"],
    ["/about", 0.8, "monthly"],
    ["/frameworks", 0.9, "monthly"],
    ["/frameworks/dark-funnel", 0.9, "monthly"],
    ["/frameworks/signals-playbook", 0.9, "monthly"],
    ["/frameworks/gtm-engines", 0.9, "monthly"],
    ["/work", 0.8, "monthly"],
    ["/work-with-me", 0.9, "monthly"],
    ["/programs/gtm-blueprint-sprint", 0.8, "monthly"],
    ["/programs/gtm-team-coaching", 0.8, "monthly"],
    ["/programs/gtm-engine-build", 0.8, "monthly"],
    ["/playbooks", 0.8, "monthly"],
    ["/newsletter", 0.7, "monthly"],
    ["/blog", 0.8, "weekly"],
    ["/videos", 0.7, "weekly"],
    ["/courses", 0.6, "monthly"],
    ["/speaking", 0.7, "monthly"],
    ["/testimonials", 0.6, "monthly"],
    ["/contact", 0.6, "yearly"],
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified: LASTMOD,
    changeFrequency,
    priority,
  }));

  for (const c of cases) entries.push({ url: `${BASE}/work/${c.slug}`, lastModified: LASTMOD, changeFrequency: "monthly", priority: 0.6 });
  for (const a of articles) entries.push({ url: `${BASE}/blog/${a.slug}`, lastModified: a.date, changeFrequency: "yearly", priority: 0.7 });
  for (const v of videos) entries.push({ url: `${BASE}/videos/${v.slug}`, lastModified: LASTMOD, changeFrequency: "yearly", priority: 0.6 });

  return entries;
}
