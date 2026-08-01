import { Smartphone } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-accent">
        <Smartphone className="size-4 text-ink-on-accent" aria-hidden />
      </span>
      <span className="text-[0.9375rem] font-semibold tracking-tight text-ink">
        {SITE_NAME}
      </span>
    </span>
  );
}
