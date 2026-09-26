import type { MetadataRoute } from "next";
import { RIVALS_WITH_PAGES, pageSlug } from "@/lib/comparison";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/comparison",
    ...RIVALS_WITH_PAGES.map((r) => `/comparison/${pageSlug(r)}`),
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
