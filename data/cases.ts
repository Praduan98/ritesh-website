// Case source — feeds Home M08 (3 cards) and /work/ M02 (full list).
// Metrics are from InsightsTap docs; [CONFIRM] arithmetic + naming before publish (Annex A, row 10).
// Order is deliberate: client outcomes first (1–3), then JobFeeder, then built products (5–8).
export type CaseItem = {
  slug: string;
  title: string;
  home?: boolean; // shown on the Home "Selected Work" grid
  kind: "client" | "product";
  metric?: string; // bold headline metric, e.g. "40% lower CAC in 60 days"
  body: string;
};

export const cases: CaseItem[] = [
  {
    slug: "it-services-cac",
    title: "IT Services Firm — 40% lower CAC in 60 days",
    home: true,
    kind: "client",
    metric: "40% lower CAC · demos ×3",
    body: "Signal-led outreach, CRM automation and AI agents replaced manual prospecting entirely. Demo bookings tripled and CAC fell 40% inside two months.",
  },
  {
    slug: "b2b-saas-ai-sdr",
    title: "B2B SaaS — AI agents that outperformed SDRs",
    kind: "client",
    metric: "Pipeline velocity 3×",
    body: "Automated prospecting across email and LinkedIn, triggered by funding and hiring signals. Pipeline velocity 3×, with no added headcount.",
  },
  {
    slug: "msp-hiring-spikes",
    title: "MSP — hiring spikes turned into in-market accounts",
    kind: "client",
    metric: "42% more in-market accounts",
    body: "Job-posting spikes routed to sales the day they appeared. 42% more in-market accounts identified than the previous list-buying motion produced.",
  },
  {
    slug: "jobfeeder",
    title: "JobFeeder — hiring signals into pipeline, in real time",
    home: true,
    kind: "product",
    body: "Our own product. It surfaces IT job postings in real time and drops qualified leads straight into Slack or the inbox. Hiring intent, before anyone fills a form.",
  },
  {
    slug: "ava-ai-voice-agent",
    title: "Ava AI — a voice agent that runs the call centre",
    home: true,
    kind: "product",
    body: "Handles inbound and outbound calls, resolves routine queries and books meetings around the clock. Built on GPT-4o and Langchain with Twilio telephony, Next.js, Node and Python.",
  },
  {
    slug: "onegpt",
    title: "OneGPT — one interface, every model",
    kind: "product",
    body: "A unified chat hub across Gemini, GPT-4o, o1, o3-mini and Llama 4, taking text, image, PDF, video and audio input. Flutter, Node, Python, MongoDB, Socket.IO.",
  },
  {
    slug: "aetherpilot",
    title: "AetherPilot — an agent that actually does the task",
    kind: "product",
    body: "Browses, logs in and completes work end-to-end — ordering, applications, social management — and plans complete trips to budget. React, FastAPI, Langchain, Playwright.",
  },
  {
    slug: "connectchat",
    title: "ConnectChat — a chatbot platform with a CRM brain",
    kind: "product",
    body: "Embeddable AI chat trained on business data, with a dashboard over every conversation and visitor capture built in. React, Node, MongoDB, OpenAI and Gemini.",
  },
];

export const homeCases = cases.filter((c) => c.home);
