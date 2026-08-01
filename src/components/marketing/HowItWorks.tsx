import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const STEPS = [
  {
    title: "Sign up & connect your store",
    body: "Create an account and tell us your store name and your .myshopify.com domain. Takes about two minutes — no technical setup on your end.",
  },
  {
    title: "We build your app",
    body: "Our team builds a custom Android app wired directly to your live Shopify catalog: products, cart, and customer accounts, synced through Shopify's own APIs.",
  },
  {
    title: "Launch & manage from your dashboard",
    body: "We hand you the finished APK to share with your customers. Manage notifications, cart recovery, and your team from your vendor dashboard.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="surface" border>
      <Container>
        <div className="max-w-[42ch]">
          <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            From Shopify store to app store, in three steps
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            This is the actual process, start to finish — not a simplified
            marketing version of it.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden
                className="block text-[2.75rem] font-semibold leading-none tracking-[-0.03em] text-accent-soft-strong"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
