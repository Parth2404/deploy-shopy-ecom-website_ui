import { Bell, Zap, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const REASONS = [
  {
    icon: Bell,
    title: "A notification, not a buried email",
    body: "An abandoned-cart push lands on the lock screen. It doesn't sit in an inbox next to fifty other messages competing for attention.",
  },
  {
    icon: Zap,
    title: "One tap beats a browser tab",
    body: "Returning customers already have an account and a saved cart. Opening the app is faster than finding your site again through search or a bookmark.",
  },
  {
    icon: LayoutGrid,
    title: "A permanent spot on the home screen",
    body: "Every tap on your icon is a customer choosing you directly — no competitor's ad, no algorithm deciding whether they see you first.",
  },
];

export function Growth() {
  return (
    <Section id="growth" tone="surface" border>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
              Why a native app moves the needle
            </h2>
            <p className="mt-4 max-w-[38ch] text-base text-ink-muted">
              A mobile app doesn&rsquo;t replace your storefront — it gives
              you a direct channel that mobile web and email can&rsquo;t
              match.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {REASONS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <Icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
