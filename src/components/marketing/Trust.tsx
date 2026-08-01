import { Lock, PlugZap, UserCog } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

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
    body: "Access is granted when you sign up and connect your store. Disconnect at any time and we stop reading your store's data.",
  },
];

export function Trust() {
  return (
    <Section id="data" tone="canvas">
      <Container>
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="text-xs font-medium tracking-wide text-ink-muted">
            For the Shopify review team, and every merchant
          </p>
          <h2 className="mt-2 text-balance text-[clamp(1.5rem,2vw+1rem,2.125rem)] font-semibold tracking-[-0.02em] text-ink">
            How we handle your Shopify data
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="size-5 text-accent" aria-hidden />
                <h3 className="mt-3 text-[0.9375rem] font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-border pt-6 text-[0.8125rem] leading-relaxed text-ink-muted">
            Full details are in our{" "}
            <a href="/privacy" className="font-medium text-accent hover:underline">
              Privacy Policy
            </a>
            . Questions about data handling can go straight to the{" "}
            <a href="#contact" className="font-medium text-accent hover:underline">
              contact form
            </a>
            {" "}below.
          </p>
        </div>
      </Container>
    </Section>
  );
}
