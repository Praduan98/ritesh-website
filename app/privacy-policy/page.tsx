import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Ritesh Osta" },
  description: "How riteshosta.com collects, uses and protects your data. Working draft, pending legal review.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://riteshosta.com/privacy-policy" },
  ],
};

const SECTIONS = [
  { h: "What I collect", body: [
    "When you submit a form on this site — the newsletter, a playbook, the qualifying form on Work With Me, or a booking request — I collect what you enter: typically your name, work email, company, and the details of what you are trying to fix. Forms are handled by HubSpot.",
    "If analytics are enabled, standard usage data (pages viewed, approximate location, device and referrer) is collected via Google Analytics 4 to understand what is useful. This is aggregate and not used to identify you personally.",
  ] },
  { h: "How it is used", body: [
    "To reply to you, to scope work, and — only if you opt in — to send the newsletter. I do not sell your data, and I do not share it beyond the processors named below.",
    "Newsletter subscribers can unsubscribe from any issue; the link is in every email.",
  ] },
  { h: "Processors I use", body: [
    "HubSpot (forms, email, CRM), Google Analytics (site usage), and Graphy (course checkout and fulfilment, if you enrol in a course). Each holds only the data needed to perform its function.",
  ] },
  { h: "Your rights", body: [
    "You can ask what data I hold, correct it, or have it deleted. Email ritesh@insightstap.com and I will action it.",
  ] },
  { h: "Note for review", body: [
    "This draft must be reconciled with the exact fields captured by the new HubSpot forms and any analytics or advertising pixels added before launch, and reviewed by counsel for the relevant jurisdictions.",
  ] },
];

export default function PrivacyPolicy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <LegalPage title="Privacy Policy" updated="Draft · 2026" sections={SECTIONS} />
    </>
  );
}
