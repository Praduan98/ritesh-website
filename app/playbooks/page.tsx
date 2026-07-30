import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PlaybookKit, { type Playbook } from "@/components/site/PlaybookKit";

export const metadata: Metadata = {
  title: { absolute: "Free GTM Playbooks — DARK, SIGNALS & Signal Checklist" },
  description:
    "The DARK Loop playbook, the S.I.G.N.A.L.S execution playbook, the 40+ buyer signals checklist and the GTM stack audit. Free to download.",
  alternates: { canonical: "/playbooks" },
};

// The rack. `inside` and `spec` are drawn from the real frameworks (DARK's four
// stages, the seven S.I.G.N.A.L.S steps) — no invented page counts. The 7/5 · 5/7
// column rhythm comes from `wide`, which also flips the card to a side-by-side layout.
const PLAYBOOKS: Playbook[] = [
  {
    id: "dark-loop", layer: "Layer 01 · DARK Framework", title: "The DARK Loop Playbook",
    body: "Detect, Augment, Reach, Kaizen. The full framework, with the signal taxonomy and the mindset shifts.",
    inside: [
      "All four stages, run end to end",
      "The full buyer-signal taxonomy",
      "The mindset shifts that make it stick",
    ],
    spec: ["PDF", "4 stages", "Signal taxonomy"],
    img: "/images/playbook-dark.webp",
    gated: true, cover: "loop", hue: "cyan", wide: true,
  },
  {
    id: "signals", layer: "Layer 02 · Execution", title: "The S.I.G.N.A.L.S Execution Playbook",
    body: "Seven steps, the tools for each, and the triggers that connect them.",
    inside: [
      "Spot → Integrate → Generate → Nurture",
      "Automate, Learn and Scale",
      "The trigger that fires between each step",
    ],
    spec: ["PDF", "7 steps", "Tools + triggers"],
    img: "/images/playbook-signals.webp",
    gated: true, cover: "steps", hue: "teal", wide: false,
  },
  {
    id: "checklist", layer: "Reference · ungated", title: "The 40+ Buyer Signals Checklist",
    body: "Every signal worth tracking, what it predicts, and where to capture it.",
    inside: [
      "Every signal worth tracking",
      "What each one actually predicts",
      "Where to capture it in your stack",
    ],
    spec: ["PDF", "40+ signals", "No email"],
    img: "/images/playbook-checklist.webp",
    gated: false, cover: "checklist", hue: "gold", wide: false,
  },
  {
    id: "stack-audit", layer: "Worksheet · Engines", title: "The GTM Stack Audit",
    body: "The audit I run on client stacks — redundancies, gaps and integration failures, as a worksheet.",
    inside: [
      "Redundancies across your current stack",
      "Coverage gaps, mapped by funnel stage",
      "The integration points that quietly fail",
    ],
    spec: ["Worksheet", "Stack teardown", "Gap map"],
    img: "/images/playbook-audit.webp",
    gated: true, cover: "matrix", hue: "iris", wide: true,
  },
];

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Playbooks", item: "https://riteshosta.com/playbooks" },
  ],
};

export default function Playbooks() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Split hero — copy left, the playbooks (books) image right, blended through the centre */}
      <section className="split-hero sh-dark">
        <div className="sh-media" aria-hidden="true">
          <Image src="/images/hero-playbooks.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "55% 52%" }} />
          <div className="sh-blend" />
        </div>
        <div className="wrap sh-copy">
          <div className="sh-copy-inner">
            <h1>Free <span className="accent">Playbooks</span></h1>
            <p className="lead">
              The frameworks, written down properly. Take them, run them — no strings.
            </p>
            <div className="hero-cta">
              <Link href="/frameworks" className="btn btn-primary">Read the system <span className="arw">→</span></Link>
              <Link href="/newsletter" className="btn btn-ghost">Get updates</Link>
            </div>
          </div>
        </div>
      </section>

      {/* M02 · The Field Kit — the playbook rack */}
      {/* TODO: PDFs to be built (HTML → WeasyPrint pipeline, Annex B); gate wiring → HubSpot newsletter form. */}
      <section className="section tint">
        <div className="wrap">
          <PlaybookKit items={PLAYBOOKS} />

          <p className="mini reveal" style={{ textAlign: "center", marginTop: "clamp(40px,5vw,64px)" }}>
            These come from the frameworks.{" "}
            <Link href="/frameworks" className="btn-link">Read the system itself <span className="arw">→</span></Link>
          </p>
        </div>
      </section>
    </>
  );
}
