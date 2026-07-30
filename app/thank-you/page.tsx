import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Thank You — Your Call Is Booked" },
  description: "Your GTM strategy call is confirmed. A calendar invite is on its way to your inbox.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

const check = (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
);

const NEXT = [
  "Check your inbox for the invite and call link.",
  "Add it to your calendar so it holds its place.",
  "Bring the one metric that’s stuck — that’s where we’ll start.",
];

export default function ThankYou() {
  return (
    <section className="ty">
      <div className="wrap ty-grid">
        <div className="ty-media" aria-hidden="true">
          <Image src="/images/thank-you.webp" alt="" fill priority quality={90}
            sizes="(max-width:820px) 100vw, 46vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          <div className="ty-media-blend" />
        </div>

        <div className="ty-panel">
          <div className="ty-inner reveal">
          <span className="ty-check" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
          </span>
          <h1 className="ty-title">You&rsquo;re on the calendar.</h1>
          <p className="ty-lead">
            Thank you — your 30-minute GTM strategy call is locked in. A calendar invite with the
            call link is already on its way to your inbox.
          </p>
          <ul className="ty-next">
            {NEXT.map((n) => (
              <li key={n}>{check}<span>{n}</span></li>
            ))}
          </ul>
          <div className="ty-cta">
            <Link href="/" className="btn btn-primary">Back to home <span className="arw">→</span></Link>
            <Link href="/frameworks" className="btn btn-ghost">Explore the frameworks</Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
