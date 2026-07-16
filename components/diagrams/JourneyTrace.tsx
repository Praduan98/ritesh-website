// "Career trace" — the My Journey graphic (About M02).
// An instrument-panel reading of the narrative: four milestone nodes on a timeline
// spine, closing with the signature trigger-line resolving into the gold ignition
// peak at "today". Pure HTML/CSS + one SVG; the trace draws on scroll via the
// existing .reveal / .trace-draw machinery (RevealObserver arms --len).
const STEPS = [
  { n: "01", h: "Enterprise tech", p: "SAP & Oracle — nothing ships unless the system underneath is right." },
  { n: "02", h: "The insight", p: "B2B ran on opinion where enterprise IT ran on architecture." },
  { n: "03", h: "The frameworks", p: "Detect → enrich → score → act. The Funnel Experience™ Loop, then DARK." },
  { n: "04", h: "Today", p: "InsightsTap · JobFeeder · 100+ projects shipped, hands still on the keyboard.", now: true },
];

export default function JourneyTrace() {
  return (
    <div className="journey-viz reveal" aria-label="Career timeline: enterprise tech, the insight, the frameworks, today">
      <div className="jv-blob jv-blob-cyan" aria-hidden="true" />
      <div className="jv-blob jv-blob-gold" aria-hidden="true" />

      <div className="jv-panel">
        <div className="jv-head">
          <span className="label">Career trace · systems first</span>
          <span className="jv-sig" aria-hidden="true">signal: rising</span>
        </div>

        <ol className="jv-steps">
          {STEPS.map((s) => (
            <li key={s.n} className={`jv-step${s.now ? " jv-now" : ""}`}>
              <span className="jv-node" aria-hidden="true">{s.n}</span>
              <div className="jv-copy">
                <b>{s.h}</b>
                <span>{s.p}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* career signal — a rising trajectory closing on the gold "today" ignition */}
        <div className="jv-foot">
          <span className="jv-foot-label">Career signal</span>
          <div className="jv-bars" aria-hidden="true">
            <i style={{ height: "30%" }} /><i style={{ height: "44%" }} /><i style={{ height: "56%" }} />
            <i style={{ height: "70%" }} /><i style={{ height: "84%" }} /><i style={{ height: "100%" }} />
          </div>
          <span className="jv-foot-val">Rising&nbsp;<span className="jv-up" aria-hidden="true">↑</span></span>
        </div>
      </div>
    </div>
  );
}
