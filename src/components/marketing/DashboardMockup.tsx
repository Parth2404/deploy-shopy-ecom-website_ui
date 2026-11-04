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
      <div className="border-border bg-surface flex overflow-hidden rounded-2xl border shadow-[var(--shadow-lg)]">
        <div className="bg-rail flex w-14 flex-col items-center gap-4 py-5">
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
                  color: active ? "var(--color-rail)" : "var(--color-rail-ink-muted)",
                }}
                aria-hidden
              />
            </div>
          ))}
        </div>

        <div className="min-w-0 flex-1 p-5">
          <p className="text-ink-subtle text-xs font-medium">Cart recovery</p>
          <div className="mt-1 flex items-baseline gap-2">
            <h3 className="text-ink text-2xl font-semibold">12 carts</h3>
            <span className="text-accent text-xs font-medium">recovered this week</span>
          </div>

          <div className="mt-4 space-y-2">
            {CARTS.map((cart) => (
              <div
                key={cart.customer}
                className="border-border bg-canvas flex items-center justify-between rounded-lg border px-3 py-2.5"
              >
                <span className="text-ink text-sm">{cart.customer}</span>
                <span className="text-ink-muted text-sm font-medium">{cart.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
