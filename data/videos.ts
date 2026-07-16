// Video source — feeds the home M09 grid (first 6), /videos (full library) and
// /videos/[slug] (detail + VideoObject JSON-LD).
// Real assets: the 10 on-demand webinar sessions from insightstap.com/news-insights/webinars,
// embedded from YouTube (youtube-nocookie). Summaries written in-voice from the session
// titles — [CONFIRM] wording with Ritesh before publish.
export type Video = {
  slug: string;
  title: string;
  youtubeId: string;
  cat: string;
  summary: string;
};

export const videos: Video[] = [
  {
    slug: "gtm-engine-for-large-b2b-sales-teams",
    title: "How to build a GTM engine for large B2B sales teams",
    youtubeId: "DNY0PitTvmw",
    cat: "GTM engineering",
    summary:
      "The featured session: designing one GTM engine that keeps a large B2B sales team fed — signal detection, routing, and the operating rhythm that makes it stick.",
  },
  {
    slug: "ai-agents-revenue-automation-future-of-b2b-gtm",
    title: "AI agents, revenue automation & the future of B2B GTM",
    youtubeId: "-Qa030ZuB10",
    cat: "AI agents",
    summary:
      "Where AI agents genuinely earn a seat in the revenue stack — and where they don't. A grounded look at automation that books pipeline instead of demos that impress.",
  },
  {
    slug: "signals-framework-modern-gtm-strategy",
    title: "The SIGNALS Framework™ to build modern GTM strategy",
    youtubeId: "LB9aFUe1D1Q",
    cat: "Frameworks",
    summary:
      "Spot, Integrate, Generate, Nurture, Automate, Learn, Scale — the execution playbook behind signal-led growth, walked through end to end.",
  },
  {
    slug: "what-is-gtm-engineering",
    title: "What is GTM engineering? How data, signals & automation drive B2B growth",
    youtubeId: "IyjHIl0mmhY",
    cat: "GTM engineering",
    summary:
      "A live Q&A on the discipline itself: what a GTM engineer actually builds, and how data, signals and automation compound into B2B growth.",
  },
  {
    slug: "death-of-old-abm-5-ai-shifts",
    title: "The death of old ABM: 5 shifts redefining B2B marketing with AI",
    youtubeId: "MkBPSiOouZw",
    cat: "ABM 2.0",
    summary:
      "Static account lists are done. Five concrete shifts — from list-building to live signals — that separate ABM 2.0 from the playbook everyone else is still running.",
  },
  {
    slug: "stopping-ad-fraud-in-real-time",
    title: "The $100 billion problem: how enterprises can stop ad fraud in real time",
    youtubeId: "eo_gCVioMYs",
    cat: "Ad fraud",
    summary:
      "Ad fraud quietly eats nine figures of B2B budget. How enterprises detect it in real time and route spend back to buyers who actually exist.",
  },
  {
    slug: "how-the-dark-funnel-really-works",
    title: "How does the dark funnel really work in B2B sales?",
    youtubeId: "dVwqSvt8XjU",
    cat: "Dark funnel",
    summary:
      "Part one of the dark funnel series: where invisible demand actually lives — communities, review sites, job boards — and how to surface it before the form fill.",
  },
  {
    slug: "smarter-ppc-with-abm-2-0",
    title: "Smarter PPC using ABM 2.0: reducing wasted ad spend with intent data",
    youtubeId: "rZpawiTmQJ4",
    cat: "ABM 2.0",
    summary:
      "Pointing paid spend at accounts showing live intent instead of broad personas — the mechanics of PPC that stops paying for clicks that were never going to buy.",
  },
  {
    slug: "hubspot-abm-crm-intelligence",
    title: "HubSpot + ABM: using CRM intelligence for account-based growth",
    youtubeId: "SMiefK411ew",
    cat: "HubSpot",
    summary:
      "Turning the CRM you already own into an ABM engine: the HubSpot properties, workflows and scoring that make account-based growth run itself.",
  },
  {
    slug: "job-listings-into-b2b-leads",
    title: "How to turn job listings into B2B leads using job intent signals",
    youtubeId: "0-m2WH4lTXs",
    cat: "Signals",
    summary:
      "A hiring spike is a buying signal. How JobFeeder-style job intent turns public listings into a live feed of in-market accounts for your pipeline.",
  },
];

export function getVideo(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

// YouTube helpers shared by cards, detail pages and JSON-LD.
export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
