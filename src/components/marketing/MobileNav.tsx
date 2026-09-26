"use client";

import Link from "next/link";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { InstallButton } from "./InstallButton";

export function MobileNav() {
  const panelRef = useRef<HTMLDivElement>(null);

  function close() {
    panelRef.current?.hidePopover();
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        popoverTarget="mobile-nav"
        className="flex size-10 items-center justify-center rounded-full text-ink hover:bg-surface-2"
        aria-label="Open menu"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      <div
        id="mobile-nav"
        popover="auto"
        ref={panelRef}
        className="m-0 h-dvh max-h-none w-full max-w-none border-none bg-surface p-6 backdrop:bg-ink/40"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-ink-muted">Menu</span>
          <button
            type="button"
            onClick={close}
            className="flex size-10 items-center justify-center rounded-full text-ink hover:bg-surface-2"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-surface-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <InstallButton variant="primary" size="lg" onClick={close}>
            Install app
          </InstallButton>
          <Link
            href="/#contact"
            onClick={close}
            className="text-center text-sm font-medium text-ink-muted hover:text-ink"
          >
            Or get in touch first
          </Link>
        </div>
      </div>
    </div>
  );
}
