// Rival facts come from each vendor's public website, checked September 2026.
// A feature is only marked as present if the vendor lists it; absence means "not listed", not "missing".

export const FEATURES = [
  {
    id: "build",
    label: "Built for you",
    tip: "Our team designs, builds and sets up your app. You don't need a developer or any technical skills.",
    pitch: "us to build and launch the app, with no developer on your side",
  },
  {
    id: "android",
    label: "Fast Android builds",
    tip: "Get a fresh Android app (APK and AAB files) whenever you change something. The first build takes 10–15 minutes; after that, about 3–4.",
    pitch: "new Android app files in 3–4 minutes",
  },
  {
    id: "play",
    label: "Auto Google Play upload",
    tip: "After a one-time Google Play setup, new versions of your app are sent to Google Play for you. No manual uploading.",
    pitch: "new versions sent to Google Play automatically",
  },
  {
    id: "login",
    label: "Shopify login",
    tip: "Shoppers sign in with the same Shopify account they already use on your store. No new password to create.",
    pitch: "customers to sign in with their existing Shopify account",
  },
  {
    id: "checkout",
    label: "Checkout partners",
    tip: "Set up the checkout and payment tools your store already uses, such as Shiprocket and GoKwik, from your dashboard.",
    pitch: "to connect checkout partners like Shiprocket and GoKwik",
  },
  {
    id: "reviews",
    label: "Review apps",
    tip: "Connect the review app your store already uses, such as Judge.me or Loox, so customer reviews show up inside your mobile app.",
    pitch: "reviews from Judge.me, Loox and similar apps shown in your app",
  },
  {
    id: "analytics",
    label: "Firebase, Pixel & Clarity",
    tip: "Connect Firebase, Meta (Facebook) Pixel and Microsoft Clarity to see how shoppers use your app and to measure your ads.",
    pitch: "Firebase, Meta Pixel and Microsoft Clarity connected",
  },
  {
    id: "cart",
    label: "Cart reminders",
    tip: "Send a notification to shoppers who added items to their cart or started checkout but didn't finish buying.",
    pitch: "cart reminder notifications sent from your dashboard",
  },
  {
    id: "history",
    label: "Activity history",
    tip: "Your dashboard keeps a history of every change and login, so you always know who did what and when.",
    pitch: "a history of who changed what, and when",
  },
] as const;

export type FeatureId = (typeof FEATURES)[number]["id"];

// Features every listed rival also offers, so they're not a reason to pick us.
export const SHARED_FEATURES = [
  "Push notifications targeted by audience (on some plans)",
  "Automated push notifications",
  "App analytics",
  "Custom app design and branding",
];

export type Rival = {
  slug: string;
  name: string;
  url: string;
  /** Features (from FEATURES) this vendor lists on its site. */
  has: FeatureId[];
  /** Detail page content. Rivals without it appear in the main table only. */
  page?: {
    /** Short label for cards, e.g. how the app gets built. */
    tag: string;
    summary: string;
    model: string;
    price: string;
    facts: string[];
    suits: string[];
  };
};

export const RIVALS: Rival[] = [
  {
    slug: "tapcart",
    name: "Tapcart",
    url: "https://tapcart.com/pricing",
    has: [],
    page: {
      tag: "Self-serve",
      summary:
        "Tapcart is a self-serve app platform: you design and manage your own app in its editor.",
      model: "Self-serve. You build and manage the app yourself in a drag-and-drop editor.",
      price:
        "Growth $200/month billed annually ($500 if paid monthly), Scale $1,250/month, Enterprise+ $2,850/month. An AI add-on is $250/month.",
      facts: [
        "Android and iOS apps come with every plan.",
        "Unlimited push notifications on every plan.",
        "Audience segmentation and Shopify Multipass login are on the Scale plan and up.",
        "Apple Developer ($99/year) and Google Play ($25 one-time) fees are extra.",
      ],
      suits: [
        "You want to design and manage the app yourself",
        "You want unlimited custom app screens",
        "You want unlimited push notifications on every plan",
      ],
    },
  },
  {
    slug: "shopney",
    name: "Shopney",
    url: "https://shopney.co/pricing",
    has: ["reviews", "cart"],
    page: {
      tag: "Drag-and-drop editor",
      summary:
        "Shopney offers white-label iOS and Android apps built with a drag-and-drop design editor.",
      model: "Not stated on the page we checked. It offers a drag-and-drop design editor.",
      price:
        "Silver $119/month billed annually ($149 monthly), Gold $239 ($299), Platinum $499 ($599), Enterprise from $999 ($1,299). A 30-day free trial and no success fees.",
      facts: [
        "White-label iOS and Android app, with a design editor and animated splash screen.",
        "Abandoned-cart notifications start on the Gold plan; segmented push on Platinum.",
        "Works with Yotpo, Stamped, Judge.me and Growave for reviews.",
        "Apple Developer ($99/year) and Google Play ($25 one-time) fees are extra.",
      ],
      suits: [
        "You want a drag-and-drop editor with custom fonts and colors",
        "You want a 30-day free trial with published prices",
        "You use Yotpo, Stamped or Growave for reviews",
      ],
    },
  },
  {
    slug: "vajro",
    name: "Vajro",
    url: "https://www.superfans.io",
    has: ["reviews", "cart"],
    page: {
      tag: "Self-serve",
      summary:
        "Vajro, now called Superfans, is a self-serve, drag-and-drop app builder with a 30-day free trial.",
      model:
        "Self-serve. You build the app yourself with drag-and-drop, with support from its team.",
      price:
        "Its pricing page lists an Unlimited plan at $1,000/month, with tiers by store revenue (under $1M, $1M–$20M, over $20M). A 30-day free trial is offered.",
      facts: [
        "Its site says you can build in 60 minutes with no coding, with support along the way.",
        "Unlimited push notifications, including reminders about items in cart.",
        "Lists integrations with Judge.me, Loox, Stamped, FLITS, Smile.io, Loyalty Lion and Algolia, among others.",
        "30 days to build, publish and promote your app before paying.",
      ],
      suits: [
        "You want to build the app yourself with drag-and-drop",
        "You use Smile.io, Loyalty Lion or Algolia",
        "You want a 30-day trial before paying",
      ],
    },
  },
  {
    slug: "onemobile",
    name: "OneMobile",
    url: "https://www.onemobile.ai",
    has: ["reviews"],
    page: {
      tag: "Self-serve",
      summary:
        "OneMobile is a no-code, self-serve app builder with a live preview of your app.",
      model: "Self-serve. You build the app yourself in a no-code drag-and-drop builder.",
      price:
        "Plan prices aren't shown on the page we checked. It offers a free plan and a 14-day free trial.",
      facts: [
        "Live preview of your iOS and Android app while you build.",
        "Personalized push notifications triggered by what shoppers do in the app.",
        "Works with Judge.me for reviews, and with Google Analytics and Amplitude.",
      ],
      suits: [
        "You want to build the app yourself with no code",
        "You want to start on a free plan",
        "You use Amplitude for analytics",
      ],
    },
  },
  {
    slug: "venn-apps",
    name: "Venn Apps",
    url: "https://www.vennapps.com",
    has: ["build", "cart"],
    page: {
      tag: "Done-for-you",
      summary:
        "Venn Apps builds your app for you, like we do, with a bespoke design process.",
      model: "Done-for-you. Its site describes a “white-glove app build fully handled by us”.",
      price: "Not published. Its site mentions fixed monthly pricing with no success fees; you contact them for a quote.",
      facts: [
        "Bespoke design process with dedicated designers and account managers.",
        "Unlimited push with segmentation, scheduling, and abandoned-cart, back-in-stock and welcome flows.",
        "100+ integrations included.",
      ],
      suits: [
        "You want a fully custom, designer-led app",
        "You want back-in-stock and welcome push flows",
        "You want a dedicated account manager",
      ],
    },
  },
  {
    slug: "magenative",
    name: "MageNative",
    url: "https://www.magenative.com",
    has: ["reviews", "cart"],
  },
  {
    slug: "appbrew",
    name: "Appbrew",
    url: "https://www.appbrew.com",
    has: ["build", "reviews", "cart"],
    page: {
      tag: "Managed launch",
      summary:
        "Appbrew is a Shopify app builder with AI features, priced from $199 a month, with managed onboarding and launch support.",
      model:
        "Mixed. Its site says its team helps bring your app to market in days with managed onboarding, and the Starter plan is self-serve.",
      price:
        "Starter $199/month, Pro $599/month, Enterprise custom. A 30-day free trial is offered on Starter.",
      facts: [
        "Native iOS and Android apps on every plan, with unlimited push notifications including welcome, abandoned-cart, back-in-stock and order-shipped.",
        "Pro adds AI personalization, A/B testing and 24/7 priority support; Enterprise adds custom design and a dedicated success manager.",
        "Team seats: 1 on Starter, 5 on Pro, unlimited on Enterprise.",
        "You own and pay for the Apple ($99/year) and Google Play ($25 one-time) accounts.",
      ],
      suits: [
        "You want AI personalization and A/B testing",
        "You want a native video shopping module",
        "You want 24/7 priority support on a higher plan",
      ],
    },
  },
];

export const RIVALS_WITH_PAGES = RIVALS.filter((r) => r.page);

export const pageSlug = (r: Rival) => `${r.slug}-vs-mobile-connect`;
