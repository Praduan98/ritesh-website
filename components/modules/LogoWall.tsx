// Client logo set — greyscale at rest, full color on hover (reference style).
// Two layouts: "marquee" (auto-scrolling strip) and "grid" (static grid, e.g. the About page).
// Logos in /public/logos/<slug>.png are the brands' official marks pulled from Brandfetch.
// Woliba has no horizontal logo on Brandfetch (only its icon mark), so it renders as an
// icon + wordmark lockup using the real Woliba mark.
// [CONFIRM] client relationship + written logo-usage permission per mark before publish
// (Annex A, row 9). Several marks are carried from the reference strip and may not apply.
type Logo = { name: string; img?: string; mark?: string };

const LOGOS: Logo[] = [
  { name: "shootsta", img: "shootsta.png" },
  { name: "RB2B", img: "rb2b.png" },
  { name: "Apollo", img: "apollo.png" },
  { name: "AWS", img: "aws.png" },
  { name: "Woliba", mark: "woliba-mark.png" }, // icon + wordmark (Brandfetch has no full logo)
  { name: "Innofied", img: "innofied.png" },
  { name: "AllRide", img: "allride.png" },
];

function LogoMark({ l }: { l: Logo }) {
  if (l.img) {
    return <img className="logo-img" src={`/logos/${l.img}`} alt={l.name} loading="lazy" decoding="async" />;
  }
  if (l.mark) {
    return (
      <span className="logo-item">
        <img className="logo-mark" src={`/logos/${l.mark}`} alt={l.name} loading="lazy" decoding="async" />
        <span className="logo-name">{l.name}</span>
      </span>
    );
  }
  return <span className="logo-word">{l.name}</span>;
}

export default function LogoWall({
  heading = "Trusted by the most innovative companies worldwide",
  layout = "marquee",
}: { heading?: string; layout?: "marquee" | "grid" }) {
  // Static grid — logos read as real content (each cell colours on hover).
  if (layout === "grid") {
    return (
      <div>
        {heading && <p className="label logowall-head">{heading}</p>}
        <div className="logogrid">
          {LOGOS.map((l) => (
            <div className="logo-cell" key={l.name}>
              <LogoMark l={l} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Marquee — duplicate the set so the -50% scroll loop is seamless (decorative).
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div>
      {heading && <p className="label logowall-head">{heading}</p>}
      <div className="logowall">
        <div className="logotrack" aria-hidden="true">
          {doubled.map((l, i) => (
            <LogoMark l={l} key={`${l.name}-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
