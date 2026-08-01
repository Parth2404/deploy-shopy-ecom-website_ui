import {
  RefreshCw,
  ShoppingCart,
  UserCircle,
  Bell,
  Users,
  ScrollText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const SECONDARY_FEATURES = [
  {
    icon: ShoppingCart,
    title: "Cart & checkout",
    body: "Customers build a cart and check out inside the app, backed by Shopify's Storefront API.",
  },
  {
    icon: UserCircle,
    title: "Customer accounts",
    body: "Sign-in uses Shopify's own Customer Account login — the same accounts your customers already have.",
  },
  {
    icon: Bell,
    title: "Push & cart recovery",
    body: "Recover abandoned checkouts with a targeted push notification straight from your dashboard.",
  },
  {
    icon: Users,
    title: "Team & permissions",
    body: "Add staff with per-module permissions — read, edit, or full control over each part of the dashboard.",
  },
  {
    icon: ScrollText,
    title: "Audit log",
    body: "Every change and login is recorded, so you always know who did what and when.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="max-w-[42ch]">
          <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            Built on your real Shopify data
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Every feature below runs against Shopify&rsquo;s own APIs — nothing
            here is simulated or cached indefinitely.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
              <RefreshCw className="size-5 text-accent" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink">
              Live product catalog sync
            </h3>
            <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-muted">
              Add a product, change a price, or go out of stock in Shopify —
              it reflects in the app automatically. Your Shopify admin stays
              the single source of truth; the app is a mirror, not a second
              inventory to manage.
            </p>
          </div>

          <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {SECONDARY_FEATURES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4 p-6">
                <Icon
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  aria-hidden
                />
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-muted">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
