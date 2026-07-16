import Link from "next/link";

// RO-PG020 · 404. Next.js serves this with a real 404 status (unlike a Graphy-style 200 friendly page).
export default function NotFound() {
  return (
    <section className="hero wrap">
      <div style={{ maxWidth: 720, marginInline: "auto", textAlign: "center", paddingBlock: "clamp(40px,7vw,80px)" }}>
        <h1 style={{ maxWidth: "none", marginInline: "auto" }}>That page <span className="accent">moved</span>.</h1>
        <p className="lead" style={{ marginInline: "auto", maxWidth: "48ch" }}>
          The site was rebuilt in 2026 and some old links did not survive it. Try the frameworks, the newsletter, or just
          tell me what you were looking for.
        </p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <Link href="/frameworks" className="btn btn-primary"><span className="dot" />The frameworks</Link>
          <Link href="/newsletter" className="btn btn-ghost">Newsletter</Link>
          <Link href="/contact" className="btn btn-ghost">Contact</Link>
        </div>
      </div>
    </section>
  );
}
