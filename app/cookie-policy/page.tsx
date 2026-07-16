import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | Ritesh Osta" },
  description: "How riteshosta.com uses cookies. Working draft, pending legal review.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false },
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://riteshosta.com/cookie-policy" },
  ],
};

const SECTIONS = [
  { h: "What cookies I use", body: [
    "Essential cookies keep the site working. If analytics are enabled, Google Analytics sets cookies to measure aggregate usage. HubSpot may set cookies when you interact with a form so submissions are attributed correctly.",
  ] },
  { h: "Consent", body: [
    "Where consent is required, a banner will let you accept or decline non-essential cookies before they are set. [PLACEHOLDER: wire this to the consent banner and analytics consent mode before launch.]",
  ] },
  { h: "Turning them off", body: [
    "You can clear or block cookies in your browser settings at any time. Blocking non-essential cookies will not break the site; it only stops the aggregate measurement.",
  ] },
  { h: "Note for review", body: [
    "Required if any analytics or advertising pixel ships. Pair this with a consent banner and Google consent mode, and confirm the exact cookie list once analytics is configured.",
  ] },
];

export default function CookiePolicy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <LegalPage title="Cookie Policy" updated="Draft · 2026" sections={SECTIONS} />
    </>
  );
}
