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
            : "bg-danger-soft text-danger ring-danger/15 ring-1 ring-inset",
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
    <div className="border-border bg-surface relative overflow-x-auto rounded-2xl border shadow-[var(--shadow-sm)]">
      <table
        className={clsx("w-full border-collapse text-sm", rivals.length > 1 && "min-w-[46rem]")}
      >
        <caption className="sr-only">
          Mobile Connect compared with {rivals.map((r) => r.name).join(", ")}
        </caption>
        <thead>
          <tr className="bg-surface-2">
            <th
              scope="col"
              className="bg-surface-2 text-ink-muted sticky left-0 z-10 p-3 text-left font-medium md:p-4"
            >
              Feature
            </th>
            <th scope="col" className="bg-accent-soft text-accent p-3 font-semibold md:p-4">
              Mobile Connect
            </th>
            {rivals.map((r) => (
              <th
                key={r.slug}
                scope="col"
                className="text-ink p-3 font-semibold whitespace-nowrap md:p-4"
              >
                {r.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((f) => (
            <tr key={f.id} className="border-border border-t">
              <th
                scope="row"
                className="bg-surface text-ink sticky left-0 z-10 p-3 text-left font-medium md:p-4"
              >
                <span className="flex items-center gap-2 md:whitespace-nowrap">
                  {f.label}
                  <InfoTip label={f.label}>{f.tip}</InfoTip>
                </span>
              </th>
              <td className="bg-accent-soft/60 p-3 md:p-4">
                <Mark yes />
              </td>
              {rivals.map((r) => (
                <td key={r.slug} className="p-3 md:p-4">
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
