export const SITE_NAME = "Mobile Connect";

export const SHOPIFY_INSTALL_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_INSTALL_URL || "";

export const NAV_LINKS = [
  { href: "/#compare", label: "Web vs. app" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#growth", label: "Benefits" },
  { href: "/comparison", label: "Compare apps" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "";

export const WHATSAPP_NUMBER = "919727277757";
