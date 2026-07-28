"use client";
import { useState } from "react";
import Image from "next/image";

// Newsletter subscribe. Variants share the same message; the layout and emphasis change.
// TODO: wire to HubSpot (FPG033 pattern — separate list). Currently a client-side demo.
export default function NLBlock({ variant = "band" }: { variant?: "card" | "band" | "feature" }) {
  const [done, setDone] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  // Big two-column subscribe card: identity + social proof (left), pitch + form (right).
  if (variant === "card") {
    // Decorative reviewer face photos (alt="") sitting next to the star rating.
    const REVIEWERS = ["/images/reviewer-1.webp", "/images/reviewer-2.webp", "/images/reviewer-3.webp"];
    return (
      <div className="nl-card reveal">
        <div className="nlc-left">
          <div className="nlc-head">
            <Image className="nlc-portrait" src="/images/ritesh-avatar.webp" alt="Ritesh Osta"
              width={80} height={80} sizes="80px" />
            <div className="nlc-headtext">
              <h2 className="nlc-title">Ritesh&rsquo;s Newsletter</h2>
            </div>
          </div>
          <p className="nlc-community">
            Join a growing community of 1,200+ founders, RevOps and GTM leaders.
          </p>
          <div className="nlc-proof">
            <span className="nlc-avatars">
              {REVIEWERS.map((src) => (
                <Image key={src} src={src} alt="" width={42} height={42} />
              ))}
            </span>
            <span className="nlc-proof-text">
              <span className="nlc-stars" aria-hidden="true">★★★★★</span>
              <b>5.0 · 55 reviews</b>
            </span>
          </div>
        </div>

        <div className="nlc-right">
          <p className="nlc-desc">
            Each week, I share one signal-led GTM play — the framework, the stack, and the
            automation behind it. Actionable systems for driving pipeline, not another pitch.
          </p>
          <form className="nlc-form" onSubmit={onSubmit}>
            <div className="nlc-field">
              <input type="email" required placeholder="Your Email" aria-label="Your email" />
            </div>
            <button className="btn btn-primary nlc-submit" type="submit">
              <span className="dot" />{done ? "Subscribed ✓" : "Subscribe"}
            </button>
            <p className="nlc-fine">
              By submitting this form, you&rsquo;ll be signed up to my free newsletter. You can opt out at any time.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Rich two-column feature: illustrative inbox preview (left) + the subscribe copy (right).
  // Same words as the band variant; only the presentation differs.
  if (variant === "feature") {
    return (
      <div className="nl-feature reveal">
        <div className="nlf-visual" aria-hidden="true">
          <div className="nlf-phone">
            <span className="nlf-island" />
            <div className="nlf-screen">
              <div className="nlf-status">
                <span className="nlf-time">9:41</span>
                <span className="nlf-sysic">
                  <svg viewBox="0 0 18 12" width="18" height="12"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2.5" width="3" height="9.5" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" opacity=".35" /></svg>
                  <svg viewBox="0 0 16 12" width="16" height="12"><path d="M8 11.2 1 4.2a9.9 9.9 0 0 1 14 0L8 11.2Z" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".9" /></svg>
                  <svg viewBox="0 0 26 12" width="26" height="12"><rect x="0.6" y="0.6" width="21" height="10.8" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.1" opacity=".55" /><rect x="2.2" y="2.2" width="16" height="7.6" rx="1.4" /><rect x="23" y="4" width="2" height="4" rx="1" opacity=".55" /></svg>
                </span>
              </div>

              <div className="nlf-mail">
                <div className="nlf-mailbar">
                  <span className="nlf-back">‹ Inbox</span>
                  <span className="nlf-acts">
                    <svg viewBox="0 0 24 24" width="15" height="15"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" /></svg>
                    <svg viewBox="0 0 24 24" width="15" height="15"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M12 3v13M7 8l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>

                <h4 className="nlf-subject">This week&rsquo;s signal-led play</h4>

                <div className="nlf-sender">
                  <span className="nlf-avatar">R</span>
                  <span className="nlf-from">
                    <b>Ritesh&rsquo;s Newsletter</b>
                    <span>insights@insightstap.com · 9:41 AM</span>
                  </span>
                  <span className="nlf-min">4 min</span>
                </div>

                <div className="nlf-banner">
                  <span>One play. Every week.</span>
                </div>

                <p className="nlf-preview">
                  The framework, the stack, and the automation behind one signal-led GTM play — decoded end to end, so your team can ship it.
                </p>

                <div className="nlf-tags"><span>#signal-led</span><span>#RevOps</span><span>#automation</span></div>

                <div className="nlf-chart">
                  <div className="nlf-chart-head">
                    <span>Weekly momentum</span>
                    <svg viewBox="0 0 24 24" width="14" height="14"><path d="M3 17l6-6 4 4 8-8M15 7h6v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="nlf-bars">
                    {[38, 52, 46, 64, 58, 78, 92].map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="nlf-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                </div>

                <div className="nlf-mailfoot">
                  <span className="nlf-fa">
                    <svg viewBox="0 0 24 24" width="15" height="15"><path d="M12 21s-7.5-4.6-10-9.2C.4 8.6 2 5 5.4 5c2 0 3.3 1.1 4.1 2.3C10.3 6.1 11.6 5 13.6 5 17 5 18.6 8.6 17 11.8 14.5 16.4 12 21 12 21Z" /></svg>
                    1.2k
                  </span>
                  <span className="nlf-fa">
                    <svg viewBox="0 0 24 24" width="15" height="15"><path d="M8.5 13.5 15 17M15 7 8.5 10.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="18" cy="5.5" r="2.6" /><circle cx="5.5" cy="12" r="2.6" /><circle cx="18" cy="18.5" r="2.6" /></svg>
                    Share
                  </span>
                  <span className="nlf-fa nlf-fa-end">
                    <svg viewBox="0 0 24 24" width="15" height="15"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
                  </span>
                </div>

                <button className="nlf-issue" type="button" tabIndex={-1}>Read this issue <span className="arw">→</span></button>
              </div>
            </div>
          </div>

          <div className="nlf-card nlf-card-a">
            <span className="nlf-card-ic">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M3 17l6-6 4 4 8-8M15 7h6v6" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="nlf-card-t"><b>Weekly</b><span>signal-led plays</span></span>
          </div>

          <div className="nlf-card nlf-card-b">
            <span className="nlf-card-ic nlf-ic-gold">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="m12 2 2.9 6.2 6.6.7-4.9 4.5 1.4 6.6L12 17.8 5.9 21l1.4-6.6L2.4 8.9l6.6-.7L12 2Z" /></svg>
            </span>
            <span className="nlf-card-t"><b>5.0<span className="nlf-star">★</span></b><span>55 reviews</span></span>
          </div>

          <div className="nlf-card nlf-card-c">
            <span className="nlf-card-ic">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 3a4 4 0 0 0-4 4 3.5 3.5 0 0 0-2 6.3A3.5 3.5 0 0 0 9 20a3 3 0 0 0 3-1V3ZM12 3a4 4 0 0 1 4 4 3.5 3.5 0 0 1 2 6.3A3.5 3.5 0 0 1 15 20a3 3 0 0 1-3-1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            </span>
            <span className="nlf-card-t"><b>AI &amp; GTM</b><span>focused insights</span></span>
          </div>
        </div>

        <div className="nlf-content">
          <h3>Ritesh&rsquo;s <span className="nlf-grad">Newsletter</span></h3>
          <p>
            Join founders, RevOps and GTM leaders who read one signal-led play every week. No pitch. Unsubscribe any time.
          </p>
          <div className="social-proof">
            <span className="badge b-star">★ 5.0 from 55 reviews</span>
          </div>
          <form className="nl-form" onSubmit={onSubmit}>
            <input className="field" type="email" required placeholder="Work email" aria-label="Work email" style={{ minWidth: 0 }} />
            <button className="btn btn-primary" type="submit"><span className="dot" />{done ? "Subscribed ✓" : "Subscribe"}</button>
          </form>
          <p className="microcopy">The destination for every social bio link.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="nl-band reveal">
      <div className="nl-band-grid">
        <div className="nl-band-copy">
          <h3>Ritesh&rsquo;s <span className="nl-hl">Newsletter</span></h3>
          <p>
            Join founders, RevOps and GTM leaders who read one signal-led play every week. No pitch. Unsubscribe any time.
          </p>
          <div className="social-proof">
            <span className="badge b-star">★ 5.0 from 55 reviews</span>
            <span className="nl-proof-note">Read every week by 1,200+ GTM leaders.</span>
          </div>
        </div>
        <div className="nl-band-action">
          <span className="nl-action-label">Get the weekly play</span>
          <form className="nl-form" onSubmit={onSubmit}>
            <input className="field" type="email" required placeholder="Work email" aria-label="Work email" style={{ minWidth: 0 }} />
            <button className="btn btn-primary" type="submit"><span className="dot" />{done ? "Subscribed ✓" : "Subscribe"}</button>
          </form>
          <p className="microcopy">One email a week. Unsubscribe in one click.</p>
        </div>
      </div>
    </div>
  );
}
