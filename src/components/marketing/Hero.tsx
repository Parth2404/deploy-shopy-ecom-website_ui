import { ShieldCheck, Smartphone, RefreshCw } from "lucide-react";
import { VENDOR_SIGNUP_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SCREENSHOTS } from "@/lib/screenshots";
import { PhoneMockup } from "./PhoneMockup";
import { DashboardMockup } from "./DashboardMockup";

const TRUST_POINTS = [
  { icon: RefreshCw, label: "Synced from your live Shopify catalog" },
  { icon: ShieldCheck, label: "You stay in control of your store" },
  { icon: Smartphone, label: "Android and iOS app, built for you" },
];

export function Hero() {
  return (
    <Section className="lg:max-h-[calc(100vh-74px)]">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <Reveal>
            <h1 className="text-balance text-[clamp(2.25rem,4.4vw+1rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Your Shopify store, now in your customers&rsquo; pocket.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[46ch] text-pretty text-lg text-ink-muted">
              Mobile Connect turns your existing store into your own branded
              Android and iOS app, built from your live Shopify catalog. No
              dev work required on your side.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={VENDOR_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Sign up
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="lg">
                Get in touch first
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
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
          </Reveal>
        </div>

        <Reveal
          delay={0.14}
          className="relative mx-auto w-full max-w-[420px] sm:pb-16 lg:pb-24"
        >
          <PhoneMockup
            src={SCREENSHOTS.home.src}
            alt={SCREENSHOTS.home.alt}
            priority
            className="mx-auto w-fit"
          />
          <div className="absolute bottom-4 left-0 hidden w-[15.5rem] sm:block">
            <DashboardMockup />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
