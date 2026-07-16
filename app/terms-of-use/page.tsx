import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use | Ritesh Osta" },
  description: "The terms that govern use of riteshosta.com. Working draft, pending legal review.",
  alternates: { canonical: "/terms-of-use" },
  robots: { index: false },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Terms of Use", item: "https://riteshosta.com/terms-of-use" },
  ],
};

const SECTIONS = [
  { h: "Using this site", body: [
    "This site is provided for information about my work, frameworks, programs and content. You may read, share and link to it freely.",
  ] },
  { h: "Intellectual property", body: [
    "The DARK Funnel, S.I.G.N.A.L.S, the 3 GTM Engines and the GTM Blueprint Sprint™ are my frameworks and marks. You are welcome to reference and discuss them with attribution; you may not present them as your own or resell the playbooks as a product.",
  ] },
  { h: "No warranty", body: [
    "The content here is shared in good faith and reflects how I work, but it is not a guarantee of any particular result. Go-to-market outcomes depend on your market, your team and your execution.",
  ] },
  { h: "Programs and courses", body: [
    "Engagements are governed by the specific agreement we sign. Courses are sold and delivered through Graphy under its terms and the refund policy below.",
  ] },
  { h: "Note for review", body: [
    "Carry the existing terms across from the live site, confirm the governing-law and liability clauses with counsel, and align the trademark list with whatever is finally registered.",
  ] },
];

export default function TermsOfUse() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <LegalPage title="Terms of Use" updated="Draft · 2026" sections={SECTIONS} />
    </>
  );
}
