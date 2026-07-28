import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SignalOrbit from "@/components/diagrams/SignalOrbit";
import NLBlock from "@/components/modules/NLBlock";

export const metadata: Metadata = {
  title: { absolute: "GTM Frameworks — DARK, SIGNALS & the 3 Engines" },
  description:
    "Three layers, one operating model. The DARK Funnel, the S.I.G.N.A.L.S playbook and the 3 GTM Engines — the system behind signal-led B2B growth.",
  alternates: { canonical: "/frameworks" },
};

// One row per layer: role + audience + cadence + link to the deep-dive page.
// (Merges the old plain table and the redundant "layer by layer" cards.)
const LAYERS = [
  { n: "01", name: "DARK Framework", role: "Vision — the “why”", who: "Executives, all-hands, keynote", when: "First 5–10 minutes", href: "/frameworks/dark-funnel", hue: "var(--cyan)" },
  { n: "02", name: "S.I.G.N.A.L.S", role: "Execution playbook — the “how”", who: "RevOps, marketing ops, SDR/BDR managers", when: "Workshop & playbook handoff", href: "/frameworks/signals-playbook", hue: "var(--cyan-dark)" },
  { n: "03", name: "The 3 GTM Engines", role: "Tech & ownership — the “who runs it”", who: "Ops leads, tooling owners, IT", when: "Implementation deep-dives", href: "/frameworks/gtm-engines", hue: "var(--iris)" },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Frameworks", item: "https://riteshosta.com/frameworks" },
  ],
};

export default function Frameworks() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, image right, blended through the centre */}
      <section className="split-hero">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-frameworks.webp" alt="" fill priority quality={92}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>Modern Revenue <span className="accent">Is a System</span></h1>
            <p className="lead">
              GTM doesn’t fail because teams lack tools. It fails because teams operate without a
              system. Mine has three layers — explore them below.
            </p>
            <div className="hero-cta">
              <Link href="/playbooks" className="btn btn-primary"><span className="dot" />Download the playbook</Link>
              <Link href="/work-with-me" className="btn btn-ghost">Work With Me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* M01b · Interactive system map */}
      <section className="section orbit-band">
        <div className="wrap"><SignalOrbit /></div>
      </section>

      {/* M02 · One system, three altitudes — the ladder (audience + cadence + deep-dive link) */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", alignItems: "center", marginInline: "auto" }}>
            <h2>One System, Three Altitudes</h2>
            <p>One idea for the boardroom, one for the operators, one for the people who own the tools. Same system, three altitudes.</p>
          </div>
          <ol className="fw-ladder">
            {LAYERS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="fw-alt reveal" style={{ "--fw-hue": l.hue } as React.CSSProperties}>
                  <span className="fw-alt-node">{l.n}</span>
                  <div className="fw-alt-head">
                    <div className="fw-alt-title">
                      <h3 className="fw-alt-name">{l.name}</h3>
                      <span className="fw-alt-role">{l.role}</span>
                    </div>
                    <span className="fw-alt-go" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 12h13M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                  <div className="fw-alt-facts">
                    <div><span className="fw-fact-label">Who it&rsquo;s for</span><span className="fw-fact-val">{l.who}</span></div>
                    <div><span className="fw-fact-label">When it lands</span><span className="fw-fact-val">{l.when}</span></div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* M04 · Signature method — quote (oversized quote-mark overlay) left, portrait right */}
      <section className="section feature fwm-band">
        <div className="wrap fw-method">
          <div className="fwm-grid">
            <div className="fwm-copy reveal">
              <svg className="fwm-mark" viewBox="0 0 132 96" aria-hidden="true">
                <g transform="translate(132,96) rotate(180)">
                  <linearGradient id="fwm-q" gradientUnits="userSpaceOnUse" x1="24" y1="96" x2="52" y2="0">
                    <stop offset="0" stopColor="#0DCFCF" stopOpacity=".34" />
                    <stop offset=".58" stopColor="#0DCFCF" stopOpacity=".13" />
                    <stop offset="1" stopColor="#0DCFCF" stopOpacity="0" />
                  </linearGradient>
                  <path fill="url(#fwm-q)" d="M58 30C58 13.4 45 0 28.8 0 12.9 0 0 13.4 0 30c0 15.6 11.4 28.4 26 29.8-2.6 12.6-11 22.6-23.6 27.4L7.6 96C36.8 85.6 58 60.6 58 30Z" />
                  <path fill="url(#fwm-q)" d="M132 30c0-16.6-13-30-29.2-30C86.9 0 74 13.4 74 30c0 15.6 11.4 28.4 26 29.8-2.6 12.6-11 22.6-23.6 27.4L81.6 96C110.8 85.6 132 60.6 132 30Z" />
                </g>
              </svg>
              <p className="fw-quote">
                We don’t generate more leads. We detect demand earlier, act smarter, and compound results.
              </p>
              <p className="fw-method-tag">This is Signal-Led GTM Engineering.</p>
              <p className="fwm-attr">
                <b>Ritesh Osta</b>
                <span>GTM Engineer · Founder, InsightsTap</span>
              </p>
            </div>
            <div className="fwm-photo reveal">
              <Image className="fwm-cut" src="/images/ritesh-cutout.webp"
                alt="Ritesh Osta, GTM engineer and founder of InsightsTap"
                width={880} height={1279} quality={92} sizes="(max-width:899px) 66vw, 430px" />
            </div>
          </div>
        </div>
      </section>

      {/* M05 · Newsletter — homepage feature treatment */}
      <section className="section">
        <div className="wrap"><NLBlock variant="feature" /></div>
      </section>
    </>
  );
}
