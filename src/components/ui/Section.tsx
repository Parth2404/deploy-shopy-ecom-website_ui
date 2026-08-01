import clsx from "clsx";
import type { ReactNode } from "react";

const tones = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  rail: "bg-rail text-rail-ink",
};

export function Section({
  id,
  children,
  className,
  tone = "canvas",
  border,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "scroll-mt-20 py-[clamp(3.5rem,7vw,6.5rem)]",
        tones[tone],
        border && "border-t border-border",
        className,
      )}
    >
      {children}
    </section>
  );
}
