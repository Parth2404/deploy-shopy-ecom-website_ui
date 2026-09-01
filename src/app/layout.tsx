import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { FB_PIXEL_ID, SITE_NAME } from "@/lib/constants";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { WhatsAppButton } from "@/components/marketing/WhatsAppButton";
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
      <head>
        {/* Facebook Pixel Code */}
        <script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `
            !(function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = "2.0";
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js"
            );
            fbq("init", "${FB_PIXEL_ID}");
            fbq("track", "PageView");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink">
        {/* Facebook Pixel Code */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-tooltip focus-visible:rounded-lg focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
