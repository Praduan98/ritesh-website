// Per-framework schematics. Self-contained styling (the .schematic/.node-svg/.legend
// utility classes are not part of globals.css, so wrapper/svg/legend styles live here).
// Colours come from tokens so they invert on the dark .section.feature band.
import type { CSSProperties } from "react";

const WRAP: CSSProperties = {
  background: "var(--surface-grad)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)",
  padding: "clamp(28px,3.5vw,48px) var(--s6)", position: "relative", boxShadow: "var(--shadow)", overflowX: "auto",
};
const SVG: CSSProperties = { display: "block", width: "100%", minWidth: 720, height: "auto", overflow: "visible" };
const LEGEND: CSSProperties = {
  display: "flex", flexWrap: "wrap", gap: "8px 20px", marginTop: "var(--s5)",
  fontSize: ".85rem", color: "var(--muted)", fontFamily: "var(--font-ui)",
};
const ITEM: CSSProperties = { display: "inline-flex", alignItems: "center", gap: ".5em" };

function Legend({ items }: { items: { c: string; t: string }[] }) {
  return (
    <div style={LEGEND}>
      {items.map((x, i) => (
        <span key={i} style={ITEM}>
          <i style={{ width: 12, height: 12, borderRadius: "50%", background: x.c, flex: "none", display: "inline-block" }} />
          {x.t}
        </span>
      ))}
    </div>
  );
}

function Glow() {
  return (
    <defs>
      <filter id="fdglow" x="-8%" y="-60%" width="116%" height="220%">
        <feGaussianBlur stdDeviation="2.4" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
  );
}

const LBL = { fontFamily: "var(--font-mono)", fontWeight: 700 } as const;

/* ---------- DARK — the detection loop ---------- */
export function DarkLoop() {
  const nodes = [
    { x: 150, L: "D", t: "DETECT", gold: true },
    { x: 400, L: "A", t: "AUGMENT" },
    { x: 650, L: "R", t: "REACH" },
    { x: 850, L: "K", t: "KAIZEN" },
  ];
  return (
    <div className="reveal" style={WRAP}>
      <svg style={SVG} viewBox="0 0 1000 230" role="img"
        aria-label="The DARK loop: Detect, Augment, Reach, Kaizen — Kaizen feeds back into Detect. Detect is the ignition point.">
        <Glow />
        {/* kaizen return arc */}
        <path d="M850 96 C 850 26, 150 26, 150 96" fill="none" style={{ stroke: "var(--iris)" }}
          strokeWidth="1.6" strokeDasharray="5 6" opacity="0.75" />
        <path d="M150 96 l-7 -12 M150 96 l9 -9" fill="none" style={{ stroke: "var(--iris)" }} strokeWidth="1.6" />
        <text x="500" y="24" textAnchor="middle" fontSize="12" letterSpacing="2" style={{ ...LBL, fill: "var(--iris)" }}>KAIZEN · COMPOUNDS EACH CYCLE</text>
        {/* main line */}
        <path className="trace-draw" d="M120 118 H880" fill="none" style={{ stroke: "var(--trace)" }}
          strokeWidth="2.5" filter="url(#fdglow)" />
        {nodes.map((n) => (
          <g key={n.L}>
            <text x={n.x} y="80" textAnchor="middle" fontSize="34" fontWeight="800" style={{ fontFamily: "var(--font-display)", fill: "var(--ink)" }}>{n.L}</text>
            {n.gold
              ? <circle cx={n.x} cy="118" r="11" fill="#F4B740" />
              : <circle cx={n.x} cy="118" r="8" style={{ fill: "var(--canvas)", stroke: "var(--trace)" }} strokeWidth="2.5" />}
            <text x={n.x} y="162" textAnchor="middle" fontSize="12.5" letterSpacing="1.5" style={{ ...LBL, fill: "var(--muted)" }}>{n.t}</text>
          </g>
        ))}
      </svg>
      <Legend items={[
        { c: "#F4B740", t: "detection — demand seen before the form fill" },
        { c: "var(--iris)", t: "Kaizen loop — each cycle compounds pipeline efficiency" },
      ]} />
    </div>
  );
}

/* ---------- S.I.G.N.A.L.S — seven-step signal chain ---------- */
export function SignalsChain() {
  const steps = [
    { L: "S", t: "SPOT" }, { L: "I", t: "INTEGRATE" }, { L: "G", t: "GENERATE", gold: true },
    { L: "N", t: "NURTURE" }, { L: "A", t: "AUTOMATE" }, { L: "L", t: "LEARN" }, { L: "S", t: "SCALE" },
  ];
  const x0 = 80, x1 = 920, step = (x1 - x0) / (steps.length - 1);
  return (
    <div className="reveal" style={WRAP}>
      <svg style={SVG} viewBox="0 0 1000 170" role="img"
        aria-label="The S.I.G.N.A.L.S chain: Spot, Integrate, Generate, Nurture, Automate, Learn, Scale. Generate is the ignition node.">
        <Glow />
        <path className="trace-draw" d={`M${x0} 92 H${x1}`} fill="none" style={{ stroke: "var(--trace)" }} strokeWidth="2.5" filter="url(#fdglow)" />
        {steps.map((s, i) => {
          const x = x0 + i * step;
          return (
            <g key={i}>
              <text x={x} y="56" textAnchor="middle" fontSize="26" fontWeight="800" style={{ fontFamily: "var(--font-display)", fill: "var(--ink)" }}>{s.L}</text>
              {s.gold
                ? <circle cx={x} cy="92" r="10" fill="#F4B740" />
                : <circle cx={x} cy="92" r="7" style={{ fill: "var(--canvas)", stroke: "var(--trace)" }} strokeWidth="2.5" />}
              <text x={x} y="132" textAnchor="middle" fontSize="11" letterSpacing="1" style={{ ...LBL, fill: "var(--muted)" }}>{s.t}</text>
            </g>
          );
        })}
      </svg>
      <Legend items={[
        { c: "var(--trace)", t: "a detected signal moving down the line" },
        { c: "#F4B740", t: "Generate — where a signal becomes a message worth answering" },
      ]} />
    </div>
  );
}

/* ---------- The 3 GTM Engines — three owners, one pipeline ---------- */
export function ThreeEngines() {
  const rows = [
    { y: 46, t: "SIGNAL", who: "RevOps" },
    { y: 115, t: "PERSONALISATION", who: "Marketing ops" },
    { y: 184, t: "ACTIVATION", who: "Sales ops" },
  ];
  return (
    <div className="reveal" style={WRAP}>
      <svg style={SVG} viewBox="0 0 1000 230" role="img"
        aria-label="Three engines — Signal, Personalisation, Activation — converge into one pipeline output.">
        <Glow />
        {rows.map((r, i) => (
          <g key={i}>
            <path className="trace-draw" d={`M110 ${r.y} C 520 ${r.y}, 560 115, 800 115`} fill="none"
              style={{ stroke: "var(--iris)" }} strokeWidth="2.5" filter="url(#fdglow)" />
            <circle cx="110" cy={r.y} r="7" style={{ fill: "var(--canvas)", stroke: "var(--iris)" }} strokeWidth="2.5" />
            <text x="130" y={r.y - 12} fontSize="13" letterSpacing="1.5" style={{ ...LBL, fill: "var(--ink)" }}>{r.t}</text>
            <text x="130" y={r.y + 20} fontSize="11" letterSpacing=".5" style={{ fontFamily: "var(--font-ui)", fill: "var(--muted)" }}>{r.who}</text>
          </g>
        ))}
        {/* converged pipeline output */}
        <path d="M800 115 H900" fill="none" style={{ stroke: "var(--trace)" }} strokeWidth="2.5" filter="url(#fdglow)" />
        <circle cx="910" cy="115" r="11" fill="#F4B740" />
        <text x="910" y="150" textAnchor="middle" fontSize="12" letterSpacing="1.5" style={{ ...LBL, fill: "var(--muted)" }}>PIPELINE</text>
      </svg>
      <Legend items={[
        { c: "var(--iris)", t: "one engine, one named owner, one stack" },
        { c: "#F4B740", t: "booked pipeline — the converged output" },
      ]} />
    </div>
  );
}
