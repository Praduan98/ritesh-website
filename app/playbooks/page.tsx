import Link from "next/link";
import type { Metadata } from "next";
import PlaybookCard from "@/components/site/PlaybookCard";

export const metadata: Metadata = {
  title: { absolute: "Free GTM Playbooks — DARK, SIGNALS & Signal Checklist" },
  description:
    "The DARK Loop playbook, the S.I.G.N.A.L.S execution playbook, the 40+ buyer signals checklist and the GTM stack audit. Free to download.",
  alternates: { canonical: "/playbooks" },
};

const PLAYBOOKS = [
  { kicker: "Layer 1 · gated", title: "The DARK Loop Playbook",
    body: "Detect, Augment, Reach, Kaizen. The full framework, with the signal taxonomy and the mindset shifts.", gated: true },
  { kicker: "Layer 2 · gated", title: "The S.I.G.N.A.L.S Execution Playbook",
    body: "Seven steps, the tools for each, and the triggers that connect them.", gated: true },
  { kicker: "Free · no email", title: "The 40+ Buyer Signals Checklist",
    body: "Every signal worth tracking, what it predicts, and where to capture it.", gated: false },
  { kicker: "Worksheet · gated", title: "The GTM Stack Audit",
    body: "The audit I run on client stacks — redundancies, gaps and integration failures, as a worksheet.", gated: true },
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

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div style={{ maxWidth: 860, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>Free <span className="accent">Playbooks</span></h1>
          <p className="lead" style={{ marginInline: "auto", maxWidth: "48ch" }}>
            The frameworks, written down properly. Take them, run them, no strings.
          </p>
        </div>
      </section>

      {/* M02 · Playbook cards */}
      {/* TODO: PDFs to be built (HTML → WeasyPrint pipeline, Annex B); gate wiring → HubSpot newsletter form. */}
      <section className="section tint">
        <div className="wrap">
          <div className="grid g2">
            {PLAYBOOKS.map((p) => (
              <PlaybookCard key={p.title} kicker={p.kicker} title={p.title} body={p.body} gated={p.gated} />
            ))}
          </div>
          <p className="mini reveal" style={{ textAlign: "center", marginTop: "clamp(40px,5vw,64px)" }}>
            These come from the frameworks.{" "}
            <Link href="/frameworks" className="btn-link">Read the system itself <span className="arw">→</span></Link>
          </p>
        </div>
      </section>
    </>
  );
}
