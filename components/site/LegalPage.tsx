import Link from "next/link";

export type LegalSection = { h: string; body: string[] };

// Shared shell for the four legal pages (RO-PG021–024). Content is DRAFT and marked as such —
// final copy needs counsel and a review against the live HubSpot forms + analytics.
export default function LegalPage({
  title, updated, sections,
}: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <section className="hero wrap">
        <div style={{ maxWidth: 780, marginInline: "auto", textAlign: "center" }}>
          <h1 style={{ maxWidth: "none", marginInline: "auto" }}>{title}</h1>
          <p className="mini" style={{ marginTop: 16 }}>Last updated: {updated}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ maxWidth: "70ch", marginInline: "auto" }}>
            <div className="card reveal" style={{ borderLeft: "3px solid var(--gold)", marginBottom: "var(--s7)" }}>
              <p style={{ marginTop: 10 }}>
                This policy is a working draft written for the 2026 rebuild. It has not yet been reviewed by counsel and
                is not the final legal text. Questions in the meantime:{" "}
                <a href="mailto:ritesh@insightstap.com">ritesh@insightstap.com</a>.
              </p>
            </div>

            {sections.map((s) => (
              <div key={s.h} className="reveal" style={{ marginBottom: "var(--s6)" }}>
                <h2 style={{ fontSize: "clamp(1.4rem,1.1rem+1vw,1.9rem)", marginBottom: "var(--s3)" }}>{s.h}</h2>
                {s.body.map((p, i) => (
                  <p key={i} style={{ color: "var(--muted)", marginBottom: "var(--s3)", lineHeight: 1.7 }}>{p}</p>
                ))}
              </div>
            ))}

            <p className="mini" style={{ marginTop: "var(--s7)" }}>
              <Link href="/" className="btn-link">Back to home <span className="arw">→</span></Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
