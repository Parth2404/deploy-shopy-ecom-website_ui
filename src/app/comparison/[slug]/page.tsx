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
import { FEATURES, RIVALS_WITH_PAGES, SHARED_FEATURES, pageSlug } from "@/lib/comparison";
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

  const ourPitches = FEATURES.filter((f) => !rival.has.includes(f.id)).map((f) => f.pitch);

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
              <p className="text-ink-muted text-sm font-medium">
                <Link href="/comparison" className="hover:text-ink hover:underline">
                  All comparisons
                </Link>
              </p>
              <h1 className="text-ink mt-4 max-w-[22ch] text-[clamp(2.25rem,4.4vw+1rem,3.75rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance">
                {SITE_NAME} vs {rival.name}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-ink-muted mt-6 max-w-[56ch] text-lg text-pretty">{page.summary}</p>
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
                  <li key={s} className="text-ink-muted flex items-start gap-3">
                    <Check className="text-accent mt-1 size-4 shrink-0" aria-hidden />
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
              <p className="text-ink-muted mt-6 text-sm">
                From{" "}
                <a
                  href={rival.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink underline"
                >
                  {rival.name}&rsquo;s website
                </a>
                , September 2026. Plans change, so check their site for current details.
              </p>
            </div>
          </Container>
        </Section>

        <Section border>
          <Container>
            <h2 className={h2}>Which one suits you</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-border bg-surface rounded-2xl border p-8">
                <h3 className="text-ink text-lg font-semibold">{rival.name} may suit you if</h3>
                <ul className="text-ink-muted marker:text-ink-subtle mt-4 list-disc space-y-2 pl-5">
                  {page.suits.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="border-accent-soft-strong bg-accent-soft rounded-2xl border p-8">
                <h3 className="text-accent text-lg font-semibold">
                  {SITE_NAME} suits you if you want
                </h3>
                <ul className="text-ink marker:text-accent mt-4 list-disc space-y-2 pl-5">
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
            <div className="divide-border border-border mt-8 divide-y border-t">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9375rem] font-medium marker:content-none">
                    {q}
                    <ChevronDown
                      className="text-ink-subtle size-4 shrink-0 transition-transform duration-200 ease-out group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="text-ink-muted mt-3 text-[0.9375rem] leading-relaxed">{a}</p>
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
