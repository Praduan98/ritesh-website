"use client";
import { useState } from "react";

// Compact newsletter form for the /blog dark hero — underline email field with the
// Subscribe button beneath it (matches the reference hero). Client-side demo only.
// TODO: wire to HubSpot alongside the other NLBlock forms.
export default function InlineSubscribe() {
  const [done, setDone] = useState(false);
  return (
    <form className="blog-sub" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input
        className="blog-sub-input"
        type="email"
        required
        placeholder="Your Email"
        aria-label="Your email"
        suppressHydrationWarning
      />
      <button className="btn btn-primary" type="submit" suppressHydrationWarning>
        <span className="dot" />{done ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
