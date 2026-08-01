import { LayoutGrid, Bell, ShoppingCart, Settings, ScrollText } from "lucide-react";

const RAIL_ITEMS = [
  { icon: LayoutGrid, active: false },
  { icon: Bell, active: false },
  { icon: ShoppingCart, active: true },
  { icon: Settings, active: false },
  { icon: ScrollText, active: false },
];

const CARTS = [
  { customer: "J. Alvarez", total: "$86.00" },
  { customer: "S. Park", total: "$142.50" },
  { customer: "R. Okafor", total: "$59.00" },
];

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={className}
      role="img"
      aria-label="Mock-up of the vendor dashboard showing recovered abandoned carts for a fictional store"
    >
      <div className="flex overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-lg)]">
        <div className="flex w-14 flex-col items-center gap-4 bg-rail py-5">
          {RAIL_ITEMS.map(({ icon: Icon, active }, i) => (
            <div
              key={i}
              className="flex size-9 items-center justify-center rounded-lg"
              style={{
                background: active ? "var(--color-rail-accent)" : "transparent",
              }}
            >
              <Icon
                className="size-4"
                style={{
                  color: active
                    ? "var(--color-rail)"
                    : "var(--color-rail-ink-muted)",
                }}
                aria-hidden
              />
            </div>
          ))}
        </div>

        <div className="min-w-0 flex-1 p-5">
          <p className="text-xs font-medium text-ink-subtle">Cart recovery</p>
          <div className="mt-1 flex items-baseline gap-2">
            <h3 className="text-2xl font-semibold text-ink">12 carts</h3>
            <span className="text-xs font-medium text-accent">
              recovered this week
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {CARTS.map((cart) => (
              <div
                key={cart.customer}
                className="flex items-center justify-between rounded-lg border border-border bg-canvas px-3 py-2.5"
              >
                <span className="text-sm text-ink">{cart.customer}</span>
                <span className="text-sm font-medium text-ink-muted">
                  {cart.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
