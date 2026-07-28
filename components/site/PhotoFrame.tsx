import Image from "next/image";

export default function PhotoFrame({
  src, alt, tag, priority = false, objectPosition = "center 20%", dark = false, ratio = "4/5", sizes = "(max-width:920px) 90vw, 440px", showFiverr = false,
}: {
  src: string; alt: string; tag?: string; priority?: boolean;
  objectPosition?: string; dark?: boolean; ratio?: string; sizes?: string; showFiverr?: boolean;
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
        {tag && <span className="photo-tag"><i />{tag}</span>}
      </div>

      {/* Floating Fiverr credential badges (homepage hero only) — genuine Top Rated Pro status */}
      {showFiverr && (
        <div className="pf-badges" aria-hidden="true">
          <span className="pf-badge pf-badge-logo">
            <span className="fv-f">f</span>
            <span className="fv-word">fiverr</span><i className="fv-dot" />
          </span>
          <span className="pf-badge pf-badge-pro">
            <span className="fv-f sm">f</span>
            <span>Fiverr&nbsp;<b>Pro</b></span>
          </span>
          <span className="pf-badge pf-badge-vetted">
            <svg className="fv-check" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" fill="#1DBF73" />
              <path d="M6.8 12.4l3.4 3.4L17 8.8" fill="none" stroke="#fff" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Vetted&nbsp;Pro</span>
          </span>
          <span className="pf-badge pf-badge-rating">
            <span className="fv-stars">★★★★★</span><b>5.0</b>
          </span>
        </div>
      )}
    </div>
  );
}
