"use client";
import { useState } from "react";

// Qualifying form for /work-with-me. Client-side demo state only.
// TODO: wire to HubSpot portal — separate personal-brand list (not the InsightsTap company list).

const SIZES = ["1–10", "11–50", "51–200", "200+"];
const ROUTES = ["Sprint", "Build", "Coaching", "Not sure yet"];

const labelStyle: React.CSSProperties = {
  fontSize: ".9rem",
  fontWeight: 600,
  color: "var(--ink-2)",
  display: "block",
  marginBottom: 8,
};

export default function QualifyForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="card reveal">
      {sent ? (
        <div style={{ textAlign: "center", paddingBlock: "clamp(24px,4vw,48px)" }}>
          <h3>Sent.</h3>
          <p style={{ marginTop: 10 }}>You will hear back within two working days.</p>
        </div>
      ) : (
        <>
          <form onSubmit={onSubmit} className="grid g2" style={{ gap: "var(--s4)" }}>
            <div>
              <label htmlFor="qf-name" style={labelStyle}>Name</label>
              <input id="qf-name" name="name" type="text" required className="field" style={{ width: "100%" }} />
            </div>
            <div>
              <label htmlFor="qf-email" style={labelStyle}>Work email</label>
              <input id="qf-email" name="email" type="email" required className="field" style={{ width: "100%" }} />
            </div>
            <div>
              <label htmlFor="qf-company" style={labelStyle}>Company</label>
              <input id="qf-company" name="company" type="text" required className="field" style={{ width: "100%" }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="qf-size" style={labelStyle}>Company size</label>
              <select id="qf-size" name="companySize" required defaultValue="" className="field" style={{ width: "100%" }}>
                <option value="" disabled>Select…</option>
                {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="qf-fix" style={labelStyle}>What are you trying to fix?</label>
              <textarea id="qf-fix" name="fix" required rows={5} className="field" style={{ width: "100%", resize: "vertical" }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="qf-route" style={labelStyle}>Which route interests you?</label>
              <select id="qf-route" name="route" required defaultValue="" className="field" style={{ width: "100%" }}>
                <option value="" disabled>Select…</option>
                {ROUTES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button type="submit" className="btn btn-primary"><span className="dot" />Send it</button>
            </div>
          </form>
          <p className="microcopy">I read every one of these myself. You will hear back within two working days.</p>
        </>
      )}
    </div>
  );
}
