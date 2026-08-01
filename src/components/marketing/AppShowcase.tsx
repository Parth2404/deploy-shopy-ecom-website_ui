import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SCREENSHOTS } from "@/lib/screenshots";
import { PhoneMockup } from "./PhoneMockup";
import { ScreenshotSlider } from "./ScreenshotSlider";
const SCREENS = [
  {
    screenshot: SCREENSHOTS.collections,
    title: "Shop by collection",
    body: "Customers browse your catalog by collection, not just one long list.",
  },
  {
    screenshot: SCREENSHOTS.collectionDetail,
    title: "Filter within a collection",
    body: "Each collection opens into a clean, filterable product grid.",
  },
  {
    screenshot: SCREENSHOTS.shopAll,
    title: "Every product, one tap away",
    body: "The full catalog, always in sync with your Shopify admin.",
  },
];

export function AppShowcase() {
  return (
    <Section id="app" tone="surface" border>
      <Container>
        <div className="">
          <Reveal>
            <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
              This is a real app, running on a real Shopify store
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              These screens aren&rsquo;t mockups — they&rsquo;re from a live
              build, pulling its catalog straight from Shopify.
            </p>
          </Reveal>
        </div>

        <ScreenshotSlider screens={SCREENS} />

        <Stagger className="mt-12 hidden lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 lg:overflow-visible lg:pb-0">
          {SCREENS.map(({ screenshot, title, body }) => (
            <StaggerItem
              key={title}
              className="flex flex-col items-center text-center"
            >
              <PhoneMockup src={screenshot.src} alt={screenshot.alt} />
              <h3 className="mt-6 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 max-w-[30ch] text-sm leading-relaxed text-ink-muted">
                {body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
