import React from "react";

// Bespoke, on-brand illustration per case — each accurately encodes the case's
// result/theme (license-safe, crisp at any size, no external assets). Sits behind
// the card title (scrim handled in CSS). Unknown slugs get a generic signal trace.

const C = { cyan: "#0DCFCF", cyl: "#6AE3E1", gold: "#F4B740", iris: "#A29BFE", line: "rgba(255,255,255,.07)" };

// audio-waveform envelope for the voice-agent case
const WAVE = [10, 18, 30, 22, 44, 60, 38, 72, 52, 88, 66, 96, 74, 58, 84, 46, 68, 34, 50, 24, 36, 16];

const VIZ: Record<string, React.ReactNode> = {
  // 40% lower CAC · demos ×3 → a falling cost chart
  "it-services-cac": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke={C.line} strokeWidth="1">
        <line x1="30" y1="62" x2="372" y2="62" /><line x1="30" y1="102" x2="372" y2="102" /><line x1="30" y1="142" x2="372" y2="142" />
      </g>
      {[[52, 60], [98, 78], [144, 96], [190, 112], [236, 128], [282, 140]].map(([x, top], i) => (
        <rect key={i} x={x} y={top} width="26" height={162 - top} rx="4"
          fill={C.cyan} fillOpacity={0.16 + i * 0.045} />
      ))}
      <path d="M65 74 L111 92 L157 108 L203 124 L249 138 L295 150" fill="none" stroke={C.cyl} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="295" cy="150" r="9" fill="none" stroke={C.gold} strokeOpacity=".45" strokeWidth="1.5" />
      <circle cx="295" cy="150" r="5" fill={C.gold} />
      <g>
        <rect x="276" y="30" width="94" height="27" rx="13.5" fill="rgba(13,207,207,.14)" stroke="rgba(13,207,207,.4)" />
        <text x="323" y="48" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="700" fill={C.cyl}>↓ 40% CAC</text>
      </g>
    </svg>
  ),

  // hiring signals into pipeline, in real time → signal dots streaming into a funnel
  jobfeeder: (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="40" cy="38" r="4" fill={C.gold}><animate attributeName="opacity" values="1;.3;1" dur="1.8s" repeatCount="indefinite" /></circle>
      <text x="52" y="42" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" letterSpacing="2" fill={C.cyl}>LIVE</text>
      <g fill="none" strokeWidth="1.5" strokeOpacity=".5">
        <path d="M64 92 C150 92 190 90 250 92" stroke={C.cyan} />
        <path d="M92 128 C168 128 210 98 250 95" stroke={C.cyl} />
        <path d="M132 112 C190 112 220 96 250 94" stroke={C.iris} />
        <path d="M56 146 C150 146 210 100 250 96" stroke={C.cyan} />
      </g>
      <g>
        <circle cx="60" cy="92" r="7" fill={C.cyan} fillOpacity=".9" />
        <circle cx="110" cy="78" r="5" fill={C.cyl} fillOpacity=".8" />
        <circle cx="88" cy="128" r="5" fill={C.iris} fillOpacity=".85" />
        <circle cx="132" cy="112" r="6" fill={C.cyan} fillOpacity=".85" />
        <circle cx="52" cy="146" r="4" fill={C.cyl} fillOpacity=".7" />
      </g>
      <path d="M250 74 L342 74 L306 112 L306 143 L286 143 L286 112 Z" fill="rgba(13,207,207,.12)" stroke={C.cyan} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="296" cy="156" r="4.5" fill={C.cyl} />
      <circle cx="296" cy="156" r="9" fill="none" stroke={C.cyl} strokeOpacity=".4" strokeWidth="1.3" />
    </svg>
  ),

  // voice agent that runs the call centre → live audio waveform
  "ava-ai-voice-agent": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="40" cy="38" r="4" fill={C.gold}><animate attributeName="opacity" values="1;.3;1" dur="1.4s" repeatCount="indefinite" /></circle>
      <text x="52" y="42" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" letterSpacing="2" fill={C.cyl}>LIVE CALL</text>
      <g>
        {WAVE.map((h, i) => {
          const x = 40 + i * 15.4;
          const peak = h > 82;
          return <rect key={i} x={x} y={118 - h / 2} width="7" height={h} rx="3.5"
            fill={peak ? C.gold : C.cyan} fillOpacity={peak ? 1 : 0.55 + (h / 200)} />;
        })}
      </g>
      <path d="M150 150 q6 10 18 10 h64 q12 0 18 -10" fill="none" stroke={C.cyl} strokeOpacity=".5" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),

  // AI agents that outperformed SDRs · pipeline velocity 3× → rising line vs flat baseline
  "b2b-saas-ai-sdr": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke={C.line} strokeWidth="1"><line x1="30" y1="72" x2="372" y2="72" /><line x1="30" y1="116" x2="372" y2="116" /><line x1="30" y1="160" x2="372" y2="160" /></g>
      <path d="M52 156 L118 154 L184 156 L250 155 L316 156" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" />
      <path d="M52 156 L118 132 L184 106 L250 78 L316 52" fill="none" stroke={C.cyan} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="316" cy="52" r="5.5" fill={C.gold} /><circle cx="316" cy="52" r="10" fill="none" stroke={C.gold} strokeOpacity=".4" strokeWidth="1.4" />
      <g><rect x="286" y="26" width="84" height="27" rx="13.5" fill="rgba(13,207,207,.14)" stroke="rgba(13,207,207,.4)" />
        <text x="328" y="44" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="700" fill={C.cyl}>3× faster</text></g>
    </svg>
  ),

  // hiring spikes turned into in-market accounts · +42% → spikes rising off a baseline
  "msp-hiring-spikes": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <line x1="24" y1="168" x2="376" y2="168" stroke={C.line} strokeWidth="1.2" />
      {[[60, 122], [104, 150], [150, 88], [196, 138], [242, 66], [288, 150], [330, 44]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1="168" x2={x} y2={y} stroke={i % 2 ? C.cyl : C.cyan} strokeWidth="3" strokeOpacity=".65" strokeLinecap="round" />
          <circle cx={x} cy={y} r={i === 6 ? 5 : 3} fill={i === 6 ? C.gold : C.cyl} />
        </g>
      ))}
      <g><rect x="292" y="16" width="80" height="26" rx="13" fill="rgba(13,207,207,.14)" stroke="rgba(13,207,207,.4)" />
        <text x="332" y="33.5" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="700" fill={C.cyl}>+42%</text></g>
    </svg>
  ),

  // one interface, every model → four model nodes converging into one hub
  onegpt: (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke={C.cyan} strokeWidth="1.5" strokeOpacity=".4" fill="none">
        <path d="M74 52 C 168 62 190 118 244 125" /><path d="M60 112 C 150 114 192 122 244 125" />
        <path d="M76 176 C 166 168 194 132 244 127" /><path d="M100 214 C 174 196 204 138 244 127" />
      </g>
      <circle cx="74" cy="52" r="7" fill={C.cyl} fillOpacity=".9" /><circle cx="60" cy="112" r="7" fill={C.iris} fillOpacity=".9" />
      <circle cx="76" cy="176" r="7" fill={C.cyan} fillOpacity=".9" /><circle cx="100" cy="214" r="6" fill={C.gold} fillOpacity=".9" />
      <circle cx="258" cy="126" r="22" fill="rgba(13,207,207,.14)" stroke={C.cyan} strokeWidth="1.6" />
      <circle cx="258" cy="126" r="7" fill={C.cyl} />
    </svg>
  ),

  // chatbot platform with a CRM brain → two chat bubbles
  connectchat: (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g>
        <rect x="56" y="58" width="150" height="50" rx="14" fill="rgba(13,207,207,.12)" stroke={C.cyan} strokeWidth="1.4" />
        <path d="M74 108 l0 18 l18 -18 z" fill="rgba(13,207,207,.12)" stroke={C.cyan} strokeWidth="1.4" />
        <line x1="76" y1="76" x2="182" y2="76" stroke={C.cyl} strokeWidth="3" strokeLinecap="round" strokeOpacity=".7" />
        <line x1="76" y1="90" x2="150" y2="90" stroke={C.cyl} strokeWidth="3" strokeLinecap="round" strokeOpacity=".4" />
      </g>
      <g>
        <rect x="196" y="132" width="150" height="50" rx="14" fill={C.cyan} fillOpacity=".85" />
        <path d="M328 182 l0 18 l-18 -18 z" fill={C.cyan} fillOpacity=".85" />
        <line x1="216" y1="150" x2="326" y2="150" stroke="#022726" strokeWidth="3" strokeLinecap="round" strokeOpacity=".55" />
        <line x1="216" y1="164" x2="292" y2="164" stroke="#022726" strokeWidth="3" strokeLinecap="round" strokeOpacity=".38" />
      </g>
      <circle cx="360" cy="58" r="4" fill={C.gold} />
    </svg>
  ),
};

const DEFAULT_VIZ = (
  <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <line x1="0" y1="130" x2="400" y2="130" stroke="rgba(13,207,207,.22)" strokeWidth="1" strokeDasharray="4 7" />
    <path d="M0 118 H200 L232 116 L258 66 L284 116 H400" fill="none" stroke={C.cyan} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
    <circle cx="258" cy="66" r="9" fill="none" stroke={C.gold} strokeOpacity=".4" strokeWidth="1.4" />
    <circle cx="258" cy="66" r="5" fill={C.gold} />
  </svg>
);

export default function CaseThumb({ slug }: { slug: string }) {
  return <div className="case-viz" aria-hidden="true">{VIZ[slug] ?? DEFAULT_VIZ}</div>;
}
