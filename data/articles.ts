// Article source — feeds /blog list and /blog/[slug] engine.
// Shape is a shared contract with the blog engine. Do not change field names.
export type ArticleBlock = { h?: string; p: string }; // optional H2 subheading, then a paragraph
export type ArticleCategory = "GTM Engineering" | "Dark Funnel" | "AI Agents" | "ABM" | "RevOps" | "HubSpot";
export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  date: string; // ISO e.g. "2026-03-04"
  readMins: number;
  pillarHref: string; // e.g. "/frameworks/dark-funnel"
  pillarAnchor: string; // anchor text, the framework name, e.g. "the DARK Funnel framework"
  body: ArticleBlock[]; // 5-8 blocks; the FIRST block's paragraph must link up to the pillar
};

export const categories: ArticleCategory[] = [
  "GTM Engineering",
  "Dark Funnel",
  "AI Agents",
  "ABM",
  "RevOps",
  "HubSpot",
];

export const articles: Article[] = [
  {
    slug: "what-gtm-engineering-is",
    title: "What GTM Engineering Actually Is (and What It Is Not)",
    category: "GTM Engineering",
    excerpt:
      "GTM engineering builds the systems go-to-market runs on, not the campaigns that run on top. Here is the honest definition.",
    date: "2026-06-18",
    readMins: 6,
    pillarHref: "/frameworks",
    pillarAnchor: "my GTM frameworks",
    body: [
      {
        p: "People ask me to define GTM engineering in one line, and the honest answer is that it is the discipline of building the systems go-to-market runs on, rather than the campaigns that run on top of them. It sits underneath everything in my GTM frameworks. Get the plumbing wrong and no amount of clever messaging will save the pipeline; get it right and mediocre campaigns still convert, because the right person is reached at the right moment with the right context.",
      },
      {
        h: "It is not growth marketing",
        p: "Growth marketing optimises campaigns: the ad, the landing page, the subject line, the funnel step. Valuable work, but it treats the underlying data and routing as fixed. GTM engineering treats them as the product. I am not tuning a form conversion rate; I am building the system that decides which accounts are worth a form in the first place, enriches them, scores them, and hands them to a human or an agent with a reason attached. Different altitude, different owner, different toolset.",
      },
      {
        h: "It is not RevOps, though it lives next door",
        p: "RevOps owns process, reporting and the health of the CRM. It keeps the machine honest. GTM engineering builds the automated decisioning that sits inside that machine: the detection logic, the enrichment pipes, the scoring model, the alerts. RevOps asks whether the numbers are trustworthy. Engineering asks whether the system acts on them without a human copying rows between tabs. The best teams run them as partners, not rivals.",
      },
      {
        h: "The loop: detect, enrich, score, act, measure",
        p: "Every system I build runs the same loop. Detect a signal, whether that is a job change, a funding round, a technology swap or a burst of anonymous research. Enrich it into an account and a buying group with real contact data. Score it against your definition of a good fit and a live moment. Act by routing it to the right rep or agent with the context bundled in. Then measure what that action produced and feed the result back into the scoring.",
      },
      {
        p: "The measure step is the one most teams skip, and it is the one that separates an engine from a pile of automations. If a score never gets corrected by what actually closed, it is a guess wearing a number. The loop only compounds when the last step rewrites the first.",
      },
      {
        h: "Who owns it",
        p: "In smaller companies GTM engineering is one person who can hold data, systems and revenue logic in their head at once, usually reporting into RevOps or the CRO. In larger ones it is a small team that partners with marketing ops and sales ops rather than absorbing them. What it is not is a side task for whoever happens to know the automation tool. It is a build role, and it deserves a builder.",
      },
      {
        p: "If you take one thing from this, let it be the shift in unit of work. Campaign thinking asks what to send this quarter. Engineering thinking asks what system decides what to send, to whom, and when, on its own, next quarter and the one after. That is the whole difference, and it is the reason the work compounds instead of resetting every time a campaign ends.",
      },
    ],
  },
  {
    slug: "buyers-never-reach-crm",
    title: "Why Most of Your Buyers Never Reach Your CRM",
    category: "Dark Funnel",
    excerpt:
      "Most demand happens off-form, in places your CRM cannot see. If you wait for the form fill, you arrive late.",
    date: "2026-05-28",
    readMins: 5,
    pillarHref: "/frameworks/dark-funnel",
    pillarAnchor: "the DARK Funnel framework",
    body: [
      {
        p: "Your CRM only knows the buyers who raised their hand. That is a small and unrepresentative slice of the people evaluating you, and it is the core problem the DARK Funnel framework was built to name. The large majority of buying activity happens off-form, in channels your CRM was never wired to see, and by the time a contact appears as a lead they have usually already decided who is on the shortlist.",
      },
      {
        h: "Demand lives off-form",
        p: "Think about how you buy software yourself. You read, you lurk in a community, you ask a peer in a private channel, you check the pricing page three times without ever filling anything in. Your buyers do the same. They research anonymously, compare in places you cannot instrument, and only convert to a known contact near the end. The form is the last step of a journey your CRM recorded none of.",
      },
      {
        h: "Waiting for the form means arriving late",
        p: "If the form fill is your first data point, you meet the buyer after the criteria are set and often after a competitor has framed the conversation. You are not early; you are responding. The whole point of working the dark funnel is to detect the research while it is happening, so you can shape the shortlist rather than react to it. Early and relevant beats late and polished almost every time.",
      },
      {
        h: "The signals you can actually detect",
        p: "You cannot see everything, and pretending otherwise leads to bad data. But you can catch a lot: anonymous visits clustered from one company, hiring signals that reveal a new priority or a new budget owner, technology changes that create a gap you fill, funding events that unlock spend, and repeat engagement from a buying group rather than a lone browser. None of these is a lead on its own. Together they tell you an account is in motion.",
      },
      {
        p: "The discipline is resolving those fragments to an account, not chasing each one as if it were a hot contact. One anonymous visit is noise. The same company appearing across three signals in a fortnight is a pattern worth a human looking at it. The system exists to separate the second case from the first.",
      },
      {
        h: "What to do about it",
        p: "Start by accepting that the CRM is a lagging record, not a demand sensor, and put a detection layer in front of it. Route resolved account signals to a rep or an agent with the context attached, so the first touch references what the buyer is actually doing rather than a generic pitch. Then measure whether accounts you engaged from a dark-funnel signal close faster than the ones who eventually filled a form. In my experience they do, and once that is on a dashboard the argument for the investment makes itself.",
      },
    ],
  },
  {
    slug: "ai-sdr-vs-hiring",
    title: "AI SDR Agents vs Hiring More SDRs: The Honest Maths",
    category: "AI Agents",
    excerpt:
      "A straight comparison of cost, coverage and quality between AI SDR agents and adding headcount, with the honest recommendation.",
    date: "2026-05-06",
    readMins: 6,
    pillarHref: "/work",
    pillarAnchor: "the systems I've shipped",
    body: [
      {
        p: "This comes up in nearly every scoping call, so I want to give the honest version rather than the vendor version. The choice between an AI SDR agent and another human hire is not a religious question, and the systems I've shipped land on both sides of it depending on the account. What follows is the maths I actually walk clients through, including where the agents lose.",
      },
      {
        h: "The cost picture",
        p: "A ramped SDR is a real annual cost once you add salary, tooling, management time and the months of ramp before they are productive. An agent is a fraction of that in running cost, but it is not free: someone has to build it, connect the data, write the logic and maintain it when a website or an API changes. The fair comparison is not agent licence versus salary. It is total system cost, including the build, against fully loaded headcount over the same period.",
      },
      {
        h: "Where agents win",
        p: "Coverage is the clearest win. An agent works every resolved signal, at any hour, without deciding some accounts are not worth the effort. It never skips the boring tier of the list. Trigger-based outreach is another: when a hiring signal or a technology change fires, an agent can act within minutes while a human is still working yesterday's queue. And it scales without a hiring plan. For breadth, consistency and speed of first touch, the agent is simply better.",
      },
      {
        h: "Where agents still lose",
        p: "Nuance. A good SDR reads a reply that says nothing on the surface and hears the hesitation underneath it. They handle the edge case, the unusual org structure, the champion who needs a warmer, slower conversation. Agents are improving here, but they still stumble on ambiguity and on the moment a deal needs judgement rather than a next step. The higher the account value and the more human the objection, the more a person earns their cost.",
      },
      {
        p: "There is also a trust cost to getting it wrong. One tone-deaf agent message to a strategic account can undo months of relationship work. That downside does not show up in a cost spreadsheet, and it is a real reason to keep humans on the accounts that matter most.",
      },
      {
        h: "The honest recommendation",
        p: "Do not frame it as agents or people. Put agents on coverage and triggers: the wide top of the funnel, the after-hours signals, the tier no human ever gets to. Put your people on nuance: the named accounts, the live deals, the conversations that need judgement. Let the agent do the first-touch work at scale and hand the promising ones to a human with the context already gathered. That split gets you the coverage of software and the judgement of a person, and it is almost always cheaper than solving the whole problem with headcount.",
      },
    ],
  },
  {
    slug: "abm-2-orchestration",
    title: "ABM 2.0: Orchestration, Not Account Lists",
    category: "ABM",
    excerpt:
      "Static account lists go stale the day they are built. ABM 2.0 selects accounts from live signals and orchestrates the buying group.",
    date: "2026-04-15",
    readMins: 5,
    pillarHref: "/frameworks/gtm-engines",
    pillarAnchor: "the 3 GTM Engines",
    body: [
      {
        p: "Most ABM programmes still start with a spreadsheet of accounts agreed in a room in January. That list is the weakest part of the whole effort, and fixing it is where the 3 GTM Engines earn their place. ABM 2.0 is not a bigger list or a better spreadsheet. It is orchestration: selecting accounts from live behaviour and coordinating the buying group, run as a system rather than a quarterly ritual.",
      },
      {
        h: "The problem with static lists",
        p: "A fixed account list goes stale the day it is signed off. It captures who looked good last quarter, not who is in a buying moment now. Reps chase accounts that have gone quiet and miss accounts that just started researching because they were never on the list. The list also flattens timing: every account is treated as equally ready, when readiness is the single most useful thing you could know. Static targeting optimises for tidiness, not for pipeline.",
      },
      {
        h: "Signal-led selection",
        p: "Dynamic selection flips the order. Instead of picking accounts and hoping they engage, you watch for engagement and let it nominate accounts into the programme. A firm that fits your ICP and has just shown three signals in a fortnight earns a place; a January favourite that has done nothing drops down the queue. The list becomes a living thing that reflects the market this week, not a decision frozen six months ago.",
      },
      {
        h: "Focus on the buying group, not the lead",
        p: "B2B deals are decided by a group, so a single engaged contact is a thin basis for a play. ABM 2.0 resolves signals to the account and then maps the buying group around them: the economic buyer, the champion, the blockers, the people quietly doing the research. Orchestration means engaging that group in a coordinated way rather than pinging whichever individual happened to click. One person clicking is a hint. A group in motion is a deal forming.",
      },
      {
        p: "This is also where the three engines line up cleanly. Signal detection nominates the account, personalisation shapes what the group actually sees, and activation carries it into sales as pipeline. Each has an owner, so the programme does not collapse into one overworked marketer trying to do all three by hand.",
      },
      {
        h: "How to prioritise",
        p: "Rank by behaviour, not by logo. An enterprise name with no activity should sit below a mid-market account that is clearly in-market this week, because timing beats size when you are deciding where a rep spends the next hour. Give sellers a short, ranked, reasoned list that refreshes as signals change, and tell them why each account is on it. Prioritisation that a rep can see the logic behind gets worked. A static list handed down from a planning meeting mostly gets ignored.",
      },
    ],
  },
  {
    slug: "routing-scoring-sales-trust",
    title: "Routing and Scoring Your Sales Team Will Actually Trust",
    category: "RevOps",
    excerpt:
      "Reps ignore scores they cannot see the logic behind. Transparent scoring, honest routing and lifecycle stages that mean something fix it.",
    date: "2026-03-19",
    readMins: 6,
    pillarHref: "/frameworks/signals-playbook",
    pillarAnchor: "the S.I.G.N.A.L.S playbook",
    body: [
      {
        p: "The fastest way to kill a scoring model is to give sales a number they cannot explain. I have watched carefully built systems get quietly ignored within a fortnight, and the S.I.G.N.A.L.S playbook exists partly to stop that from happening. Reps do not distrust scoring because they are difficult. They distrust it because it has burned them before, and rebuilding that trust is a design problem, not a training problem.",
      },
      {
        h: "Why reps ignore scores",
        p: "A rep opens a lead marked hot, calls it, and finds a student doing research. They do that twice and they stop believing the label for good. The usual culprit is an opaque model: points assigned by rules nobody can see, weighted by someone who left, with no way to tell fit from timing. If a seller cannot answer why is this a 90, the score is just decoration, and they will fall back on their own gut, which is exactly what the system was meant to improve.",
      },
      {
        h: "Transparent scoring",
        p: "Every score I ship comes with its reasons attached. Not a single number but a short, readable why: fits ICP on size and sector, three research sessions this week, a recent leadership hire in the buying centre. When a rep can see the components, two things happen. They trust the good scores because the logic is sound, and they give you useful feedback on the bad ones, which is how the model improves. A number without reasons cannot be argued with, so it cannot be trusted.",
      },
      {
        h: "Separate fit from timing",
        p: "Collapsing fit and timing into one figure is the most common scoring mistake. A perfect-fit account that is doing nothing is not the same as a mediocre-fit account that is actively in-market, and a rep needs to tell those apart to decide who to call first. Score them on two axes and let the rep see both. The account worth a call today is the one that is both a reasonable fit and clearly in motion, and that judgement is easy when the two dimensions are not blended into mush.",
      },
      {
        h: "Routing that matches ownership",
        p: "Good scoring dies if routing sends the lead to the wrong person. Rules should follow how the team actually works: territory, segment, language, existing relationship, current load. And routing has to be fast, because a signal acted on within minutes is worth far more than the same signal worked the next morning. When the right lead lands with the right rep quickly and with its reasons attached, the system starts to feel like help rather than homework.",
      },
      {
        h: "Lifecycle stages that mean something",
        p: "Finally, make the stages honest. If half your database is stuck in a vague middle stage that no action moves it out of, the pipeline is fiction. Each stage should carry a clear entry rule, a clear exit rule and a clear owner, so that where a contact sits tells you what happens next rather than where someone last remembered to drag it. Get scoring, routing and lifecycle to agree, and sales will trust the system because it keeps being right in ways they can check.",
      },
    ],
  },
  {
    slug: "crm-filing-cabinet",
    title: "Why Your CRM Is a Filing Cabinet, Not a Decision Engine",
    category: "HubSpot",
    excerpt:
      "Most CRMs store what happened and decide nothing. Rebuild yours around routing, scoring and lifecycle logic that acts.",
    date: "2026-02-24",
    readMins: 5,
    pillarHref: "/frameworks/signals-playbook",
    pillarAnchor: "the S.I.G.N.A.L.S playbook",
    body: [
      {
        p: "Open most CRMs and you find an expensive filing cabinet: a tidy record of what already happened that decides nothing about what should happen next. Turning that cabinet into a decision engine is the practical outcome the S.I.G.N.A.L.S playbook is built to produce, and it applies whether you run HubSpot or Salesforce. The tool is capable of far more than storage. Most implementations just never ask it to.",
      },
      {
        h: "Storage versus decisions",
        p: "A filing cabinet answers backward-looking questions: who is this contact, what did they do, when did we last speak. Useful, but passive. A decision engine answers forward-looking ones: who should we call today, why them, and who takes it. The difference is whether the system produces actions or merely holds facts. Almost every CRM I am asked to fix is doing the first job well and the second job not at all, and the gap is where the pipeline leaks.",
      },
      {
        h: "Rebuild around routing",
        p: "Start with what happens the moment a record changes. A new signal, a form fill, a stage change should trigger a decision about who owns it and what they do next, automatically, within minutes. If a lead can sit in your CRM overnight waiting for someone to notice it, the system is filing, not deciding. Routing is the first place a cabinet becomes an engine, because it is where stored data turns into a human action.",
      },
      {
        h: "Rebuild around scoring",
        p: "Scoring is how the system tells your team where to spend attention, and it only works when the logic lives in the CRM rather than in a rep's head. Fit and timing, kept separate, with the reasons visible on the record, so the next action is obvious to whoever opens it. Without this the CRM makes everyone guess which of four hundred open contacts matters, which means the loudest or newest wins rather than the best. Scoring is the engine deciding, out loud, on your behalf.",
      },
      {
        p: "None of this requires ripping out the platform. HubSpot and Salesforce both have the properties, workflows and routing to do this well. The failure is almost never the tool; it is that the tool was set up to record and never configured to act. That is a rebuild of logic, not a migration of software.",
      },
      {
        h: "Lifecycle logic that drives action",
        p: "The last piece is lifecycle. Stages have to mean something a rule can act on: a clear reason to enter, a clear reason to leave, and an action attached to each transition. When lifecycle, scoring and routing agree, the CRM stops being a place you look things up and becomes a system that tells you what to do next. That is the whole shift, and it is available in the platform you already pay for.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
