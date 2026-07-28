"use client";
import { useState } from "react";

// Project enquiry form for /work-with-me (reference: swarnendu.de/discuss-your-project).
// Stacked layout, sits in the hero's right column. Client-side demo state only.
// TODO: wire to HubSpot portal — separate personal-brand list (not the InsightsTap company list).
export default function QualifyForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <div className="wwm-formcard reveal">
        <div className="wwm-sent">
          <h3>Sent.</h3>
          <p>Thanks — I read every one of these myself. You&rsquo;ll hear back within two working days.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wwm-formcard reveal">
      <form className="wwm-form" onSubmit={onSubmit}>
        <p className="wwm-form-title">Tell me about your project:</p>

        <label className="wwm-lab" htmlFor="pf-need">What are you looking for? <span className="wwm-req">*</span></label>
        <textarea id="pf-need" name="need" required rows={4} className="field"
          placeholder="A GTM audit, a done-for-you engine build, coaching for my team&hellip;" />

        <label className="wwm-lab" htmlFor="pf-name">Name <span className="wwm-req">*</span></label>
        <input id="pf-name" name="name" type="text" required className="field" />

        <label className="wwm-lab" htmlFor="pf-email">Email <span className="wwm-req">*</span></label>
        <input id="pf-email" name="email" type="email" required className="field" />

        <label className="wwm-lab" htmlFor="pf-phone">Phone</label>
        <input id="pf-phone" name="phone" type="tel" className="field" placeholder="+1 201 555 0123" />

        <button type="submit" className="btn btn-primary wwm-submit"><span className="dot" />Book a Call</button>
        <p className="microcopy">No obligation. I read every enquiry myself.</p>
      </form>
    </div>
  );
}
