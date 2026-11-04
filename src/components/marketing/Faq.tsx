import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const FAQS = [
  {
    q: "Is this free?",
    a: "Yes, it's free. Message our support team on WhatsApp and we'll walk you through it.",
  },
  {
    q: "Do I need any development skills?",
    a: "No. You install the app from your Shopify admin and our team handles the build.",
  },
  {
    q: "How long does it take to get my app?",
    a: "It depends on your catalog and requirements. We'll give you a timeline after install, before we start building.",
  },
  {
    q: "What platform is the app built for?",
    a: "Both Android and iOS. Android ships as an APK you can distribute directly to your customers, and iOS through the App Store.",
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
    <Section id="faq" tone="canvas" border>
      <Container>
        <Reveal>
          <h2 className="text-ink text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-balance">
            Questions merchants ask us
          </h2>
        </Reveal>

        <Stagger className="divide-border border-border mt-8 divide-y border-t">
          {FAQS.map(({ q, a }) => (
            <StaggerItem key={q}>
              <details className="group py-5">
                <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9375rem] font-medium marker:content-none">
                  {q}
                  <ChevronDown
                    className="text-ink-subtle size-4 shrink-0 transition-transform duration-200 ease-out group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="text-ink-muted mt-3 text-[0.9375rem] leading-relaxed">{a}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
