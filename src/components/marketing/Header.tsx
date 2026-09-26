import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { InstallButton } from "./InstallButton";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-sticky border-b border-border bg-surface/85 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" aria-label={`${SITE_NAME} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm whitespace-nowrap font-medium text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#contact"
            className="text-sm font-medium whitespace-nowrap text-ink-muted hover:text-ink"
          >
            Contact us
          </Link>
          <InstallButton size="md" className="whitespace-nowrap">Install app</InstallButton>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
