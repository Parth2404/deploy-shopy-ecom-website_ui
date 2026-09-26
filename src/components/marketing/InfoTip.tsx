"use client";

import { useId, useRef } from "react";
import { Info } from "lucide-react";

// Native popover: escapes the table's scroll clipping, closes on Esc / outside tap.
export function InfoTip({ label, children }: { label: string; children: string }) {
  const id = useId();
  const btn = useRef<HTMLButtonElement>(null);
  const tip = useRef<HTMLDivElement>(null);

  function show() {
    const b = btn.current;
    const t = tip.current;
    if (!b || !t || t.matches(":popover-open")) return;
    t.showPopover();
    const r = b.getBoundingClientRect();
    t.style.top = `${r.bottom + 8}px`;
    t.style.left = `${Math.max(8, Math.min(r.left - 8, window.innerWidth - t.offsetWidth - 8))}px`;
    window.addEventListener("scroll", hide, { once: true, passive: true });
  }

  function hide() {
    if (tip.current?.matches(":popover-open")) tip.current.hidePopover();
  }

  return (
    <>
      <button
        ref={btn}
        type="button"
        popoverTarget={id}
        onMouseEnter={show}
        onMouseLeave={hide}
        aria-label={`What does this mean? ${label}`}
        className="inline-flex size-6 shrink-0 items-center justify-center rounded-full text-ink-subtle hover:bg-surface-2 hover:text-ink"
      >
        <Info className="size-4" aria-hidden />
      </button>
      <div
        id={id}
        ref={tip}
        popover="auto"
        role="tooltip"
        className="fixed m-0 w-64 overflow-visible whitespace-normal rounded-lg border-0 bg-ink p-3 text-left text-xs font-normal leading-relaxed text-canvas shadow-[var(--shadow-lg)]"
        style={{ inset: "auto" }}
      >
        {children}
      </div>
    </>
  );
}
