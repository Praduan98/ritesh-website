import type { MetadataRoute } from "next";

// §3.9 — robots.txt references the sitemap; legal pages carry their own noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://riteshosta.com/sitemap.xml",
    host: "https://riteshosta.com",
  };
}
