import {
  FEATURES,
  RIVALS,
  RIVALS_WITH_PAGES,
  pageSlug,
} from "@/lib/comparison";
import { SITE_NAME } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamic = "force-static";

const comparisonPages = RIVALS_WITH_PAGES.map(
  (r) =>
    `- [${SITE_NAME} vs ${r.name}](${siteUrl}/comparison/${pageSlug(r)}): Side-by-side comparison, how ${r.name} works, published pricing, and who each suits.`,
).join("\n");

const comparisonFeatures = FEATURES.map((f) => {
  const listedBy = [
    SITE_NAME,
    ...RIVALS.filter((r) => r.has.includes(f.id)).map((r) => r.name),
  ].join(", ");
  return `- **${f.label}**: ${f.tip} Listed by: ${listedBy}.`;
}).join("\n");

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_NAME} turns an existing Shopify store into a branded native Android app. The app is built from the store's live catalog; products, prices, inventory, discounts and checkout stay in Shopify. The merchant configures everything from a dashboard that installs into Shopify Admin. No code, no separate CMS, no app developer. iOS builds are planned, not yet available.

## Pages

- [Home](${siteUrl}/): What the service does, how it works, benefits, FAQ, and a contact form.
- [Compare](${siteUrl}/comparison): Feature-by-feature comparison with ${RIVALS.map((r) => r.name).join(", ")}.
${comparisonPages}
- [Privacy Policy](${siteUrl}/privacy): What data is collected and how it is used.
- [Terms of Service](${siteUrl}/terms): Terms for using the service.

## Who it is for

Merchants (mainly small-to-medium Shopify stores) whose customers buy repeatedly and browse visually: fine jewellery and diamonds, fashion and apparel, footwear, luxury watches, accessories, health and beauty, home and lifestyle, specialty and boutique retail.

## What shoppers get in the app

- Browse collections and products with full variant and option selection
- Search the whole catalog; filter and sort inside a collection (price range, availability, product type, tag)
- Product pages with images, description, price, rating and reviews; related-product recommendations from Shopify's recommendation engine
- Cart with add, change quantity, remove and live subtotal
- Checkout on Shopify's own secure checkout (same payment methods, discounts, tax and shipping rules as the web store); optional routing through Shiprocket or GoKwik
- Sign-in via Shopify Customer Account login (no new password), editable profile, shipping address book, order history
- Store pages (policies, About, FAQ) from Shopify pages
- Light and dark mode, following the phone setting
- Reviews read from Judge.me, Loox, or Shopify product rating metafields

## Vendor dashboard (merchant side)

Runs inside Shopify Admin; no separate login. Sections:

- **Dashboard**: overview.
- **App Layout**: drag-and-drop visual app builder with a live phone simulator that renders the actual app, in light and dark mode.
  - Home screen sections: carousel/hero banners, categories (grid or horizontal strip, row count, item limit), any number of featured collections (each tied to a Shopify collection, with its own title, columns, item limit, layout), product grid, and a show/hide search bar. Reorder, show or hide each.
  - Product detail screen: reorder or hide title, rating, price, options, quantity, description, recommendations, reviews, bottom action bar.
  - Product card: rating placement; Add to Cart / Buy Now / neither.
  - Theme: accent colour (presets or custom), theme selection, one-click restore to defaults.
  - Banners and carousel: upload slides with image, title, description, button text and destination link; reorder, edit, delete; live without a rebuild.
- **Notifications**: push notifications.
  - Campaigns: title, message, optional image, deep link to a specific app screen (product or collection), audience of all subscribers, a single device, or selected abandoned carts; live preview; every send recorded with delivery status; scheduled sends.
  - Automated (editable copy and destination, each on/off): Welcome (first app open), Inactive 7 days, Inactive 30 days.
- **Abandoned Checkouts**: checkouts started but not completed, pulled from Shopify, with customer, location, timestamp and recovery link.
- **Abandoned Carts**: live in-app carts with line items, images, quantities, subtotal and device. Visible from the first add-to-cart, earlier than Shopify's abandoned-checkout data. Select carts and send those shoppers a push notification.
- **Configuration**: brand identity and assets (store name, store URL, app bundle identifier, app icon, Android adaptive icon, splash screen, favicon); review app connection; checkout integrations; analytics (Firebase / Google Analytics, Meta, Microsoft Clarity); one-click Google/Firebase setup (sign in with Google once; the dashboard creates or selects the Google Cloud project, enables Firebase, registers the apps and pulls config files into the build).
- **Build Versions**: request APK (direct install and testing) or AAB (Google Play submission) builds. Phases: Fetching Code, Installing Dependencies, Customizing App, Preparing Build, Building App, Completed. Stop queued or running builds, view history with status, timestamps and errors, download finished files. Pre-flight checks flag missing assets or config before a build starts. A deploy guide walks through publishing.
- **Google Play publishing**: each merchant gets a unique, stable Android signing identity generated on their first build, and version numbers increase automatically. The merchant does the one-time Google steps (developer account, create the app, legal questionnaires, first upload); after that, builds can be uploaded and released automatically.
- **Subscription**: plans and billing.
- **Audit Logs**: every configuration change, notification send and build request, with who, when, what changed and from where.

## Built-in analytics

Events recorded per device and per customer: installs, app opens, product views, cart opens, checkout taps. These also drive the automated notifications. Ad spend can be attributed to app installs and purchases through the connected Meta and Firebase integrations.

## Setup

Install from Shopify Admin like any Shopify app. A guided wizard covers store details, customer account connection (headless setup) and push notification setup (OneSignal), verifying each step. The app registers itself as a sales channel, so its orders appear in Shopify attributed to it.

## Pricing

Billed through Shopify's billing system as a one-time purchase, not a recurring subscription; charges appear on the existing Shopify invoice. Self-serve upgrades from the dashboard.

- Free ($0): build and see the app before paying.
- Basic ($9): core storefront features.
- Pro ($99): everything in Basic, plus priority support.

## Security and compliance

- Shopify access tokens and third-party API keys are encrypted at rest and never shown back once saved
- Shopify webhooks are cryptographically verified
- Shopify's mandatory GDPR webhooks are implemented (customer data request, customer redaction, shop redaction)
- Uninstalling the app immediately invalidates dashboard sessions
- Payment details never touch our servers; checkout is Shopify's
- Official Shopify APIs only

## Why an app instead of a mobile website

Push notifications are an owned channel with no per-message cost, and reach the lock screen. A home-screen icon keeps the brand visible. Checkout is faster for signed-in customers with saved addresses. Abandoned carts can be recovered by push within minutes. Layout changes are made from the dashboard without a developer. Industry benchmarks suggest higher repeat-shopper conversion, cart recovery and lifetime value in apps; these are not guarantees for any one store.

## How it compares to other Shopify app services

Based on what each company says on its own website (checked September 2026). "Listed by" means the company lists the feature there; a company missing from the list may still offer it. Features every listed company offers (audience-targeted push, automated push, app analytics, custom design and branding) are left out.

${comparisonFeatures}

## Contact

Use the contact form on the [home page](${siteUrl}/).
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
