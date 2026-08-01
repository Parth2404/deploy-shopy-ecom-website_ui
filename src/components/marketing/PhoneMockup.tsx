import { Search, Home, ShoppingBag, User } from "lucide-react";

const PRODUCTS = [
  { name: "Ceramic pour-over", price: "$38" },
  { name: "Walnut coaster set", price: "$24" },
  { name: "Linen apron", price: "$46" },
  { name: "Enamel mug", price: "$18" },
];

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={className}
      role="img"
      aria-label="Mock-up of a mobile storefront app showing a product catalog for a fictional store called Aurora Goods"
    >
      <div className="relative w-[260px] rounded-[2.75rem] border-[10px] border-ink bg-ink p-1.5 shadow-lg sm:w-[280px]">
        <div className="absolute left-1/2 top-1.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
        <div className="overflow-hidden rounded-[2.1rem] bg-surface">
          <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[0.7rem] font-medium text-ink">
            <span>9:41</span>
            <span className="flex gap-1">
              <span className="h-2.5 w-4 rounded-[2px] border border-ink" />
            </span>
          </div>

          <div className="px-5 pb-4">
            <p className="text-[0.7rem] font-medium tracking-wide text-ink-subtle">
              AURORA GOODS
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink">
              New this week
            </h3>
            <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-canvas px-3 py-2">
              <Search className="size-3.5 text-ink-subtle" aria-hidden />
              <span className="text-xs text-ink-subtle">
                Search products
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 px-5 pb-6">
            {PRODUCTS.map((product, i) => (
              <div key={product.name} className="space-y-1.5">
                <div
                  className="aspect-square rounded-xl"
                  style={{
                    background:
                      i % 2 === 0
                        ? "var(--color-accent-soft)"
                        : "var(--color-surface-2)",
                  }}
                />
                <p className="text-[0.7rem] font-medium leading-tight text-ink">
                  {product.name}
                </p>
                <p className="text-[0.7rem] text-ink-muted">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-around border-t border-border py-3">
            <Home className="size-5 text-accent" aria-hidden />
            <Search className="size-5 text-ink-subtle" aria-hidden />
            <ShoppingBag className="size-5 text-ink-subtle" aria-hidden />
            <User className="size-5 text-ink-subtle" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
