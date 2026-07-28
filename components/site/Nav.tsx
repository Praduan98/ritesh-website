"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";

const FREE = [
  ["Articles", "/blog"],
  ["Videos", "/videos"],
  ["Newsletter", "/newsletter"],
  ["Courses", "/courses"],
  ["Playbooks", "/playbooks"],
];
const PROGRAMS = [
  ["GTM Blueprint Sprint™", "/programs/gtm-blueprint-sprint"],
  ["Team Coaching", "/programs/gtm-team-coaching"],
  ["GTM Engine Build", "/programs/gtm-engine-build"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState<null | "free" | "programs">(null);
  const pathname = usePathname();

  // On client-side navigation the nav persists (it lives in the root layout), so a clicked
  // dropdown link keeps focus and its parent stays :focus-within → the menu renders open on
  // the new page. Close both menus and release that retained focus whenever the route changes.
  useEffect(() => {
    setDrop(null);
    setOpen(false);
    const active = document.activeElement as HTMLElement | null;
    if (active && active.closest(".nav-drop")) active.blur();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // iOS-style nav bar: gains a hairline separator + stronger material once content scrolls under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop dropdowns: click-to-toggle for touch + keyboard + screen readers; CSS :hover stays as mouse enhancement.
  useEffect(() => {
    if (!drop) return;
    const onDoc = (e: MouseEvent) => { if (!(e.target as Element)?.closest?.(".nav-drop")) setDrop(null); };
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setDrop(null); };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => { document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onEsc); };
  }, [drop]);

  const dropOpen: CSSProperties = { opacity: 1, visibility: "visible", transform: "translateX(-50%) translateY(0)" };

  return (
    <header className={`topbar${scrolled ? " scrolled" : ""}`}>
      <div className="inner">
        <Link href="/" className="brandmark" aria-label="Ritesh Osta — home">
          <span className="mono-logo"><Image src="/logo/ritesh_c06v2_mono_dark_512.png" alt="" width={44} height={44} priority /></span>
          <span className="bt"><b>Ritesh Osta</b></span>
        </Link>

        <nav className="nav-main" aria-label="Primary">
          <Link href="/about">About</Link>
          <div className="nav-drop">
            <Link href="/work">Work <span aria-hidden="true">▾</span></Link>
            <div className="nav-drop-menu">
              <a href="https://insightstap.com/" target="_blank" rel="noopener noreferrer" className="nd-biz">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="nd-logo" src="/brand/insightstap.webp" alt="" width={30} height={30} />
                <span className="nd-txt"><b>Agency</b><span>InsightsTap ↗</span></span>
              </a>
              <a href="https://allaisuite.com/" target="_blank" rel="noopener noreferrer" className="nd-biz">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="nd-logo" src="/brand/allai-icon.svg" alt="" width={30} height={30} />
                <span className="nd-txt"><b>Product</b><span>AllAI Suite ↗</span></span>
              </a>
            </div>
          </div>
          <Link href="/frameworks">Frameworks</Link>
          <div className="nav-drop" onMouseLeave={() => setDrop(null)}>
            <button type="button" aria-haspopup="true" aria-expanded={drop === "free"} aria-controls="drop-free"
              onClick={(e) => { e.stopPropagation(); setDrop(drop === "free" ? null : "free"); }}>
              Free Resources <span aria-hidden="true">▾</span>
            </button>
            <div className="nav-drop-menu" id="drop-free" style={drop === "free" ? dropOpen : undefined}>
              {FREE.map(([label, href]) => <Link key={href} href={href} onClick={() => setDrop(null)}>{label}</Link>)}
            </div>
          </div>
          <div className="nav-drop" onMouseLeave={() => setDrop(null)}>
            <button type="button" aria-haspopup="true" aria-expanded={drop === "programs"} aria-controls="drop-programs"
              onClick={(e) => { e.stopPropagation(); setDrop(drop === "programs" ? null : "programs"); }}>
              Programs <span aria-hidden="true">▾</span>
            </button>
            <div className="nav-drop-menu" id="drop-programs" style={drop === "programs" ? dropOpen : undefined}>
              {PROGRAMS.map(([label, href]) => <Link key={href} href={href} onClick={() => setDrop(null)}>{label}</Link>)}
            </div>
          </div>
        </nav>

        <div className="tb-right">
          <Link href="/contact" className="btn btn-primary nav-cta"><span className="dot" />Book a Call</Link>
          <button className="menu-btn" type="button" aria-label="Open menu" aria-expanded={open}
            onClick={() => setOpen(true)}>☰</button>
        </div>
      </div>

      <div className={`mobile-nav${open ? " open" : ""}`} aria-hidden={!open} inert={!open}>
        <button className="mobile-close" type="button" aria-label="Close menu"
          onClick={() => setOpen(false)}>✕</button>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <details>
          <summary>Work</summary>
          <Link href="/work" onClick={() => setOpen(false)}>Case Studies</Link>
          <a href="https://insightstap.com/" target="_blank" rel="noopener noreferrer" className="mn-biz" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/insightstap.webp" alt="" width={22} height={22} /> Agency · InsightsTap ↗
          </a>
          <a href="https://allaisuite.com/" target="_blank" rel="noopener noreferrer" className="mn-biz" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/allai-icon.svg" alt="" width={22} height={22} /> Product · AllAI Suite ↗
          </a>
        </details>
        <Link href="/frameworks" onClick={() => setOpen(false)}>Frameworks</Link>
        <details>
          <summary>Free Resources</summary>
          {FREE.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </details>
        <details>
          <summary>Programs</summary>
          {PROGRAMS.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </details>
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => setOpen(false)}>
          <span className="dot" />Book a Call
        </Link>
      </div>
    </header>
  );
}
