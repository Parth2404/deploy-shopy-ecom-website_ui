import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-canvas">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[32ch]">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            We build a branded Android app from your live Shopify store —
            no dev work required on your side.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-sm text-ink-muted hover:text-ink">
            Contact
          </a>
          <Link href="/privacy" className="text-sm text-ink-muted hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-ink-muted hover:text-ink">
            Terms
          </Link>
        </nav>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-ink-muted">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
