import { TrendingUp, Bell, Star, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const BENEFITS = [
  {
    icon: TrendingUp,
    label: "Conversion",
    body: "Shoppers who return through the app tend to convert more easily than through mobile web — fewer taps, no re-typing, checkout already knows them.",
  },
  {
    icon: Bell,
    label: "Cart recovery",
    body: "A push notification about an abandoned cart is far more likely to get seen than a marketing email buried in an inbox.",
  },
  {
    icon: Star,
    label: "Loyalty",
    body: "App users tend to be your most loyal customers — not your biggest group, but often your most valuable one.",
  },
  {
    icon: Wallet,
    label: "Order value",
    body: "Saved details and a faster checkout tend to mean fewer abandoned carts and bigger average orders.",
  },
];

export function Growth() {
  return (
    <Section id="growth" tone="surface" border>
      <Container>
        <div className="">
          <Reveal>
            <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
              What a native app tends to change for a store
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base text-ink-muted">
              These are widely observed patterns for stores that add a native
              app alongside their website — general trends, not a guarantee for
              every store.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-8 lg:gap-10 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, label, body }) => (
            <StaggerItem
              key={label}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-ink/[0.06] bg-canvas p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:border-ink/[0.12] hover:shadow-[0_24px_50px_-15px_rgba(0,0,0,0.06)]"
            >
              {/* Animated radial gradient blob */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-ink/[0.04] to-transparent blur-3xl transition-all duration-700 ease-out group-hover:scale-[1.5] group-hover:from-ink/[0.08]" />
              {/* Elegant dot pattern that fades in on hover */}
              <svg
                className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 group-hover:opacity-30"
                style={{
                  maskImage:
                    "radial-gradient(circle at top right, white, transparent 65%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at top right, white, transparent 65%)",
                }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id={`dots-${label.replace(/\\s/g, "")}`}
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" className="fill-ink" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#dots-${label.replace(/\\s/g, "")})`}
                />
              </svg>
              <div className="relative z-10 mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-surface ring-1 ring-ink/[0.05] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-ink group-hover:shadow-lg group-hover:shadow-ink/20 group-hover:ring-ink">
                <Icon
                  className="size-5 text-ink transition-colors duration-500 group-hover:text-canvas"
                  aria-hidden
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col">
                <h3 className="text-[1.35rem] font-bold tracking-tight text-ink transition-colors duration-300">
                  {label}
                </h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-muted">
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
