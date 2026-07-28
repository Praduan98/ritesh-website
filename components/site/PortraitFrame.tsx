// Placeholder "operator" portrait frame — swap for the cut-out transparent PNG (Annex B) later.
export default function PortraitFrame({ tag = "The Operator", ratio = "3/4" }: { tag?: string; ratio?: string }) {
  return (
    <div className="op-frame" style={{ aspectRatio: ratio }} aria-hidden="true">
      <svg viewBox="0 0 240 320" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="pgrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" style={{ stroke: "var(--grid)" }} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="240" height="320" fill="url(#pgrid)" />
        <circle cx="120" cy="118" r="52" fill="none" style={{ stroke: "var(--hairline-2)" }} strokeWidth="1.2" />
        <path d="M52 300 c0-60 30-92 68-92 s68 32 68 92" fill="none" style={{ stroke: "var(--hairline-2)" }} strokeWidth="1.2" />
      </svg>
      <span className="op-tag"><i />{tag}</span>
    </div>
  );
}
