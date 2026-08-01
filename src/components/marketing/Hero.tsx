import { ShieldCheck, Smartphone, RefreshCw } from "lucide-react";
import { VENDOR_SIGNUP_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PhoneMockup } from "./PhoneMockup";
import { DashboardMockup } from "./DashboardMockup";

const TRUST_POINTS = [
  { icon: RefreshCw, label: "Synced from your live Shopify catalog" },
  { icon: ShieldCheck, label: "You stay in control of your store" },
  { icon: Smartphone, label: "Android app, built for you" },
];

export function Hero() {
  return (
    <Section>
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <h1
            className="reveal text-balance text-[clamp(2.25rem,4.4vw+1rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{ animationDelay: "0ms" }}
          >
            Your Shopify store, now in your customers&rsquo; pocket.
          </h1>
          <p
            className="reveal mt-6 max-w-[46ch] text-pretty text-lg text-ink-muted"
            style={{ animationDelay: "90ms" }}
          >
            Mobile Connect turns your existing store into your own branded
            Android app, built from your live Shopify catalog. No dev work
            required on your side.
          </p>

          <div
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "160ms" }}
          >
            <ButtonLink href={VENDOR_SIGNUP_URL} size="lg">
              Sign up
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              Get in touch first
            </ButtonLink>
          </div>

          <ul
            className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3"
            style={{ animationDelay: "230ms" }}
          >
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-ink-muted"
              >
                <Icon className="size-4 text-accent" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="reveal relative mx-auto w-full max-w-[420px] pb-16 sm:pb-24"
          style={{ animationDelay: "120ms" }}
        >
          <PhoneMockup className="mx-auto w-fit" />
          <div className="absolute bottom-4 left-0 hidden w-[15.5rem] sm:block">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
