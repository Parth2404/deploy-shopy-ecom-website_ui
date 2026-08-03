import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/images/app-logo.png"
        alt=""
        width={44}
        height={44}
        className="size-11 rounded-lg object-cover"
        priority
      />
      <span className="text-[0.9375rem] font-semibold tracking-tight text-ink">
        {SITE_NAME}
      </span>
    </span>
  );
}
