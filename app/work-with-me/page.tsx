import Link from "next/link";
import type { Metadata } from "next";
import QualifyForm from "@/components/site/QualifyForm";

export const metadata: Metadata = {
  title: { absolute: "Work With Me — GTM Consulting, Build & Coaching" },
  description:
    "Three ways in: a 4-week 1:1 GTM Blueprint Sprint, a done-for-you GTM Engine Build, or team coaching. Tell me where your pipeline is stuck.",
  alternates: { canonical: "/work-with-me" },
};

const WAYS = [
  {
    name: "GTM Blueprint Sprint™",
    desc: "1:1 with me, four weeks. You leave with the audit, the signal map, the architecture and the roadmap.",
    href: "/programs/gtm-blueprint-sprint",
    cta: "See the Sprint",
  },
  {
    name: "GTM Engine Build",
    desc: "Done for you. My team at InsightsTap builds the engine and hands your team the keys. Live in 4–6 weeks.",
    href: "/programs/gtm-engine-build",
    cta: "See the Build",
  },
  {
    name: "Team Coaching",
    desc: "Four weeks training your RevOps, marketing ops and SDR leads to run the playbook on your own pipeline.",
    href: "/programs/gtm-team-coaching",
    cta: "See Coaching",
  },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Work With Me", item: "https://riteshosta.com/work-with-me" },
  ],
};

export default function WorkWithMe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 860, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>Let&rsquo;s Work <span className="accent">Together</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "54ch" }}>
            Three ways in, depending on whether you need the plan, the team, or someone to train yours.
          </p>
        </div>
      </section>

      {/* M02 · The three ways */}
      <section className="section tint">
        <div className="wrap">
          <div className="grid g3">
            {WAYS.map((w) => (
              <Link key={w.href} href={w.href} className="card-link reveal">
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <h3>{w.name}</h3>
                  <p>{w.desc}</p>
                  <div style={{ marginTop: "auto", paddingTop: 24 }}>
                    <span className="btn-link">{w.cta} <span className="arw">→</span></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* M03 · Qualifying form */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Tell Me Where the Pipeline Is Stuck</h2>
          </div>
          <QualifyForm />
        </div>
      </section>

      {/* M04 · Not ready? */}
      <section className="section tint" style={{ paddingBlock: "clamp(56px,7vw,96px)" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 760 }}>
          <p className="reveal" style={{ color: "var(--ink-2)", fontSize: "clamp(1.1rem,1rem + .6vw,1.35rem)", lineHeight: 1.6 }}>
            Not ready to talk? Take the playbooks, or the newsletter. Both are free and neither will chase you.
          </p>
          <div className="reveal" style={{ display: "flex", gap: "var(--s4)", flexWrap: "wrap", justifyContent: "center", marginTop: "var(--s6)" }}>
            <Link href="/playbooks" className="btn btn-ghost">Free playbooks</Link>
            <Link href="/newsletter" className="btn btn-ghost">Newsletter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
