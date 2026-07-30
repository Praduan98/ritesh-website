"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

/* ============================================================
   THE FIELD KIT — /playbooks lead-magnet rack.

   Replaces the old 2x2 grid of near-identical email forms. Three moves:
   1. Artifact-first — every playbook carries a cover: a sourced photo, a
      brand-hue scrim, and its own framework's motif stamped on top as an
      emblem (the /courses .cc-banner pattern), so a PDF reads as an object
      rather than a form. Photo credits live in scripts/encode-playbook-covers.mjs.
   2. The gate is an interaction, not the resting state. At rest a card
      shows what's inside; the email row only unfurls on request.
   3. One kit unlock. Clearing the bar at the top drops every individual
      gate at once, so nobody types their address three times.
   Cover art lives here (JSX can't cross the server/client boundary);
   the copy stays in app/playbooks/page.tsx and arrives as plain props.
   ============================================================ */

export type Playbook = {
  id: string;
  layer: string;      // mono chip — where it sits in the system
  title: string;
  body: string;
  inside: string[];   // "what's inside" — grounded in the real frameworks
  spec: string[];     // mono spec row, publication-style
  gated: boolean;
  img: string;        // cover photo under the scrim (decorative — see alt="" below)
  cover: CoverKey;
  hue: "cyan" | "teal" | "gold" | "iris";
  wide: boolean;      // spans 7 of 12 and lays out horizontally on desktop
};

type CoverKey = "loop" | "steps" | "checklist" | "matrix";

/* ---------- cover art ----------
   Each drawn on the card's own deep panel, inheriting --pb-a (accent)
   from the .pb-<hue> theme class so the four covers stay a family. */
const COVERS: Record<CoverKey, ReactNode> = {
  // DARK Loop — the four-stage orbit, one node lit.
  loop: (
    <svg viewBox="0 0 260 170" aria-hidden="true">
      <circle cx="130" cy="82" r="54" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
      <circle className="pb-orbit" cx="130" cy="82" r="54" fill="none" stroke="var(--pb-a)"
        strokeWidth="2.2" strokeLinecap="round" strokeDasharray="58 27" opacity=".9" />
      {([["D", 130, 28], ["A", 184, 82], ["R", 130, 136], ["K", 76, 82]] as const).map(([l, x, y], i) => (
        <g key={l} className="pb-node" style={{ "--d": `${i * 0.12}s` } as React.CSSProperties}>
          <circle cx={x} cy={y} r="15.5" fill="var(--pb-deep2)" stroke="var(--pb-a)" strokeWidth="1.6" />
          <text x={x} y={y} dy=".36em" textAnchor="middle" className="pb-glyph">{l}</text>
        </g>
      ))}
      <circle cx="130" cy="82" r="4" fill="var(--pb-a)" opacity=".55" />
    </svg>
  ),

  // S.I.G.N.A.L.S — seven plotted steps climbing a trace, "Generate" lit gold.
  steps: (
    <svg viewBox="0 0 260 170" aria-hidden="true">
      <line x1="26" y1="128" x2="234" y2="128" stroke="var(--pb-a)" strokeWidth="1" opacity=".22" />
      <polyline className="pb-trace" fill="none" stroke="var(--pb-a)" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" opacity=".7"
        points="38,110 70,100 102,86 134,92 166,72 198,56 230,36" />
      {[110, 100, 86, 92, 72, 56, 36].map((y, i) => (
        <g key={i} className="pb-node" style={{ "--d": `${i * 0.07}s` } as React.CSSProperties}>
          <circle cx={38 + i * 32} cy={y} r={i === 2 ? 7 : 5.6}
            fill={i === 2 ? "var(--pb-hot)" : "var(--pb-deep2)"}
            stroke={i === 2 ? "var(--pb-hot)" : "var(--pb-a)"} strokeWidth="1.8" />
        </g>
      ))}
      {["S", "I", "G", "N", "A", "L", "S"].map((l, i) => (
        <text key={i} x={38 + i * 32} y="148" textAnchor="middle"
          className={`pb-glyph pb-sm${i === 2 ? " pb-hotglyph" : ""}`}>{l}</text>
      ))}
    </svg>
  ),

  // 40+ Buyer Signals — a tally of ticks. Hairline rules, never filled bars:
  // a filled bar at partial opacity reads as a loading skeleton, not a checklist.
  checklist: (
    <svg viewBox="0 0 260 170" aria-hidden="true">
      <text x="232" y="52" textAnchor="end" className="pb-numeral">40+</text>
      {[0, 1, 2, 3].map((i) => {
        const y = 66 + i * 24, done = i < 2;
        return (
          <g key={i} className="pb-row" style={{ "--d": `${0.1 + i * 0.09}s` } as React.CSSProperties}>
            <rect x="34" y={y} width="15" height="15" rx="4" fill="none"
              stroke={done ? "var(--pb-hot)" : "var(--pb-a)"} strokeWidth="1.8"
              opacity={done ? 1 : 0.5} />
            {done && (
              <path d={`M37.6 ${y + 7.6} l3.2 3.2 5.8-6.4`} fill="none" stroke="var(--pb-hot)"
                strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
            )}
            <line x1="60" y1={y + 7.5} x2={done ? 196 - i * 22 : 150} y2={y + 7.5}
              stroke="var(--pb-a)" strokeWidth="1.6" strokeLinecap="round"
              opacity={done ? 0.5 : 0.26} />
          </g>
        );
      })}
    </svg>
  ),

  // GTM Stack Audit — a coverage matrix: outlined cells, one gold gap, one hole.
  matrix: (
    <svg viewBox="0 0 260 170" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 4, row = (i / 4) | 0;
        const x = 47 + col * 44, y = 44 + row * 30;
        const gap = i === 6, hole = i === 9;
        return (
          <g key={i} className="pb-cell" style={{ "--d": `${i * 0.035}s` } as React.CSSProperties}>
            <rect x={x} y={y} width="34" height="21" rx="6"
              fill={gap ? "var(--pb-hot)" : "none"}
              stroke={gap ? "var(--pb-hot)" : "var(--pb-a)"} strokeWidth="1.7"
              strokeDasharray={hole ? "4 3.5" : undefined}
              opacity={gap ? 1 : hole ? 0.9 : 0.6} />
            {hole && (
              <path d={`M${x + 12.5} ${y + 7.5} l9 6 M${x + 21.5} ${y + 7.5} l-9 6`} stroke="var(--pb-a)"
                strokeWidth="1.7" strokeLinecap="round" opacity=".9" />
            )}
          </g>
        );
      })}
    </svg>
  ),
};

const arrow = <span className="arw" aria-hidden="true">→</span>;

/* ---------- one card ---------- */
function Card({ pb, kitOpen }: { pb: Playbook; kitOpen: boolean }) {
  const [asking, setAsking] = useState(false);   // gate expanded?
  const [sent, setSent] = useState(false);       // this card claimed?
  const inputRef = useRef<HTMLInputElement>(null);
  const formId = useId();

  // Opening the gate should land the caret in the field, not leave it on the button.
  useEffect(() => { if (asking) inputRef.current?.focus(); }, [asking]);

  const claimed = sent || (pb.gated && kitOpen);

  return (
    <article className={`pbk-card pb-${pb.hue}${pb.wide ? " is-wide" : ""}${claimed ? " is-open" : ""}`}>
      {/* layered cover: photo (z0) -> brand scrim (z1) -> motif emblem (z2) -> spine/tag (z3) */}
      <div className="pbk-cover">
        {/* decorative: the title and contents carry the meaning, so alt="" —
            same call as the /courses .cc-img banner */}
        <Image className="pbk-photo" src={pb.img} alt="" fill quality={80}
          sizes="(max-width:899px) 100vw, (max-width:1200px) 50vw, 620px" />
        <span className="pbk-scrim" aria-hidden="true" />
        <span className="pbk-emblem" aria-hidden="true">{COVERS[pb.cover]}</span>
        <span className="pbk-spine" aria-hidden="true" />
        {!pb.gated && <span className="pbk-freetag">No email</span>}
      </div>

      <div className="pbk-body">
        <h3 className="pbk-title">{pb.title}</h3>
        <p className="pbk-desc">{pb.body}</p>

        <ul className="pbk-inside">
          {pb.inside.map((line) => (
            <li key={line}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.4 8.6l3 3 6.2-7.2" /></svg>
              {line}
            </li>
          ))}
        </ul>

        <div className="pbk-foot">
          <p className="pbk-spec">{pb.spec.map((s, i) => <span key={s}>{i > 0 && <i>·</i>}{s}</span>)}</p>

          <div className="pbk-act">
            {claimed ? (
              <p className="pbk-done" role="status">
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.4 8.6l3 3 6.2-7.2" /></svg>
                {sent ? "Check your inbox" : "Unlocked with the kit"}
              </p>
            ) : !pb.gated ? (
              /* Ungated, but the PDF genuinely isn't built yet (Annex B / WeasyPrint).
                 Rendered as an explicit "pending" affordance rather than a faded
                 primary button, which read as broken. */
              <p className="pbk-pending">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" /><path d="M8 5v3.3l2.1 1.4" />
                </svg>
                Ships at launch — free, no email
              </p>
            ) : (
              <>
                <button type="button" className="pbk-get" suppressHydrationWarning
                  aria-expanded={asking} aria-controls={formId}
                  onClick={() => setAsking((v) => !v)}>
                  {asking ? "Close" : <>Get the playbook {arrow}</>}
                </button>

                <div className={`pbk-gate${asking ? " is-on" : ""}`} id={formId}>
                  <div className="pbk-gate-in">
                    <form className="pbk-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                      <input ref={inputRef} className="field" type="email" required suppressHydrationWarning
                        placeholder="Work email" aria-label={`Work email for ${pb.title}`} />
                      <button className="btn btn-primary" type="submit" suppressHydrationWarning>Send it</button>
                    </form>
                    <p className="pbk-fine">One email with the PDF. No sequence, no pitch.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- the rack ---------- */
export default function PlaybookKit({ items }: { items: Playbook[] }) {
  const [kitOpen, setKitOpen] = useState(false);
  const gatedCount = items.filter((p) => p.gated).length;

  return (
    <div className="pbk">
      {/* Kit-wide unlock: clears every gate below in one go. */}
      <div className={`pbk-bar reveal${kitOpen ? " is-open" : ""}`}>
        <div className="pbk-bar-copy">
          <span className="label">The whole kit</span>
          <p>
            {kitOpen
              ? "Kit unlocked — every playbook below is yours."
              : `Take all ${items.length} at once. One email, ${gatedCount} gated PDFs plus the free checklist.`}
          </p>
        </div>
        {kitOpen ? (
          <p className="pbk-bar-done" role="status">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.4 8.6l3 3 6.2-7.2" /></svg>
            On its way
          </p>
        ) : (
          <form className="pbk-bar-form" onSubmit={(e) => { e.preventDefault(); setKitOpen(true); }}>
            <input className="field" type="email" required suppressHydrationWarning
              placeholder="Work email" aria-label="Work email — unlock the whole kit" />
            <button className="btn btn-primary" type="submit" suppressHydrationWarning>
              Unlock the kit {arrow}
            </button>
          </form>
        )}
      </div>

      <div className="pbk-grid">
        {items.map((pb, i) => (
          <div key={pb.id} className={`pbk-item ${pb.wide ? "sp7" : "sp5"} reveal`}
            style={{ transitionDelay: `${i * 70}ms` }}>
            <Card pb={pb} kitOpen={kitOpen} />
          </div>
        ))}
      </div>
    </div>
  );
}
