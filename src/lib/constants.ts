export const SITE_NAME = "Mobile Connect";

export const VENDOR_SIGNUP_URL =
  process.env.NEXT_PUBLIC_VENDOR_SIGNUP_URL || "";

export const NAV_LINKS = [
  { href: "#compare", label: "Web vs. app" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#growth", label: "Benefits" },
  { href: "#faq", label: "FAQ" },
] as const;
