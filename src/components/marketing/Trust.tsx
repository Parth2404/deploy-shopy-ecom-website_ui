import { Lock, PlugZap, UserCog } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const POINTS = [
  {
    icon: PlugZap,
    title: "Official Shopify APIs only",
    body: "Products and cart run on Shopify's Storefront API. Sign-in runs on Shopify's Customer Account API (OAuth). No scraping, no unofficial endpoints.",
  },
  {
    icon: Lock,
    title: "Your Shopify tokens never reach the app",
    body: "Access tokens are encrypted and stored on our backend. The app only ever holds a short-lived session token we issue — the raw Shopify token never leaves our server.",
  },
  {
    icon: UserCog,
    title: "You stay in control",
    body: "Access is granted when you install the app and connect your store. Disconnect at any time and we stop reading your store's data.",
  },
];

export function Trust() {
  return (
    <Section id="data" tone="canvas">
      <Container>
        <div className="border-border bg-surface rounded-2xl border p-8 shadow-[var(--shadow-sm)] sm:p-10">
          <Reveal>
            <p className="text-ink-muted text-xs font-medium tracking-wide">
              For the Shopify review team, and every merchant
            </p>
            <h2 className="text-ink mt-2 text-[clamp(1.5rem,2vw+1rem,2.125rem)] font-semibold tracking-[-0.02em] text-balance">
              How we handle your Shopify data
            </h2>
          </Reveal>

          <Stagger className="mt-8 grid gap-8 sm:grid-cols-3">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <Icon className="text-accent size-5" aria-hidden />
                <h3 className="text-ink mt-3 text-[0.9375rem] font-semibold">{title}</h3>
                <p className="text-ink-muted mt-1.5 text-[0.875rem] leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="border-border text-ink-muted mt-8 border-t pt-6 text-[0.8125rem] leading-relaxed">
            Full details are in our{" "}
            <a href="/privacy" className="text-accent font-medium hover:underline">
              Privacy Policy
            </a>
            . Questions about data handling can go straight to the{" "}
            <a href="#contact" className="text-accent font-medium hover:underline">
              contact form
            </a>{" "}
            below.
          </p>
        </div>
      </Container>
    </Section>
  );
}
