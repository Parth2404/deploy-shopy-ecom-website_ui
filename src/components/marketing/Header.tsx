import Link from "next/link";
import { NAV_LINKS, SITE_NAME, VENDOR_SIGNUP_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-sticky border-b border-border bg-surface/85 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" aria-label={`${SITE_NAME} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="text-sm font-medium text-ink-muted hover:text-ink"
          >
            Contact us
          </a>
          <ButtonLink href={VENDOR_SIGNUP_URL} size="md">
            Sign up
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
