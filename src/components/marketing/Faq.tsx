import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const FAQS = [
  {
    q: "Is this free?",
    a: "Pricing depends on your store and what you need built. Sign up or use the contact form below and we'll walk you through it before any work starts.",
  },
  {
    q: "Do I need any development skills?",
    a: "No. You sign up with your store details and our team handles the build.",
  },
  {
    q: "How long does it take to get my app?",
    a: "It depends on your catalog and requirements. We'll give you a timeline after signup, before we start building.",
  },
  {
    q: "What platform is the app built for?",
    a: "Android today, delivered as an APK you can distribute directly to your customers. Let us know during signup if you need iOS.",
  },
  {
    q: "What Shopify data can you access?",
    a: "Only what's needed to run your store's catalog, cart, and customer accounts, through Shopify's own Storefront and Customer Account APIs. See “How we handle your Shopify data” above for the full picture.",
  },
  {
    q: "Do I keep using my normal Shopify admin?",
    a: "Yes. Shopify stays your source of truth — the app mirrors it. Nothing about your existing admin workflow changes.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="surface" border>
      <Container className="max-w-[48rem]">
        <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
          Questions merchants ask us
        </h2>

        <div className="mt-8 divide-y divide-border border-t border-border">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9375rem] font-medium text-ink marker:content-none">
                {q}
                <ChevronDown
                  className="size-4 shrink-0 text-ink-subtle transition-transform duration-200 ease-out group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 max-w-[60ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                {a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
