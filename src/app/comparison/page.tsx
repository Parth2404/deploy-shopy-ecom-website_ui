import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Database,
  Hammer,
  Plug,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { InstallButton } from "@/components/marketing/InstallButton";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { Contact } from "@/components/marketing/Contact";
import { PhoneMockup } from "@/components/marketing/PhoneMockup";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SCREENSHOTS } from "@/lib/screenshots";
import { RIVALS, RIVALS_WITH_PAGES, pageSlug } from "@/lib/comparison";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Compare Shopify app builders",
  description: `How ${SITE_NAME} compares with Tapcart, Shopney, Vajro, OneMobile, Venn Apps, MageNative and Appbrew on the features where we differ.`,
};

const WHY = [
  {
    icon: Hammer,
    title: "We do the building",
    body: "Our team builds and launches your app. You don't need a developer, and you don't have to learn a new editor.",
    chips: ["No developer needed", "Android and iOS"],
  },
  {
    icon: Zap,
    title: "Updates in minutes",
    body: "After the first build, a new Android version takes about 3–4 minutes. Once Google Play is set up, it's uploaded for you.",
    chips: ["3–4 minute builds", "Auto Google Play upload"],
  },
  {
    icon: Plug,
    title: "Works with tools you already use",
    body: "Connect the review, checkout and analytics tools your store already runs on.",
    chips: ["Judge.me", "Loox", "Shiprocket", "GoKwik", "Firebase", "Meta Pixel", "Clarity"],
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    body: "Customers sign in with their Shopify account, you can win back forgotten carts, and a history shows who changed what.",
    chips: ["Shopify login", "Cart reminders", "Activity history"],
  },
];

const GLANCE = [
  { icon: Smartphone, term: "What you get", detail: "Your own branded Android and iOS app" },
  { icon: Hammer, term: "Who builds it", detail: "Our team. No developer needed on your side" },
  { icon: Database, term: "Where the data comes from", detail: "Your live Shopify products, cart and customer accounts" },
  { icon: Clock, term: "How long builds take", detail: "First build 10–15 minutes, then about 3–4" },
];

const h2 =
  "text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink";

export default function ComparisonPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Section className="flex min-h-[calc(100svh-4.5rem)] items-center">
          <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <h1 className="max-w-[16ch] text-balance text-[clamp(2.25rem,4.4vw+1rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                  How Mobile Connect compares
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-[52ch] text-pretty text-lg text-ink-muted">
                  Mobile Connect turns your Shopify store into your own
                  branded Android and iOS app, built by our team from your live
                  catalog. Other companies offer something similar. Here&rsquo;s
                  how we compare, using only what each one says on its own
                  website.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <InstallButton size="lg">Install app</InstallButton>
                  <ButtonLink href="#compare-table" variant="secondary" size="lg">
                    See the comparison
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-10 text-sm font-medium text-ink-muted">
                  Compared with
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {RIVALS.map((r) => (
                    <li
                      key={r.slug}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-ink"
                    >
                      {r.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-md)] sm:p-8">
                <h2 className="text-lg font-semibold text-ink">
                  Mobile Connect at a glance
                </h2>
                <dl className="mt-5 divide-y divide-border">
                  {GLANCE.map(({ icon: Icon, term, detail }) => (
                    <div key={term} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
                        <Icon className="size-5 text-accent" aria-hidden />
                      </span>
                      <div>
                        <dt className="text-sm font-medium text-ink-muted">{term}</dt>
                        <dd className="mt-0.5 text-[0.9375rem] font-medium text-ink">
                          {detail}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </Container>
        </Section>

        <Section id="compare-table" border>
          <Container>
            <Reveal>
              <h2 className={h2}>Feature by feature</h2>
              <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted">
                Nine things that matter when a Shopify app gets built and run.
                A tick means the company lists it on its website. A cross means
                we couldn&rsquo;t find it listed there. Tap the info icon on any
                row for a plain-language explanation.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="mt-8">
              <ComparisonTable />
            </Reveal>
          </Container>
        </Section>

        <Section tone="surface" border>
          <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <h2 className={h2}>Why merchants choose Mobile Connect</h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-10 hidden justify-self-start lg:block">
                <PhoneMockup
                  src={SCREENSHOTS.home.src}
                  alt={SCREENSHOTS.home.alt}
                  className="w-fit"
                />
              </Reveal>
            </div>

            <Stagger as="ul" className="grid gap-5">
              {WHY.map(({ icon: Icon, title, body, chips }) => (
                <StaggerItem
                  as="li"
                  key={title}
                  className="rounded-2xl border border-border bg-canvas p-6 shadow-[var(--shadow-sm)] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
                      <Icon className="size-6 text-accent" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{title}</h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                        {body}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {chips.map((c) => (
                          <li
                            key={c}
                            className="rounded-full border border-accent-soft-strong bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        <Section border>
          <Container>
            <Reveal>
              <h2 className={h2}>Compare us with each app</h2>
              <p className="mt-4 text-base text-ink-muted">
                A closer look at how we stack up against each one.
              </p>
            </Reveal>
            <Stagger as="ul" className="mt-10 grid gap-5 sm:grid-cols-2">
              {RIVALS_WITH_PAGES.map((r) => (
                <StaggerItem as="li" key={r.slug} className="flex">
                  <Link
                    href={`/comparison/${pageSlug(r)}`}
                    className="group flex w-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-md)] sm:p-8"
                  >
                    <span className="text-sm font-medium text-ink-muted">
                      Mobile Connect vs
                    </span>
                    <span className="mt-1 flex flex-wrap items-center gap-3">
                      <span className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                        {r.name}
                      </span>
                      <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-ink-muted">
                        {r.page?.tag}
                      </span>
                    </span>
                    <span className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {r.page?.summary}
                    </span>
                    <span className="mt-6 inline-flex items-center gap-2 pt-2 text-sm font-semibold text-accent">
                      See the comparison
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
