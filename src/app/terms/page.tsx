import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/marketing/LegalLayout";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern use of ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="August 1, 2026">
      <p>
        These terms govern your use of {SITE_NAME} ([Company legal name]),
        including the vendor dashboard and any mobile app we build for your
        Shopify store. By signing up, you agree to them.
      </p>

      <LegalSection heading="1. The service">
        <p>
          Mobile Connect connects to your existing Shopify store and builds
          a custom Android and iOS app backed by your live product catalog,
          cart, and customer accounts. We also provide a vendor dashboard for
          managing your store&rsquo;s app, staff, and notifications.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility & your account">
        <p>
          You must be an owner or authorized administrator of the Shopify
          store you connect. You&rsquo;re responsible for the accuracy of
          the store information you provide and for keeping your account
          credentials secure.
        </p>
      </LegalSection>

      <LegalSection heading="3. Your store content">
        <p>
          You retain ownership of your product catalog, brand, and store
          content. You&rsquo;re responsible for making sure your content
          complies with Shopify&rsquo;s own terms and applicable law — we
          display what your Shopify store already contains.
        </p>
      </LegalSection>

      <LegalSection heading="4. Fees">
        <p>
          Pricing depends on your store and requirements, and is agreed
          with you directly before any app build begins. Nothing on this
          site is a binding price quote.
        </p>
      </LegalSection>

      <LegalSection heading="5. Intellectual property">
        <p>
          We retain rights to the app framework, dashboard, and underlying
          software we build and reuse across stores. You retain rights to
          your store&rsquo;s brand, product content, and data.
        </p>
      </LegalSection>

      <LegalSection heading="6. Service availability">
        <p>
          We work to keep the service reliable but don&rsquo;t guarantee
          uninterrupted availability. Scheduled maintenance or issues with
          third-party services (including Shopify) may affect access from
          time to time.
        </p>
      </LegalSection>

      <LegalSection heading="7. Termination">
        <p>
          You may disconnect your store or close your account at any time,
          which revokes our access to your Shopify data going forward. We
          may suspend or terminate accounts that violate these terms or
          Shopify&rsquo;s own policies.
        </p>
      </LegalSection>

      <LegalSection heading="8. Disclaimer & limitation of liability">
        <p>
          The service is provided &ldquo;as is,&rdquo; without warranties of
          any kind. To the extent permitted by law, {SITE_NAME} isn&rsquo;t
          liable for indirect, incidental, or consequential damages arising
          from your use of the service.
        </p>
      </LegalSection>

      <LegalSection heading="9. Governing law">
        <p>
          These terms are governed by the laws of [governing law /
          jurisdiction], without regard to conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to these terms">
        <p>
          We may update these terms from time to time. We&rsquo;ll update
          the date at the top of this page when we do; continued use after
          changes means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact us">
        <p>
          Questions about these terms? Use the{" "}
          <Link href="/#contact" className="font-medium text-accent hover:underline">
            contact form
          </Link>{" "}
          on our homepage.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
