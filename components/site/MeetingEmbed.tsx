"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/* HubSpot Meetings embed with a calendar skeleton while it loads, and a
   redirect to /thank-you once a booking is confirmed. The HubSpot script
   turns the .meetings-iframe-container into an iframe on load; we watch for
   that iframe to swap out the skeleton, and listen for the booking postMessage. */

const MEETING_SRC = "https://insightstap.us/meetings/ritesh/web?embed=true";
const HS_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

export default function MeetingEmbed() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const box = boxRef.current;

    // Load (or re-run) the HubSpot embed script so it initialises the container.
    const script = document.createElement("script");
    script.src = HS_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    // Swap the skeleton out once the scheduler iframe has actually loaded.
    let observer: MutationObserver | undefined;
    if (box) {
      observer = new MutationObserver(() => {
        const iframe = box.querySelector("iframe");
        if (iframe) {
          observer?.disconnect();
          iframe.addEventListener("load", () => setLoaded(true), { once: true });
          // fallback in case the load event already fired / is cross-origin quiet
          window.setTimeout(() => setLoaded(true), 1600);
        }
      });
      observer.observe(box, { childList: true, subtree: true });
    }

    const slowTimer = window.setTimeout(() => setSlow(true), 6000);

    // HubSpot posts this when a meeting is successfully booked.
    const onMessage = (e: MessageEvent) => {
      if (e && e.data && e.data.meetingBookSucceeded) {
        router.push("/thank-you");
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      observer?.disconnect();
      window.removeEventListener("message", onMessage);
      window.clearTimeout(slowTimer);
      script.remove();
    };
  }, [router]);

  return (
    <div className={`mtg${loaded ? " is-loaded" : ""}`}>
      {!loaded && (
        <div className="mtg-skeleton" aria-hidden="true">
          <div className="mtg-sk-head">
            <span className="mtg-sk-bar" style={{ width: "54%" }} />
            <span className="mtg-sk-bar mtg-sk-bar-sm" style={{ width: "32%" }} />
          </div>
          <div className="mtg-sk-grid">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="mtg-sk-cell"
                style={{ animationDelay: `${(i % 7) * 70 + Math.floor(i / 7) * 55}ms` }} />
            ))}
          </div>
          <p className="mtg-sk-foot"><span className="mtg-spinner" /> Loading available times&hellip;</p>
        </div>
      )}

      <div ref={boxRef} className="meetings-iframe-container" data-src={MEETING_SRC} />

      {slow && !loaded && (
        <p className="mtg-fallback">
          Taking a moment?{" "}
          <a href="https://insightstap.us/meetings/ritesh/web" target="_blank" rel="noopener">
            Open the scheduler <span aria-hidden="true">↗</span>
          </a>
        </p>
      )}
    </div>
  );
}
