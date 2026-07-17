import Link from "next/link";
import SignalOrbit from "@/components/diagrams/SignalOrbit";
import PhotoFrame from "@/components/site/PhotoFrame";
import CaseThumb from "@/components/site/CaseThumb";
import { socialUrls } from "@/components/site/SocialLinks";
import NLBlock from "@/components/modules/NLBlock";
import LogoWall from "@/components/modules/LogoWall";
import StatBar from "@/components/modules/StatBar";
import QuoteSlider from "@/components/modules/QuoteSlider";
import VideoCard from "@/components/modules/VideoCard";
import { homeCases } from "@/data/cases";
import { videos } from "@/data/videos";
import { hueVars } from "@/data/cardHues";

const HELP = [
  { title: "Build Your GTM Engine", body: "I design and build the whole system: signal detection, enrichment, scoring, and outreach that runs without anyone babysitting it.",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2" /></> },
  { title: "AI Agents & Automation", body: "SDR agents, chatbots and voice assistants that qualify, personalise and book meetings around the clock, at a fraction of headcount cost.",
    icon: <><circle cx="12" cy="8" r="3.2" /><path d="M6 21c0-3.3 3-5.5 6-5.5s6 2.2 6 5.5" /><path d="M4.5 4l1.5 1.5M19.5 4L18 5.5" /></> },
  { title: "Signal Architecture & RevOps", body: "One pipeline, one truth. I connect your signal tools, CRM and ad platforms into a system your team can actually own.",
    icon: <><rect x="3" y="4" width="18" height="14" rx="1" /><path d="M3 9h18M8 18v3M16 18v3" /></> },
  { title: "Fractional GTM Advisor", body: "I work alongside founders and CROs as a hands-on partner — auditing the motion, choosing the stack, and calling the plays.",
    icon: <><path d="M3 12h6l2-5 3 10 2-5h5" /></> },
];

// Home shows the first 6 sessions from the real webinar library (data/videos.ts).
const HOME_VIDEO_COUNT = 6;

const PERSON_LD = {
  "@context": "https://schema.org", "@type": "Person", name: "Ritesh Osta",
  jobTitle: "GTM Engineer & Founder",
  worksFor: { "@type": "Organization", name: "InsightsTap", url: "https://insightstap.com" },
  url: "https://riteshosta.com",
  sameAs: socialUrls,
  knowsAbout: ["GTM engineering", "dark funnel", "ABM", "marketing automation", "AI agents"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }} />

      {/* M01 · Hero */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <h1>I&rsquo;m <span className="accent" style={{ whiteSpace: "nowrap" }}>Ritesh&nbsp;Osta</span></h1>
            <p className="lead">
              I help B2B tech companies run go-to-market like an e-commerce engine. Founder of InsightsTap, creator of the
              DARK Funnel framework, and a Top Rated Fiverr Pro.
            </p>
            <div className="hero-cta">
              <Link href="/work-with-me" className="btn btn-primary"><span className="dot" />Work With Me</Link>
            </div>
            <div className="hero-trust">
              <span className="badge b-star">★ 5.0 · 45 reviews</span>
              <span>Top Rated Fiverr Pro · Founder of InsightsTap &amp; JobFeeder</span>
            </div>
          </div>
          <PhotoFrame src="/images/ritesh-hero.webp" alt="Ritesh Osta, GTM engineer and founder of InsightsTap"
            tag="Ritesh Osta · GTM Engineer" priority objectPosition="center" />
        </div>
      </section>

      {/* M02 · Newsletter strip */}
      <section className="wrap" style={{ paddingBottom: "clamp(44px,7vw,80px)" }}>
        <NLBlock variant="inline" />
      </section>

      {/* M03 · Logo wall — full-bleed marquee (spans the viewport, not the .wrap cap) */}
      <section style={{ paddingBottom: "clamp(44px,7vw,80px)" }}>
        <LogoWall heading="Trusted by the most innovative companies worldwide" />
      </section>

      {/* M04 · About (long-form block) */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "center" }}>
            <PhotoFrame src="/images/ritesh-about.webp" alt="Ritesh Osta" tag="Signals in · Pipeline out"
              dark objectPosition="center" />
            <div className="reveal">
              <h2 style={{ fontSize: "clamp(2.1rem, 1.5rem + 2.2vw, 3.4rem)", marginTop: 12, maxWidth: "16ch" }}>
                Signals In. Pipeline Out.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 20, maxWidth: "56ch" }}>
                I have spent a decade inside B2B pipelines. The messy CRMs, the cold sequences nobody answers, the ad
                spend that never traces back to revenue.
              </p>
              <p style={{ color: "var(--muted)", marginTop: 14, maxWidth: "56ch" }}>
                What I build now is different. Not campaigns — engines. Systems that detect buying intent before the form
                fill, enrich it with context, and act on it automatically.
              </p>
              <p style={{ color: "var(--muted)", marginTop: 14, maxWidth: "56ch" }}>
                I run InsightsTap, a GTM engineering studio, and JobFeeder, a real-time hiring-signal product. My
                frameworks — DARK, S.I.G.N.A.L.S and the 3 GTM Engines — are the operating system behind both.
              </p>
              <p style={{ marginTop: 22 }}>
                <Link href="/about" className="btn-link">Read my full story <span className="arw">→</span></Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M05 · Stat bar — full-width brand band (reference: navy figures band) */}
      <section className="section feature stats-band">
        <div className="wrap">
          <div className="stat-panel reveal">
            <StatBar stats={[
              { value: 20, suffix: "+", cap: "Years of experience" },
              { value: 250, suffix: "+", cap: "Projects delivered" },
              { value: 100, suffix: "M+", cap: "Pipeline generated" },
              { value: 5.0, suffix: "★", decimals: 1, cap: "Fiverr Pro · 45 reviews", gold: true },
            ]} />
          </div>
        </div>
      </section>

      {/* M06 · How Can I Help You — tinted band, large 2×2 cards */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>How Can I Help You?</h2>
          </div>
          <div className="grid g2">
            {HELP.map((h, i) => (
              <div key={h.title} className="card hue-card reveal" style={hueVars(i)}>
                <span className="icon-badge"><svg viewBox="0 0 24 24" aria-hidden="true">{h.icon}</svg></span>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/work-with-me" className="btn btn-primary"><span className="dot" />Work With Me</Link>
          </div>
        </div>
      </section>

      {/* M07 · The Frameworks — Signal Orbit (radial system map, light band) */}
      <section className="section orbit-band">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: "center", marginInline: "auto", alignItems: "center" }}>
            <h2>The System Behind the Work</h2>
            <p>Three layers, one operating model. This is how a company moves from guesswork to signal-led growth.</p>
          </div>
          <SignalOrbit />
          <div style={{ marginTop: 44, textAlign: "center" }}>
            <Link href="/frameworks" className="btn btn-ghost">Explore the frameworks</Link>
          </div>
        </div>
      </section>

      {/* M08 · Selected Work */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Systems That Shipped</h2>
          </div>
          <div className="grid g3">
            {homeCases.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="card-link reveal">
                <div className="case-card">
                  <CaseThumb slug={c.slug} />
                  {c.metric && <span className="case-metric">{c.metric}</span>}
                  <span className="mtitle">{c.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/work" className="btn-link">See all work <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M09 · Videos */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Frameworks, Teardowns &amp; Playbooks</h2>
            <p>I break down how signal-led GTM actually works. No theory — the real systems, the real stack.</p>
          </div>
          <div className="grid g3">
            {videos.slice(0, HOME_VIDEO_COUNT).map((v) => (
              <VideoCard key={v.slug} video={v} />
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/videos" className="btn-link">All videos <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M10 · Testimonials */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Proof, Not Adjectives</h2>
          </div>
          <div className="reveal"><QuoteSlider /></div>
          <div style={{ marginTop: 24 }}>
            <Link href="/testimonials" className="btn-link">Read all testimonials <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* M11 · Newsletter — two-column inbox-mockup feature */}
      <section className="section">
        <div className="wrap"><NLBlock variant="feature" /></div>
      </section>
    </>
  );
}
