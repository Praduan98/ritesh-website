import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/site/SocialLinks";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="brandmark" aria-label="Ritesh Osta — home">
              <span className="mono-logo"><Image src="/logo/ritesh_c06v2_mono_dark_512.png" alt="" width={44} height={44} /></span>
              <span className="bt"><b>Ritesh Osta</b><span>GTM Engineer</span></span>
            </Link>
            <p className="blurb">
              Founder of InsightsTap and JobFeeder. GTM engineer, advisor and Top Rated Fiverr Pro helping B2B tech
              companies turn buyer signals into pipeline.
            </p>
            <SocialLinks variant="footer" />
          </div>

          <div>
            <h4>More</h4>
            <ul>
              <li><Link href="/work-with-me">Work With Me</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/frameworks">Frameworks</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Book a Meeting</Link></li>
            </ul>
          </div>

          <div>
            <h4>Free Content</h4>
            <ul>
              <li><Link href="/blog">Articles</Link></li>
              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/playbooks">Playbooks</Link></li>
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul>
              <li><Link href="/programs/gtm-blueprint-sprint">GTM Blueprint Sprint™</Link></li>
              <li><Link href="/programs/gtm-team-coaching">Team Coaching</Link></li>
              <li><Link href="/programs/gtm-engine-build">GTM Engine Build</Link></li>
              <li><a href="https://insightstap.com" target="_blank" rel="noopener">InsightsTap ↗</a></li>
              <li><a href="https://insightstap.com/product/jobfeeder" target="_blank" rel="noopener">JobFeeder ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© 2026 Ritesh Osta. All rights reserved.</span>
          <span className="llinks">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
