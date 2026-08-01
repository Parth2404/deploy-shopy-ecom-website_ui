import type { ReactNode } from "react";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Container className="max-w-[65ch] py-16 sm:py-20">
          <h1 className="text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <p className="mt-2 text-sm text-ink-muted">Last updated {updated}</p>

          <div className="prose-legal mt-10 space-y-8 text-[0.9375rem] leading-relaxed text-ink-muted">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
