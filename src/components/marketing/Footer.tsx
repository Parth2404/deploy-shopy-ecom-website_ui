import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-canvas border-t">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[32ch]">
          <Logo />
          <p className="text-ink-muted mt-3 text-sm leading-relaxed">
            We build a branded Android and iOS app from your live Shopify store — no dev work
            required on your side.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-muted hover:text-ink text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="text-ink-muted hover:text-ink text-sm">
            Contact
          </Link>
          <Link href="/privacy" className="text-ink-muted hover:text-ink text-sm">
            Privacy
          </Link>
          <Link href="/terms" className="text-ink-muted hover:text-ink text-sm">
            Terms
          </Link>
        </nav>
      </Container>

      <Container className="border-border border-t py-6">
        <p className="text-ink-muted text-xs">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
