import Image from "next/image";
import type { Metadata } from "next";
import SubscribeForm from "@/components/site/SubscribeForm";

export const metadata: Metadata = {
  title: { absolute: "Ritesh's Newsletter — One GTM Play Every Week" },
  description:
    "One signal-led GTM play every week: the framework, the stack and the automation behind it. Written for people who have to ship it on Monday.",
  alternates: { canonical: "/newsletter" },
};

const CARDS = [
  { t: "A play, not a think-piece", d: "Every issue is one thing you can build this week, with the trigger, the tool and the logic." },
  { t: "The stack, named", d: "Which tool, which workflow, which prompt. No vendor-neutral hand-waving." },
  { t: "Teardowns", d: "Real GTM systems pulled apart — mine and other people’s — including the parts that failed." },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Newsletter", item: "https://riteshosta.com/newsletter" },
  ],
};

export default function Newsletter() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero — centred, monogram above headline, one job: subscribe */}
      <section className="hero wrap">
        <div style={{ maxWidth: 860, marginInline: "auto", textAlign: "center" }}>
          <Image
            src="/logo/ritesh_c06v2_mono_dark_512.png"
            width={112} height={112} alt=""
            style={{ borderRadius: "50%", marginInline: "auto", display: "block", marginBottom: 24 }}
          />
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>Ritesh&rsquo;s <span className="accent">Newsletter</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            One signal-led GTM play every week. The framework, the stack, and the automation behind it — written for
            people who have to ship it on Monday.
          </p>
          {/* [CONFIRM] subscriber count intentionally omitted — do not invent a number */}
          <div className="hero-trust" style={{ justifyContent: "center" }}>
            <span>Join founders, RevOps and GTM leaders.</span>
            <span className="badge b-star">★ 5.0 from 45 reviews</span>
          </div>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* M02 · What you get */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>One Play Every Week</h2>
          </div>
          <div className="grid g3">
            {CARDS.map((c) => (
              <div key={c.t} className="card reveal">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Recent issues — populate from archive at launch; cut while <3 issues (RO-PG011 spec) */}
    </>
  );
}
