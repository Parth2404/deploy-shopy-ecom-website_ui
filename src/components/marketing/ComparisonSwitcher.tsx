"use client";

import { useState } from "react";
import clsx from "clsx";
import { RIVALS } from "@/lib/comparison";
import { ComparisonTable } from "./ComparisonTable";

// Phones can't fit 8 columns: pick one rival, compare two columns.
export function ComparisonSwitcher() {
  const [slug, setSlug] = useState(RIVALS[0].slug);
  const rival = RIVALS.find((r) => r.slug === slug) ?? RIVALS[0];

  return (
    <div className="lg:hidden">
      <p id="compare-with" className="text-sm font-medium text-ink-muted">
        Compare Mobile Connect with
      </p>
      <div
        role="radiogroup"
        aria-labelledby="compare-with"
        className="mt-3 mb-5 flex flex-wrap gap-2"
      >
        {RIVALS.map((r) => (
          <button
            key={r.slug}
            type="button"
            role="radio"
            aria-checked={r.slug === slug}
            onClick={() => setSlug(r.slug)}
            className={clsx(
              "h-10 rounded-full border px-4 text-sm font-medium transition-colors",
              r.slug === slug
                ? "border-accent bg-accent text-ink-on-accent"
                : "border-border bg-surface text-ink hover:bg-surface-2",
            )}
          >
            {r.name}
          </button>
        ))}
      </div>
      <ComparisonTable rivals={[rival]} />
    </div>
  );
}
