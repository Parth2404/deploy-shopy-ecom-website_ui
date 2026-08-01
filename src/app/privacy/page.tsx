import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/marketing/LegalLayout";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your data.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 1, 2026">
      <p>
        This policy explains what {SITE_NAME} ([Company legal name]) collects
        when you sign up as a vendor, connect your Shopify store, or use the
        app we build for your customers — and what we do with it.
      </p>

      <LegalSection heading="1. Information we collect">
        <p>
          <strong>Account information.</strong> When you sign up, we collect
          your store name, email address, password (stored as a salted
          hash, never in plain text), and your Shopify store domain
          (<code>*.myshopify.com</code>).
        </p>
        <p>
          <strong>Shopify store data.</strong> Once you connect your store,
          we read your product catalog, cart activity, and customer account
          data through Shopify&rsquo;s official Storefront and Customer
          Account APIs, so the app can display your products and let your
          customers sign in and check out. If you enable cart-recovery
          notifications, we also read abandoned checkout data through
          Shopify&rsquo;s Admin API.
        </p>
        <p>
          <strong>Contact form data.</strong> If you use the contact form on
          this site, we collect your name, email, store (if provided), and
          message.
        </p>
      </LegalSection>

      <LegalSection heading="2. How we use this information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To build, host, and operate the mobile app for your store.</li>
          <li>
            To keep the app&rsquo;s catalog, cart, and account data in sync
            with your live Shopify store.
          </li>
          <li>
            To send cart-recovery push notifications, only for stores that
            have this feature enabled.
          </li>
          <li>To respond to messages sent through the contact form.</li>
          <li>To maintain the security and audit log of your account.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we protect your data">
        <p>
          Shopify access tokens are encrypted at rest and decrypted only on
          our server when a request to Shopify is required — they never
          reach the mobile app or your customers&rsquo; devices. Passwords
          are hashed, never stored or logged in plain text. Access to
          production data is limited to authorized team members.
        </p>
      </LegalSection>

      <LegalSection heading="4. Who we share data with">
        <p>
          We don&rsquo;t sell your data. We share data only with the
          services required to run Mobile Connect: Shopify (the source of
          your store data), our push-notification provider (for
          cart-recovery alerts, if enabled), our transactional email
          provider (for account and contact-form email), and our hosting
          and database providers.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data retention">
        <p>
          We retain your account and store data while your account is
          active. If you disconnect your store or close your account, we
          stop reading new data from Shopify and delete or anonymize stored
          data within a reasonable period, except where we&rsquo;re required
          to keep records for legal or accounting reasons.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your rights">
        <p>
          You can request a copy of the data we hold about you, ask us to
          correct it, or ask us to delete your account and associated data.
          Reach us through the contact form on this site to make a request.
        </p>
      </LegalSection>

      <LegalSection heading="7. Children">
        <p>
          Mobile Connect is a business tool for Shopify merchants and is not
          directed at children. We do not knowingly collect data from
          children.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to this policy">
        <p>
          If we make material changes to this policy, we&rsquo;ll update the
          date at the top of this page. Continued use of the service after
          changes means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact us">
        <p>
          Questions about this policy or your data? Use the{" "}
          <Link href="/#contact" className="font-medium text-accent hover:underline">
            contact form
          </Link>{" "}
          on our homepage.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
