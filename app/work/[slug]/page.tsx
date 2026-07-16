import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/modules/CtaBand";
import { cases } from "@/data/cases";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  const firstSentence = c.body.split(". ")[0].replace(/\.?$/, ".");
  return {
    title: { absolute: `${c.title} — Case Study | Ritesh Osta` },
    description: firstSentence,
    alternates: { canonical: `/work/${c.slug}` },
  };
}

export default async function CasePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://riteshosta.com/work" },
      { "@type": "ListItem", position: 3, name: c.title, item: `https://riteshosta.com/work/${c.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero — centred, compact */}
      <section className="hero wrap" style={{ paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ maxWidth: 880, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>{c.title}</h1>
          {c.metric && (
            <p style={{
              marginTop: "clamp(20px,3vw,32px)", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(1.4rem,1.15rem + 1.1vw,2rem)", letterSpacing: "-.018em", lineHeight: 1.2,
              color: "var(--accent-text)",
            }}>
              {c.metric}
            </p>
          )}
          <p className="lead" style={{ marginInline: "auto", maxWidth: "60ch" }}>{c.body}</p>
        </div>
      </section>

      {/* Full case study note */}
      <section className="section tint">
        <div className="wrap">
          <div className="card reveal" style={{ maxWidth: 720, marginInline: "auto" }}>
            <p style={{ marginTop: 16 }}>
              The complete write-up — stack, signals, and the numbers behind the headline — is being prepared. Ask me
              about it directly in the meantime.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary"><span className="dot" />Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="wrap">
          <CtaBand
            heading="Want a System Like This?"
            ctas={[
              { label: "Work With Me", href: "/work-with-me", primary: true },
              { label: "See all work", href: "/work" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
