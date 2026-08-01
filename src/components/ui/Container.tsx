import clsx from "clsx";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[72rem] px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
