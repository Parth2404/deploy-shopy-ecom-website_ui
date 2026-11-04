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
        className="text-ink hover:bg-surface-2 flex size-10 items-center justify-center rounded-full"
        aria-label="Open menu"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      <div
        id="mobile-nav"
        popover="auto"
        ref={panelRef}
        className="bg-surface backdrop:bg-ink/40 m-0 h-dvh max-h-none w-full max-w-none border-none p-6"
      >
        <div className="flex items-center justify-between">
          <span className="text-ink-muted text-sm font-medium">Menu</span>
          <button
            type="button"
            onClick={close}
            className="text-ink hover:bg-surface-2 flex size-10 items-center justify-center rounded-full"
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
              className="text-ink hover:bg-surface-2 rounded-lg px-3 py-3 text-lg font-medium"
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
            className="text-ink-muted hover:text-ink text-center text-sm font-medium"
          >
            Or get in touch first
          </Link>
        </div>
      </div>
    </div>
  );
}
