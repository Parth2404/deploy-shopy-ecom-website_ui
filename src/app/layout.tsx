import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { SITE_NAME } from "@/lib/constants";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} — Turn your Shopify store into a mobile app`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Mobile Connect turns your existing Shopify store into your own branded Android and iOS app, built from your live product catalog. No dev work required.",
  openGraph: {
    title: `${SITE_NAME} — Turn your Shopify store into a mobile app`,
    description:
      "We build a branded Android and iOS app from your live Shopify catalog — products, cart, and customer accounts, synced automatically.",
    siteName: SITE_NAME,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-tooltip focus-visible:rounded-lg focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
