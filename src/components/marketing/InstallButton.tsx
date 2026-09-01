"use client";

import type { ComponentProps, MouseEvent } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { SHOPIFY_INSTALL_URL } from "@/lib/constants";
import { trackViaFbPixel } from "@/lib/utils";

type InstallButtonProps = Omit<
  ComponentProps<typeof ButtonLink>,
  "href" | "target" | "rel"
>;

export function InstallButton({ onClick, ...props }: InstallButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackViaFbPixel("lead_install", `lead_install_${Date.now()}`, {});
    onClick?.(event);
  }

  return (
    <ButtonLink
      href={SHOPIFY_INSTALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    />
  );
}
