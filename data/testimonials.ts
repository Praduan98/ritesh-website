// Single source of truth for testimonials — feeds the QuoteSlider and /testimonials/.
// [CONFIRM] attribution permissions + current titles before publish (Annex A row 11).
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  source: "Fiverr" | "Upwork" | "Verified";
  slider?: boolean;
  topic?: string;
  // Pulled-out result chips for the featured testimonial. Each string = "<figure> <label>",
  // e.g. "40% ↓ CAC" renders a bold "40%" + label "↓ CAC".
  metrics?: string[];
  image?: string; // headshot in /public/testimonial (optimized square webp)
};

export const testimonials: Testimonial[] = [
  {
    quote: "We slashed our CAC by 40% and tripled booked demos in 6 weeks.",
    name: "CMO",
    role: "B2B IT Firm",
    source: "Verified",
    slider: true,
    metrics: ["40% ↓ CAC", "3× booked demos", "6 weeks"],
    image: "/testimonial/cmo.webp",
  },
  {
    quote: "Ritesh is a rockstar. Looking forward to working on more projects together.",
    name: "Nathan Figg",
    role: "Founder, Woliba",
    source: "Fiverr",
    slider: true,
    image: "/testimonial/nathan-figg.webp",
  },
  {
    quote: "The value received far exceeded the amount I paid.",
    name: "James Slater",
    role: "Crypto Startup Founder",
    source: "Upwork",
    slider: true,
    image: "/testimonial/james-slater.webp",
  },
  {
    quote: "Thanks for the fantastic work, which cleared most startups' mind blocks at the launch stage.",
    name: "Ali Hashmi",
    role: "Founder, StaffWeb.com",
    source: "Fiverr",
  },
  {
    quote: "[PLACEHOLDER — carry across verbatim from the live site]",
    name: "Marilisa Barberi",
    role: "Founder, Barberi.com",
    source: "Fiverr",
    topic: "On strategy consulting",
  },
  {
    quote: "[PLACEHOLDER — carry across verbatim from the live site]",
    name: "Liz Flynn",
    role: "Founder, Ailish.com",
    source: "Fiverr",
    topic: "On brand and funnel alignment",
  },
];
