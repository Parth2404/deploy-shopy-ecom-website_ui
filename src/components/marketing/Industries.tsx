"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SCREENSHOTS } from "@/lib/screenshots";
import { PhoneMockup } from "./PhoneMockup";
import { motion } from "motion/react";
import {
  Shirt,
  Gem,
  Sparkles,
  ShoppingBag,
  Home,
  Store,
  LayoutGrid,
} from "lucide-react";

const CATEGORIES = [
  { name: "Fashion & apparel", icon: Shirt },
  { name: "Jewelry & accessories", icon: Gem },
  { name: "Beauty & personal care", icon: Sparkles },
  { name: "Footwear", icon: ShoppingBag },
  { name: "Home & lifestyle", icon: Home },
  { name: "Specialty & boutique retail", icon: Store },
  { name: "And most other Shopify catalogs", icon: LayoutGrid },
];

export function Industries() {
  return (
    <Section id="industries" tone="surface" border className="overflow-hidden">
      <Container className="grid lg:grid-cols-[1fr_0.9fr] lg:items-center ">
        <div className="relative z-10">
          <Reveal>
            <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
              Works well for most Shopify stores
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-muted">
              We haven&rsquo;t published client case studies yet — we&rsquo;re
              early. But the underlying build (Shopify catalog, cart, and
              customer accounts, wrapped in a native app) fits any product-based
              Shopify store, including these:
            </p>
          </Reveal>

          <Stagger className="mt-10 flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <StaggerItem key={category.name}>
                <span className="group flex cursor-default items-center gap-2.5 rounded-full border border-border bg-canvas/80 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur-sm transition-all hover:scale-105 hover:border-ink/20 hover:bg-canvas hover:shadow-sm">
                  <category.icon className="h-[1.125rem] w-[1.125rem] text-ink-muted transition-colors group-hover:text-ink" />
                  {category.name}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
          {/* <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[400px] w-[400px] rounded-full bg-ink/[0.03] blur-[80px]" />
          </div> */}
          <Reveal delay={0.12} className="relative z-10">
            <div className="relative">
              <PhoneMockup
                src={SCREENSHOTS.search.src}
                alt={SCREENSHOTS.search.alt}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
