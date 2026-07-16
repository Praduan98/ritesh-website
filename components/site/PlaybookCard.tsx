"use client";
import { useState } from "react";

// Lead-magnet card for /playbooks. Gated cards collect an email (mini-form);
// the ungated checklist downloads directly — trust play, per the locked decision.
export default function PlaybookCard({
  kicker, title, body, gated,
}: { kicker: string; title: string; body: string; gated: boolean }) {
  const [done, setDone] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  return (
    <div className="card reveal" style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ marginTop: 12 }}>{title}</h3>
      <p>{body}</p>
      <div style={{ marginTop: "auto", paddingTop: "var(--s5)" }}>
        {gated ? (
          done ? (
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent-text)" }}>
              Check your inbox ✓
            </p>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", gap: "var(--s3)", flexWrap: "wrap" }}>
              <input className="field" type="email" required placeholder="Work email" aria-label="Work email" />
              <button className="btn btn-primary" type="submit"><span className="dot" />Get the playbook</button>
            </form>
          )
        ) : (
          /* TODO: swap for <a href="/playbooks/40-buyer-signals-checklist.pdf" download> once the PDF ships (Annex B, WeasyPrint pipeline) */
          <div>
            <button className="btn btn-primary" type="button" aria-disabled="true"
              style={{ opacity: 0.65, cursor: "default" }}>
              <span className="dot" />Download the checklist
            </button>
            <p className="mini" style={{ marginTop: 10 }}>PDF ships at launch — no email needed.</p>
          </div>
        )}
      </div>
    </div>
  );
}
