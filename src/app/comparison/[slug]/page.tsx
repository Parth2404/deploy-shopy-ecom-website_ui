import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { Contact } from "@/components/marketing/Contact";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import {
  FEATURES,
  RIVALS_WITH_PAGES,
  SHARED_FEATURES,
  pageSlug,
} from "@/lib/comparison";
import { SITE_NAME } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return RIVALS_WITH_PAGES.map((r) => ({ slug: pageSlug(r) }));
}

function findRival(slug: string) {
  return RIVALS_WITH_PAGES.find((r) => pageSlug(r) === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const rival = findRival((await params).slug);
  if (!rival?.page) return {};
  return {
    title: `${SITE_NAME} vs ${rival.name}`,
    description: `${SITE_NAME} compared with ${rival.name}: how each builds your Shopify app, what's included, and who each suits.`,
  };
}

const h2 =
  "text-balance text-[clamp(1.5rem,2vw+1rem,2.25rem)] font-semibold tracking-[-0.02em] text-ink";

export default async function RivalComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const rival = findRival((await params).slug);
  if (!rival?.page) notFound();
  const { page } = rival;

  const ourPitches = FEATURES.filter((f) => !rival.has.includes(f.id)).map(
    (f) => f.pitch,
  );

  const faqs = [
    {
      q: `Do I build the app myself with ${rival.name}?`,
      a: page.model,
    },
    { q: `How much does ${rival.name} cost?`, a: page.price },
    {
      q: `How much does ${SITE_NAME} cost?`,
      a: "Pricing depends on your store and your requirements, and we agree it with you before any build begins.",
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Section>
          <Container>
            <Reveal>
              <p className="text-sm font-medium text-ink-muted">
                <Link href="/comparison" className="hover:text-ink hover:underline">
                  All comparisons
                </Link>
              </p>
              <h1 className="mt-4 max-w-[22ch] text-balance text-[clamp(2.25rem,4.4vw+1rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                {SITE_NAME} vs {rival.name}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[56ch] text-pretty text-lg text-ink-muted">
                {page.summary}
              </p>
            </Reveal>
            <Reveal delay={0.16} className="mt-10">
              <ComparisonTable rivals={[rival]} />
            </Reveal>
          </Container>
        </Section>

        <Section tone="surface" border>
          <Container className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className={h2}>What both include</h2>
              <ul className="mt-6 space-y-3">
                {SHARED_FEATURES.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink-muted">
                    <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={h2}>How {rival.name} works</h2>
              <ul className="mt-6 space-y-3">
                {page.facts.map((f) => (
                  <li key={f} className="text-ink-muted">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-muted">
                From{" "}
                <a
                  href={rival.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-ink"
                >
                  {rival.name}&rsquo;s website
                </a>
                , September 2026. Plans change, so check their site for
                current details.
              </p>
            </div>
          </Container>
        </Section>

        <Section border>
          <Container>
            <h2 className={h2}>Which one suits you</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-lg font-semibold text-ink">
                  {rival.name} may suit you if
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted marker:text-ink-subtle">
                  {page.suits.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-accent-soft-strong bg-accent-soft p-8">
                <h3 className="text-lg font-semibold text-accent">
                  {SITE_NAME} suits you if you want
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-ink marker:text-accent">
                  {ourPitches.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section border>
          <Container>
            <h2 className={h2}>Questions about {rival.name}</h2>
            <div className="mt-8 divide-y divide-border border-t border-border">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9375rem] font-medium text-ink marker:content-none">
                    {q}
                    <ChevronDown
                      className="size-4 shrink-0 text-ink-subtle transition-transform duration-200 ease-out group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </Section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
