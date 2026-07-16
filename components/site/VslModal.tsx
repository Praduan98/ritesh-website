"use client";
import { useEffect, useRef, useState } from "react";

// "Watch the 5-min brief" → modal. Swap the placeholder frame for the hosted VSL embed (Annex B).
export default function VslModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // Single focusable control → trap Tab on it so focus never walks into the page behind.
      if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={triggerRef} type="button" className="btn btn-ghost" onClick={() => setOpen(true)}>
        ▶ Watch the 5-min brief
      </button>
      <div
        className={`modal${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="5-minute brief"
        aria-hidden={!open}
        inert={!open}
        onClick={() => setOpen(false)}
      >
        <div className="box" onClick={(e) => e.stopPropagation()}>
          <button ref={closeRef} type="button" className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
          <div className="vframe">Video embed placeholder — wire the hosted VSL here.</div>
        </div>
      </div>
    </>
  );
}
