import Image from "next/image";

export default function PhotoFrame({
  src, alt, tag, priority = false, objectPosition = "center 20%", dark = false, ratio = "4/5", sizes = "(max-width:920px) 90vw, 440px",
}: {
  src: string; alt: string; tag?: string; priority?: boolean;
  objectPosition?: string; dark?: boolean; ratio?: string; sizes?: string;
}) {
  return (
    <div className="photo-wrap">
      <div className="halo" aria-hidden="true" />
      {/* brand blob shapes + dashed doodle (collage energy behind the portrait) */}
      <div className="blob blob-gold" aria-hidden="true" />
      <div className="blob blob-cyan" aria-hidden="true" />
      <div className="blob blob-iris" aria-hidden="true" />
      <svg className="doodle" viewBox="0 0 140 90" aria-hidden="true">
        <path d="M6 78 C28 40 66 18 128 12" fill="none" stroke="var(--teal)" strokeWidth="2"
          strokeDasharray="2 8" strokeLinecap="round" />
        <path d="M118 6 L131 12 L120 21" fill="none" stroke="var(--teal)" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="rings" aria-hidden="true">
        <svg viewBox="0 0 180 180" width="180" height="180">
          <g fill="none" stroke="var(--trace-soft)" strokeWidth="1.4">
            <circle cx="90" cy="90" r="34" /><circle cx="90" cy="90" r="60" /><circle cx="90" cy="90" r="86" />
          </g>
          <circle cx="90" cy="90" r="4" fill="var(--gold)" />
        </svg>
      </div>
      <div className={`photo-frame${dark ? " dark" : ""}`} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill priority={priority} quality={92} sizes={sizes} style={{ objectPosition }} />
        <div className="grad-edge" aria-hidden="true" />
        <svg className="accent-line" viewBox="0 0 400 22" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="14" x2="400" y2="14" stroke="rgba(240,245,250,.35)" strokeWidth="1" />
          <path d="M0 14 H250 L280 14 L300 5 L320 14 H400" fill="none" stroke="var(--cyan)" strokeWidth="1.6" />
          <circle cx="300" cy="5" r="3.4" fill="var(--amber)" />
        </svg>
        {tag && <span className="photo-tag"><i />{tag}</span>}
      </div>
    </div>
  );
}
