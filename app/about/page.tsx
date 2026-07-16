import Link from "next/link";
import type { Metadata } from "next";
import PhotoFrame from "@/components/site/PhotoFrame";
import SocialLinks, { socialUrls } from "@/components/site/SocialLinks";
import NLBlock from "@/components/modules/NLBlock";
import LogoWall from "@/components/modules/LogoWall";
import JourneyTrace from "@/components/diagrams/JourneyTrace";
import { hueVars } from "@/data/cardHues";

export const metadata: Metadata = {
  title: { absolute: "About Ritesh Osta — GTM Engineer, Founder & Advisor" },
  description:
    "A decade inside B2B pipelines and 100+ projects delivered. Founder of InsightsTap and JobFeeder, creator of the DARK Funnel framework.",
  alternates: { canonical: "/about" },
};

const DOING = [
  { h: "From GTM audit to blueprint", p: "I map your ICP, your signals and your stack, then hand you a phased roadmap your team can execute." },
  { h: "Building signal infrastructure", p: "The detection layer, the enrichment pipeline, the scoring engine, the activation triggers — the foundation everything else runs on." },
  { h: "Deploying AI agents that earn their keep", p: "SDR agents, voice bots and chat agents that book meetings, not just demos of themselves." },
  { h: "Making the CRM a decision engine", p: "HubSpot and Salesforce rebuilt around lifecycle logic, routing and scoring instead of storage." },
  { h: "Coaching GTM teams", p: "I train RevOps, marketing ops and SDR leaders to run the playbook after I leave. The system has to outlive the engagement." },
  { h: "Still in the trenches", p: "I build the workflows, write the prompts, and sit in the sprint reviews. Fractional GTM lead when that is what a company needs." },
];

const BEYOND = [
  "Certified public speaker and trainer, on stage for GTM, ABM and AI in B2B.",
  "Mentor to early-stage SaaS founders and B2B growth leads.",
  "Creator on YouTube, where I break down GTM systems in public.",
  "Top Rated Fiverr Pro, hand-picked into the Pro community — 5.0 across 45 reviews.",
];

const ACCOMPLISHMENTS = [
  { h: "100+ Projects Delivered", p: "B2B SaaS, IT services, healthcare and asset management — from first pipeline to predictable revenue." },
  { h: "Top Rated Fiverr Pro", p: "Hand-picked into the Fiverr Pro community. 5.0 across 45 reviews, Level 2 seller." },
  { h: "Frameworks in Production", p: "DARK, S.I.G.N.A.L.S and the 3 GTM Engines run inside client GTM teams today, not just in slide decks." },
  { h: "Two Products Shipped", p: "InsightsTap, a GTM engineering studio. JobFeeder, real-time hiring-signal detection for B2B pipelines." },
];

const PERSON_LD = {
  "@context": "https://schema.org", "@type": "Person", name: "Ritesh Osta",
  jobTitle: "GTM Engineer & Founder",
  worksFor: { "@type": "Organization", name: "InsightsTap", url: "https://insightstap.com" },
  url: "https://riteshosta.com/about",
  sameAs: socialUrls,
  knowsAbout: ["GTM engineering", "dark funnel", "ABM", "marketing automation", "AI agents"],
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://riteshosta.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://riteshosta.com/about" },
  ],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>Hi 👋 I&rsquo;m <span className="accent">Ritesh.</span></h1>
            <p className="lead">
              A decade inside B2B pipelines. 100+ projects delivered. Founder of InsightsTap. I help B2B tech
              companies stop chasing leads and start engineering demand.
            </p>
            <div className="hero-cta">
              <Link href="/work-with-me" className="btn btn-primary"><span className="dot" />Work With Me</Link>
              <Link href="/frameworks" className="btn btn-ghost">Read my frameworks</Link>
            </div>
          </div>
          <PhotoFrame src="/images/ritesh-friendly.webp" alt="Ritesh Osta, GTM engineer and founder of InsightsTap" tag="Ritesh Osta · Founder"
            priority objectPosition="center" />
        </div>
      </section>

      {/* M02 · My Journey — the page's one long-form block */}
      {/* [CONFIRM] SAP/Oracle certification claims — keep only what can be evidenced (Annex A row 7) */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>My Journey</h2>
          </div>
          <div className="split" style={{ alignItems: "center" }}>
            <div className="reveal" style={{ maxWidth: "62ch" }}>
              <p style={{ color: "var(--ink-2)" }}>
                I started in enterprise tech — SAP and Oracle work, where nothing ships unless the system underneath it
                is right. That habit stuck.
              </p>
              <p style={{ color: "var(--ink-2)", marginTop: 18 }}>
                Marketing found me later, and the first thing I noticed was that B2B ran on opinion where enterprise IT
                ran on architecture. Campaigns instead of systems. Guesses instead of signals.
              </p>
              <p style={{ color: "var(--ink-2)", marginTop: 18 }}>
                So I started building go-to-market the way engineers build software: detect, enrich, score, act,
                measure, repeat. That became the Funnel Experience™ Loop, and then the DARK Funnel framework I use
                today.
              </p>
              <p style={{ color: "var(--ink-2)", marginTop: 18 }}>
                Now I run InsightsTap, a GTM engineering studio, and JobFeeder, a real-time hiring-signal product. I
                have delivered 100+ projects for B2B tech, SaaS and enterprise teams — and I still build with my own
                hands.
              </p>
            </div>
            <JourneyTrace />
          </div>
        </div>
      </section>

      {/* M03 · Who I've worked with */}
      {/* [CONFIRM] Fortune 500 claim — cut if it cannot be named (Annex A row 6) */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div className="reveal"><LogoWall heading="" layout="grid" /></div>
            <div className="reveal worked-content">
              <h2>I&rsquo;ve worked with the greats</h2>
              <p style={{ marginTop: 18, color: "var(--muted)", fontSize: "clamp(1rem,.95rem + .3vw,1.15rem)", lineHeight: 1.62, maxWidth: "46ch" }}>
                Fortune 500 teams and mobile-first startups: AllRide, KompiTech, Woliba, Pelican Robotics, FST and more.
                In each one, I owned the go-to-market architecture, not just the campaign calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M04 · What I actually do */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Turning Buyer Signals Into Revenue</h2>
          </div>
          <div className="grid g3">
            {DOING.map((d, i) => (
              <div key={d.h} className="card hue-card reveal" style={hueVars(i)}>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <SocialLinks variant="row" />
          </div>
        </div>
      </section>

      {/* M05 · Beyond this */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Beyond This, I Am a…</h2>
          </div>
          <div className="grid g2">
            {BEYOND.map((b, i) => (
              <div key={b} className="card hue-card stmt reveal" style={hueVars(i)}>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M06 · Accomplishments */}
      {/* [CONFIRM] all figures per Annex A */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>A Few Accomplishments</h2>
          </div>
          <div className="grid g4">
            {ACCOMPLISHMENTS.map((a, i) => (
              <div key={a.h} className="card hue-card reveal" style={hueVars(i)}>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M07 · My companies */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Companies &amp; Products</h2>
          </div>
          <div className="grid g3">
            {/* THE one allowed in-page cross-domain insightstap link on About */}
            <a href="https://insightstap.com" target="_blank" rel="noopener" className="card-link reveal">
              <div className="card hue-card" style={hueVars(0)}>
                <h3>InsightsTap</h3>
                <p>
                  A GTM engineering studio building signal-led revenue systems for B2B tech — AI agents, dark funnel
                  intelligence, CRM automation and performance ads.
                </p>
                <p style={{ marginTop: 14 }}><span className="btn-link">Visit insightstap.com <span className="arw">→</span></span></p>
              </div>
            </a>
            <a href="https://insightstap.com/product/jobfeeder" target="_blank" rel="noopener" className="card-link reveal">
              <div className="card hue-card" style={hueVars(1)}>
                <h3>JobFeeder</h3>
                <p>
                  Real-time IT job-posting signals, delivered to Slack or your inbox as qualified leads. Hiring intent
                  is the earliest buying intent there is.
                </p>
                <p style={{ marginTop: 14 }}><span className="btn-link">See JobFeeder <span className="arw">→</span></span></p>
              </div>
            </a>
            <Link href="/work-with-me" className="card-link reveal">
              <div className="card hue-card" style={hueVars(2)}>
                <h3>Advisory</h3>
                <p>
                  Direct work with founders and CXOs as a fractional GTM lead — architecture, stack decisions and
                  execution, hands on the keyboard.
                </p>
                <p style={{ marginTop: 14 }}><span className="btn-link">Work With Me <span className="arw">→</span></span></p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* M08 · Outside of work */}
      <section className="section tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <div className="reveal">
              <h2 style={{ fontSize: "clamp(1.7rem,1.35rem + 1.35vw,2.5rem)" }}>🐾 Outside of Work…</h2>
              <p style={{ color: "var(--ink-2)", marginTop: 20, maxWidth: "56ch" }}>
                I love cats, and I am part of PAWS, which shelters homeless animals. I speak, I coach, and I get an
                unreasonable amount of satisfaction from watching someone else&rsquo;s system finally click. I would
                rather be the person who makes the thing work than the loudest voice in the room.
              </p>
            </div>
            {/* Annex B: swap for candid/PAWS photo when sourced */}
            <PhotoFrame src="/images/ritesh-alt.webp" alt="Ritesh Osta outside of work" tag="Outside of work" objectPosition="center" />
          </div>
        </div>
      </section>

      {/* M09 · Newsletter — homepage feature treatment */}
      <section className="section">
        <div className="wrap"><NLBlock variant="feature" /></div>
      </section>
    </>
  );
}
