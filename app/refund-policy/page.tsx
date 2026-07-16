import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Refund Policy | Ritesh Osta" },
  description: "Refund terms for courses and programs. Working draft, pending legal review.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: false },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Refund Policy", item: "https://riteshosta.com/refund-policy" },
  ],
};

const SECTIONS = [
  { h: "Courses", body: [
    "Self-paced courses are sold and delivered through Graphy. Refunds follow the window shown at checkout — [PLACEHOLDER: state the exact window, e.g. 7 days, before it ships]. To request one, email ritesh@insightstap.com with your order details.",
  ] },
  { h: "Programs and advisory", body: [
    "The GTM Blueprint Sprint, Team Coaching and Engine Build are scoped per client and governed by the agreement we sign, which sets out payment and cancellation terms. There is no blanket refund on delivered consulting work; specifics live in that agreement.",
  ] },
  { h: "How to reach me", body: [
    "Any billing question goes to ritesh@insightstap.com and I will sort it out directly.",
  ] },
  { h: "Note for review", body: [
    "This is required while courses are sold. Carry the exact figures across from the Graphy store settings and confirm the window and consumer-law obligations with counsel before launch.",
  ] },
];

export default function RefundPolicy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <LegalPage title="Refund Policy" updated="Draft · 2026" sections={SECTIONS} />
    </>
  );
}
