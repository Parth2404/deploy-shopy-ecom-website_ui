import clsx from "clsx";
import { Check, X } from "lucide-react";
import { FEATURES, RIVALS, type Rival } from "@/lib/comparison";
import { InfoTip } from "./InfoTip";

function Mark({ yes }: { yes: boolean }) {
  const Icon = yes ? Check : X;
  return (
    <>
      <span
        className={clsx(
          "mx-auto flex size-6 items-center justify-center rounded-full",
          yes
            ? "bg-yes text-white shadow-[0_1px_2px_oklch(0.4_0.12_152/0.35)]"
            : "bg-danger-soft text-danger ring-1 ring-inset ring-danger/15",
        )}
      >
        <Icon className="size-3.5" strokeWidth={2.75} aria-hidden />
      </span>
      <span className="sr-only">{yes ? "Yes" : "Not listed"}</span>
    </>
  );
}

export function ComparisonTable({ rivals = RIVALS }: { rivals?: Rival[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
      <table
        className={clsx(
          "w-full border-collapse text-sm",
          rivals.length > 1 && "min-w-[46rem]",
        )}
      >
        <caption className="sr-only">
          Mobile Connect compared with {rivals.map((r) => r.name).join(", ")}
        </caption>
        <thead>
          <tr className="bg-surface-2">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-surface-2 p-4 text-left font-medium text-ink-muted"
            >
              Feature
            </th>
            <th
              scope="col"
              className="bg-accent-soft p-4 font-semibold text-accent"
            >
              Mobile Connect
            </th>
            {rivals.map((r) => (
              <th
                key={r.slug}
                scope="col"
                className="p-4 font-semibold text-ink whitespace-nowrap"
              >
                {r.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((f) => (
            <tr key={f.id} className="border-t border-border">
              <th
                scope="row"
                className="sticky left-0 z-10 bg-surface p-4 text-left font-medium text-ink"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  {f.label}
                  <InfoTip label={f.label}>{f.tip}</InfoTip>
                </span>
              </th>
              <td className="bg-accent-soft/60 p-4">
                <Mark yes />
              </td>
              {rivals.map((r) => (
                <td key={r.slug} className="p-4">
                  <Mark yes={r.has.includes(f.id)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
