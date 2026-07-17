import { testimonials } from "@/data/testimonials";

// "Testimonial Wall" — an editorial bento showing every rotation testimonial at once
// (featured + supporting cards), with a proof marquee. Static: no nav controls, since
// the whole wall is visible. Chosen from the 3-variant design exploration.

const AVATARS = ["tw-avatar-a", "tw-avatar-b", "tw-avatar-c"];
const SRC: Record<string, { cls: string; label: string; mark: string }> = {
  Fiverr: { cls: "tw-logo-fiverr", label: "Fiverr", mark: "fiverr" },
  Upwork: { cls: "tw-logo-upwork", label: "Upwork", mark: "upwork" },
  Verified: { cls: "", label: "Verified", mark: "" },
};

const STAR = <path d="M12 17.27 6.82 20.4l1.37-5.9-4.58-3.96 6.03-.52L12 4.5l2.36 5.52 6.03.52-4.58 3.96 1.37 5.9z" />;
const Stars = () => (
  <span className="tw-stars" role="img" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => <svg key={i} viewBox="0 0 24 24" aria-hidden="true">{STAR}</svg>)}
  </span>
);

function initials(name: string) {
  const p = name.trim().split(/\s+/);
  return (p.length === 1 ? p[0].slice(0, 1) : p[0][0] + p[p.length - 1][0]).toUpperCase();
}

const PROOF = [
  { t: "5.0", star: true, suffix: "rating" },
  { t: "Top Rated Fiverr Pro", gold: true }, { t: "Fiverr Pro" }, { t: "Upwork" },
];
function ProofRun({ hidden }: { hidden?: boolean }) {
  return (
    <>
      {PROOF.map((p, i) => (
        <span key={i} aria-hidden={hidden} style={{ display: "contents" }}>
          <span className={`tw-pill${p.gold ? " tw-pill-gold" : ""}`}>
            {p.t.match(/^\d/) ? <b>{p.t}</b> : p.t}
            {p.star && <svg className="tw-pstar" viewBox="0 0 24 24" aria-hidden="true">{STAR}</svg>}
            {p.suffix && <>&nbsp;{p.suffix}</>}
          </span>
          <span className="tw-sep">·</span>
        </span>
      ))}
    </>
  );
}

export default function QuoteSlider() {
  const items = testimonials.filter((t) => t.slider);

  return (
    <div className="tw reveal">
      <div className="tw-bg" aria-hidden="true">
        <span className="tw-blob tw-blob-cyan" /><span className="tw-blob tw-blob-gold" /><span className="tw-blob tw-blob-violet" />
        <svg className="tw-trace" viewBox="0 0 1200 260" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tw-tg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#6AE3E1" stopOpacity="0" />
              <stop offset=".45" stopColor="#0DCFCF" stopOpacity=".9" />
              <stop offset="1" stopColor="#6C5CE7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-20 210 C 220 210 260 70 470 70 S 760 200 940 150 1120 60 1240 70" fill="none" stroke="url(#tw-tg)" strokeWidth="1.4" strokeLinecap="round" />
          <circle className="tw-node" cx="470" cy="70" r="5.5" fill="#F4B740" />
          <circle cx="470" cy="70" r="10" fill="none" stroke="#F4B740" strokeWidth="1" opacity=".5" />
        </svg>
      </div>

      <div className="tw-grid">
        {items.map((t, i) => {
          const feat = i === 0;
          const src = SRC[t.source];
          return (
            <figure key={i} className={`tw-card${feat ? " tw-featured" : " tw-mini"}`}>
              {feat && (
                <span className="tw-mark" aria-hidden="true">
                  <svg viewBox="0 0 48 40"><path d="M0 40V22C0 9.85 8.4 1.4 20 0l1.6 6.6C14.9 8.2 11 12.4 10.6 18H20v22H0Zm27 0V22C27 9.85 35.4 1.4 47 0l1.6 6.6C41.9 8.2 38 12.4 37.6 18H47v22H27Z" fill="currentColor" /></svg>
                </span>
              )}
              <div className="tw-card-top">
                {feat ? (
                  <span className="tw-badge tw-badge-verified">
                    <svg className="tw-seal" viewBox="0 0 24 24" aria-hidden="true">
                      <defs>
                        <linearGradient id="tw-seal-g" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="#FAD27D" /><stop offset="1" stopColor="#E0A52B" />
                        </linearGradient>
                      </defs>
                      <g fill="url(#tw-seal-g)">
                        <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="4.6" />
                        <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="4.6" transform="rotate(45 12 12)" />
                      </g>
                      <path d="M8.4 12.2 L11 14.8 L15.7 9.6" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Verified outcome
                  </span>
                ) : (
                  <>
                    <span className={`tw-logo ${src.cls}`} aria-label={src.label}>{src.mark}</span>
                    <Stars />
                  </>
                )}
              </div>

              <blockquote className={`tw-quote${feat ? " tw-quote-lg" : ""}`}>{t.quote}</blockquote>

              {feat && t.metrics && (
                <div className="tw-metrics" aria-label="Measured results">
                  {t.metrics.map((m, j) => {
                    const [b, ...rest] = m.split(" ");
                    return <span key={j} className={`tw-metric${j === t.metrics!.length - 1 ? " tw-metric-time" : ""}`}><b>{b}</b><span className="tw-metric-lbl">{rest.join(" ")}</span></span>;
                  })}
                </div>
              )}

              <figcaption className="tw-who">
                {t.image
                  ? // eslint-disable-next-line @next/next/no-img-element
                    <img className="tw-avatar tw-ava-img" src={t.image} alt="" width={112} height={112} loading="lazy" />
                  : <span className={`tw-avatar ${AVATARS[i % 3]}`} aria-hidden="true">{initials(t.name)}</span>}
                <span className="tw-who-txt">
                  <span className="tw-name">{t.name}</span>
                  <span className="tw-role">{t.role}</span>
                </span>
                {feat && <span className="tw-src">{t.source === "Verified" ? "Direct" : t.source}</span>}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="tw-proof" aria-label="Overall ratings">
        <div className="tw-marquee"><div className="tw-marquee-track"><ProofRun /><ProofRun hidden /><ProofRun hidden /><ProofRun hidden /></div></div>
      </div>
    </div>
  );
}
