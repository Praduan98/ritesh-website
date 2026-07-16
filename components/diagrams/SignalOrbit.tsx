"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// "Signal Orbit" — the frameworks as a radial system map. Three orbit rings
// around a signal core; each framework is a node drifting on its own ring.
// Selecting a node (click or keyboard focus) loads its detail panel.
// Chosen from the 4-variant design exploration (framework-design-options.html).

type LayerKey = "dark" | "signals" | "engines";

const DATA: Record<LayerKey, {
  num: string; role: string; chip: string; name: string; tag: string;
  label: string; href: string; link: string;
  items?: [string, string, boolean?][]; engines?: string[];
}> = {
  dark: {
    num: "01", role: "Vision", chip: "orb-chip-1", name: "DARK Funnel",
    tag: "Where demand actually lives. The vision layer — what executives buy into.",
    label: "The letters", href: "/frameworks/dark-funnel", link: "Explore the DARK Funnel",
    items: [["D", "Detect"], ["A", "Augment"], ["R", "Reach"], ["K", "Kaizen"]],
  },
  signals: {
    num: "02", role: "Execution", chip: "orb-chip-2", name: "S.I.G.N.A.L.S",
    tag: "How demand becomes revenue. The execution playbook.",
    label: "The letters", href: "/frameworks/signals-playbook", link: "Explore the S.I.G.N.A.L.S playbook",
    items: [["S", "Spot"], ["I", "Integrate"], ["G", "Generate", true], ["N", "Nurture"], ["A", "Automate"], ["L", "Learn"], ["S", "Scale"]],
  },
  engines: {
    num: "03", role: "Ownership", chip: "orb-chip-3", name: "The 3 GTM Engines",
    tag: "Who owns what. Signal, Personalisation, Activation — each with a named owner and a defined stack.",
    label: "The three engines", href: "/frameworks/gtm-engines", link: "Explore the 3 GTM Engines",
    engines: ["Signal", "Personalisation", "Activation"],
  },
};

const NODES: { key: LayerKey; num: string; name: string; short: string; dot: string; hue: string; a0: string; r: string; dur: string; dir?: number }[] = [
  { key: "dark", num: "01", name: "DARK Funnel", short: "DARK", dot: "orb-nd-1", hue: "orb-hue-1", a0: "-30deg", r: "19.5%", dur: "80s" },
  { key: "signals", num: "02", name: "S.I.G.N.A.L.S", short: "SIGNALS", dot: "orb-nd-2", hue: "orb-hue-2", a0: "130deg", r: "29.5%", dur: "120s", dir: -1 },
  { key: "engines", num: "03", name: "3 GTM Engines", short: "ENGINES", dot: "orb-nd-3", hue: "orb-hue-3", a0: "235deg", r: "39.5%", dur: "160s" },
];

// Per-layer hue fed to the detail panel (drives its blob, rule and link tint).
const HUES: Record<LayerKey, string> = { dark: "#0DCFCF", signals: "#009C9B", engines: "#6C5CE7" };

export default function SignalOrbit() {
  const [active, setActive] = useState<LayerKey>("dark");
  const [out, setOut] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const select = (key: LayerKey) => {
    if (key === active) return;
    if (timer.current) clearTimeout(timer.current);
    setOut(true);
    timer.current = setTimeout(() => { setActive(key); setOut(false); }, 170);
  };
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const d = DATA[active];

  return (
    <div className="orbit reveal">
      <div className="orb-grid">
        <div className="orb-stage">
          <div className="orb-map" role="group"
            aria-label="Signal-led GTM operating model — three orbital layers. Select a layer to inspect it.">
            <svg className="orb-rings" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
              <defs>
                {/* multi-hue glow mesh: cyan core, violet lower-left, gold upper-right */}
                <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0DCFCF" stopOpacity=".16" />
                  <stop offset="55%" stopColor="#0DCFCF" stopOpacity=".06" />
                  <stop offset="100%" stopColor="#0DCFCF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="orb-glow-iris" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6C5CE7" stopOpacity=".14" />
                  <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="orb-glow-gold" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F4B740" stopOpacity=".14" />
                  <stop offset="100%" stopColor="#F4B740" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="300" cy="300" r="252" fill="url(#orb-glow)" />
              <circle cx="175" cy="430" r="150" fill="url(#orb-glow-iris)" />
              <circle cx="440" cy="130" r="120" fill="url(#orb-glow-gold)" />
              <circle className="orb-ring orb-ring-1" cx="300" cy="300" r="117" />
              <circle className="orb-ring orb-ring-2 orb-ring-dash" cx="300" cy="300" r="177" />
              <circle className="orb-ring orb-ring-3" cx="300" cy="300" r="237" />
              <g className="orb-ticks">
                <line x1="300" y1="58" x2="300" y2="68" /><line x1="300" y1="532" x2="300" y2="542" />
                <line x1="58" y1="300" x2="68" y2="300" /><line x1="532" y1="300" x2="542" y2="300" />
              </g>
              <g className="orb-ticks" transform="rotate(45 300 300)">
                <line x1="300" y1="58" x2="300" y2="68" /><line x1="300" y1="532" x2="300" y2="542" />
                <line x1="58" y1="300" x2="68" y2="300" /><line x1="532" y1="300" x2="542" y2="300" />
              </g>
              {/* satellites */}
              <circle className="orb-sat orb-sat-gold" cx="436" cy="106" r="4" fill="#F4B740" />
              <circle cx="186" cy="436" r="3.5" fill="#A29BFE" />
              <circle cx="415" cy="320" r="3" fill="#0DCFCF" />
              <circle cx="140" cy="205" r="3" fill="#0DCFCF" fillOpacity=".8" />
              <circle cx="475" cy="392" r="3" fill="#6C5CE7" fillOpacity=".7" />
            </svg>

            <div className="orb-sweep" aria-hidden="true" />

            <div className="orb-core" aria-hidden="true">
              <span className="orb-core-dot" />
              <span className="orb-core-kicker">Signal-led GTM</span>
              <span className="orb-core-label">the operating model</span>
            </div>

            {NODES.map((n) => (
              <div key={n.key} className="orb-orbiter"
                style={{ "--orb-a0": n.a0, "--orb-r": n.r, "--orb-dur": n.dur, ...(n.dir ? { "--orb-dir": n.dir } : {}) } as React.CSSProperties}>
                <button type="button" className={`orb-node ${n.hue}${active === n.key ? " orb-active" : ""}`}
                  aria-pressed={active === n.key}
                  aria-label={`Layer ${n.num}, ${n.name}`}
                  onClick={() => select(n.key)} onFocus={() => select(n.key)}>
                  <i className={`orb-nd ${n.dot}`} aria-hidden="true" />
                  <span className="orb-node-num">{n.num}</span>
                  <span className="orb-node-name">{n.name}</span>
                  <span className="orb-node-short">{n.short}</span>
                </button>
              </div>
            ))}
          </div>

          <ul className="orb-legend" aria-hidden="true">
            <li className="orb-lg-1"><i className="orb-nd orb-nd-1" />01 Vision</li>
            <li className="orb-lg-2"><i className="orb-nd orb-nd-2" />02 Execution</li>
            <li className="orb-lg-3"><i className="orb-nd orb-nd-3" />03 Ownership</li>
          </ul>
        </div>

        <aside className="orb-panel" style={{ "--orb-hue": HUES[active] } as React.CSSProperties}>
          <div className={`orb-panel-body${out ? " orb-out" : ""}`} aria-live="polite">
            <div className="orb-panel-top">
              <span className="orb-meter">LAYER {d.num} / 03</span>
              <span className={`orb-chip ${d.chip}`}>{d.role}</span>
            </div>
            <h3 className="orb-panel-title">{d.name}</h3>
            <p className="orb-panel-tag">{d.tag}</p>
            <div className="orb-hr" />
            <span className="orb-list-label">{d.label}</span>
            {d.items && (
              <ul className="orb-letters">
                {d.items.map(([lt, word, gold], i) => (
                  <li key={i} className={`orb-letter${gold ? " orb-gold" : ""}`}>
                    <span className="orb-lt">{lt}</span>
                    <span className="orb-lw">{word}{gold && <em className="orb-ign">ignition</em>}</span>
                  </li>
                ))}
              </ul>
            )}
            {d.engines && (
              <ul className="orb-engines">
                {d.engines.map((e) => (
                  <li key={e}><strong>{e}</strong><span>Named owner · Defined stack</span></li>
                ))}
              </ul>
            )}
            <Link className="orb-link" href={d.href}>{d.link} <span className="orb-arrow">→</span></Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
