"use client";
import { useState } from "react";

// Standalone subscribe form for /newsletter (RO-PG011).
// TODO: wire to HubSpot form (FPG033 pattern — separate newsletter list). Currently a client-side demo.
export default function SubscribeForm() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  return (
    <div style={{ maxWidth: 580, marginInline: "auto" }}>
      <form className="nl-form" onSubmit={onSubmit} style={{ marginInline: "auto", justifyContent: "center" }}>
        <input className="field" type="email" required placeholder="Work email" aria-label="Work email" suppressHydrationWarning />
        <button className="btn btn-primary" type="submit" suppressHydrationWarning><span className="dot" />{done ? "Subscribed ✓" : "Subscribe"}</button>
      </form>
      <p className="microcopy" style={{ textAlign: "center" }}>No pitch. Unsubscribe any time.</p>
    </div>
  );
}
