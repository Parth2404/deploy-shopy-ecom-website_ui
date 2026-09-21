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
    <LegalLayout title="Privacy Policy" updated="September 21, 2026">
      <p>
        This Privacy Policy explains how {SITE_NAME} collects, uses, stores,
        protects, and shares information when you use our website, install and
        use our Shopify app, connect your Shopify store, or use the {SITE_NAME}{" "}
        vendor interface to create and manage a mobile application for your
        Shopify store.
      </p>
      <p>
        {SITE_NAME} is a platform that allows Shopify merchants to create and
        operate branded Android and iOS mobile applications using their Shopify
        store as the backend. {SITE_NAME} connects to your Shopify store and
        uses the information and services you authorize to build and operate the
        mobile application.
      </p>

      <LegalSection heading="1. Information we collect">
        <h3 className="text-base font-semibold text-ink">Account information</h3>
        <p>
          When you create or use a {SITE_NAME} account, we may collect your
          name, email address, password, store name, and Shopify store
          domain (<code>*.myshopify.com</code>).
        </p>
        <p>
          Passwords are stored using secure hashing mechanisms and are not
          stored in plain text.
        </p>
        <h3 className="text-base font-semibold text-ink">Shopify store data</h3>
        <p>
          When you connect your Shopify store, {SITE_NAME} accesses
          information through Shopify&rsquo;s official APIs so that we can
          build and operate your mobile application. Depending on the
          features you enable, this may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Product catalog and product information</li>
          <li>Collections and related store information</li>
          <li>Cart information</li>
          <li>
            Customer account information required for customer authentication
            and account functionality
          </li>
          <li>
            Checkout-related information required for supported checkout
            functionality
          </li>
          <li>
            Abandoned checkout information when cart-recovery functionality is
            enabled
          </li>
          <li>
            Other Shopify store information required to provide features that
            you explicitly enable
          </li>
        </ul>
        <p>
          Shopify remains the source of the store and product information used
          by your mobile application.
        </p>
        <h3 className="text-base font-semibold text-ink">
          Google account and Google API data
        </h3>
        <p>
          {SITE_NAME} uses Google OAuth to allow Shopify merchants to
          securely authorize specific Google services from the {SITE_NAME}{" "}
          vendor interface. Google authentication and authorization are used
          primarily for the following purposes:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Firebase integration:</strong> to access the Google/Firebase
            services required to create or configure a Firebase project
            associated with the merchant&rsquo;s mobile application.
          </li>
          <li>
            <strong>Google Play Console integration:</strong> to connect the
            merchant&rsquo;s Google Play Console account with {SITE_NAME} so
            that the merchant can publish the Android App Bundle (AAB) generated
            for their mobile application directly through the {SITE_NAME} vendor
            interface.
          </li>
        </ol>
        <p>
          Depending on the Google permissions you authorize, Google may provide{" "}
          {SITE_NAME} with information associated with your Google account and
          the specific Google services or resources you authorize. This may
          include your Google account identity information, account identifier,
          authorization information, and information required to access the
          Firebase or Google Play services that you have explicitly authorized.
        </p>
        <p>
          {SITE_NAME} only requests and uses the Google permissions necessary to
          provide these integrations.
        </p>
        <p>
          {SITE_NAME} does <strong>not</strong> access the contents of your
          personal Gmail, Google Drive, Google Photos, contacts, or other Google
          services unless a specific permission is requested, explicitly
          authorized by you, and required for a feature provided by {SITE_NAME}.
        </p>
        <h3 className="text-base font-semibold text-ink">Contact form data</h3>
        <p>
          If you use the contact form on our website, we may collect your
          name, email address, store information if provided, and the
          contents of your message.
        </p>
      </LegalSection>

      <LegalSection heading="2. How we use this information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Build, host, operate, and maintain the mobile application created
            for your Shopify store.
          </li>
          <li>
            Synchronize your mobile application with your live Shopify store.
          </li>
          <li>
            Display your Shopify products, collections, and other supported
            store information in your mobile application.
          </li>
          <li>
            Support customer account, cart, checkout, and other enabled Shopify
            functionality.
          </li>
          <li>
            Send cart-recovery push notifications where this feature has been
            enabled.
          </li>
          <li>
            Provide Firebase integration and configuration required for your
            mobile application.
          </li>
          <li>
            Connect your Google Play Console account to {SITE_NAME} when you
            authorize this integration.
          </li>
          <li>
            Upload or submit the generated Android App Bundle (AAB) to Google
            Play Console when you initiate publishing through the {SITE_NAME}{" "}
            vendor interface.
          </li>
          <li>
            Authenticate and authorize access to services that you explicitly
            connect to {SITE_NAME}.
          </li>
          <li>Respond to support and contact requests.</li>
          <li>
            Maintain the security of {SITE_NAME} and maintain appropriate
            operational and audit records.
          </li>
          <li>
            Diagnose, troubleshoot, and improve the functionality of the{" "}
            {SITE_NAME} platform.
          </li>
        </ul>
        <h3 className="text-base font-semibold text-ink">Use of Google user data</h3>
        <p>
          Google user data accessed through Google OAuth is used only to
          provide the Google/Firebase and Google Play functionality that you
          explicitly request and authorize. For example, Google
          authorization may be used to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Determine which Google account has authorized the connection.</li>
          <li>
            Obtain the authorization required to access the Firebase services
            associated with your account.
          </li>
          <li>
            Create or configure Firebase resources required for your mobile
            application.
          </li>
          <li>
            Establish the authorized connection between {SITE_NAME} and your
            Google Play Console.
          </li>
          <li>
            Perform Google Play publishing actions that you initiate through the{" "}
            {SITE_NAME} vendor interface.
          </li>
          <li>Maintain the authorization required for these integrations.</li>
        </ul>
        <p>
          We do not use Google user data for targeted advertising, personalized
          advertising, retargeting, selling to data brokers, providing
          information to data resellers, determining creditworthiness, lending
          purposes, or other unrelated purposes.
        </p>
        <p>
          We do not use Google user data to develop, improve, or train
          generalized or non-personalized artificial intelligence or
          machine-learning models.
        </p>
      </LegalSection>

      <LegalSection heading="3. Google OAuth authorization">
        <p>
          {SITE_NAME} uses Google&rsquo;s OAuth authorization mechanism so that
          you remain in control of which Google services {SITE_NAME} can access.
          When you choose to connect a Google service:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>You are redirected to Google&rsquo;s authorization interface.</li>
          <li>Google displays the permissions requested by {SITE_NAME}.</li>
          <li>You decide whether to grant those permissions.</li>
          <li>
            {SITE_NAME} receives the authorization information necessary to
            perform the services you have authorized.
          </li>
          <li>
            {SITE_NAME} uses that authorization only for the functionality
            described in this Privacy Policy.
          </li>
        </ol>
        <p>
          You may revoke {SITE_NAME}&rsquo;s access to your Google account
          through the applicable Google account or service settings. Revoking
          authorization may prevent {SITE_NAME} from performing Firebase or
          Google Play actions that require that authorization.
        </p>
      </LegalSection>

      <LegalSection heading="4. How we protect your data">
        <p>
          We use reasonable technical and organizational safeguards designed to
          protect your information against unauthorized access, disclosure,
          alteration, or destruction. Our security measures may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Encryption of sensitive credentials and access tokens at rest.
          </li>
          <li>
            Secure transmission of information using encrypted connections.
          </li>
          <li>
            Secure server-side processing of Shopify and Google authorization
            credentials.
          </li>
          <li>
            Restricting access to production systems and data to authorized
            personnel.
          </li>
          <li>
            Authentication and authorization controls for administrative access.
          </li>
          <li>
            Logging and monitoring of relevant system activity for security and
            operational purposes.
          </li>
        </ul>
        <p>
          Shopify access tokens are encrypted at rest and decrypted only on our
          server when a request to Shopify is required. They are not provided to
          the mobile application or exposed to your customers.
        </p>
        <p>
          Google OAuth credentials and authorization information are handled
          through our server-side systems and are not intentionally exposed to
          the end users of the mobile application.
        </p>
      </LegalSection>

      <LegalSection heading="5. Who we share data with">
        <p>We do not sell your personal information or Google user data.</p>
        <p>
          We may share or transfer information only where necessary to provide,
          operate, secure, or support {SITE_NAME} and the services you have
          requested. Depending on the features you use, this may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Shopify</strong> &mdash; as the source of your Shopify store
            data and for Shopify platform functionality.
          </li>
          <li>
            <strong>Google/Firebase</strong> &mdash; when you authorize{" "}
            {SITE_NAME} to create or configure Firebase resources for your
            mobile application.
          </li>
          <li>
            <strong>Google Play Console / Google Play services</strong> &mdash;
            when you authorize {SITE_NAME} to connect to your Play Console
            account and publish your Android application.
          </li>
          <li>
            <strong>Push-notification providers</strong> &mdash; when
            cart-recovery or other supported push-notification functionality is
            enabled.
          </li>
          <li>
            <strong>Transactional email providers</strong> &mdash; for
            account-related, transactional, or support communications.
          </li>
          <li>
            <strong>Hosting and database providers</strong> &mdash; for hosting
            and operating {SITE_NAME}.
          </li>
          <li>
            <strong>Other service providers</strong> &mdash; where reasonably
            necessary to provide, secure, maintain, or support functionality
            that you have requested.
          </li>
        </ul>
        <p>
          We do not transfer or disclose Google user data to third parties for
          advertising, selling data, data brokerage, credit assessment, lending,
          or other purposes unrelated to providing or improving {SITE_NAME}{" "}
          functionality.
        </p>
        <p>
          Where service providers process information on our behalf, they are
          expected to process that information only for the services they
          provide to {SITE_NAME} and in accordance with applicable contractual
          and security requirements.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data retention">
        <p>
          We retain account, Shopify, and other service data for as long as
          necessary to provide {SITE_NAME} and the features you have enabled,
          maintain your account, comply with legal obligations, resolve
          disputes, maintain security records, and enforce our agreements.
        </p>
        <p>
          For Google user data, we retain only the information and authorization
          credentials necessary to provide the Google services you have
          authorized.
        </p>
        <p>
          When you disconnect a Google integration, we stop using the associated
          Google authorization for new operations, subject to any actions
          already initiated by you and any information that we are legally
          required to retain.
        </p>
        <p>
          When you disconnect your Shopify store or close your {SITE_NAME}{" "}
          account, we stop accessing new Shopify data and will delete or
          anonymize stored information within a reasonable period, except where
          retention is required or permitted for legal, accounting, security,
          fraud-prevention, dispute-resolution, or other legitimate operational
          purposes.
        </p>
      </LegalSection>

      <LegalSection heading="7. Data deletion">
        <p>
          You may request deletion of your {SITE_NAME} account and associated
          personal information.
        </p>
        <p>
          You may also request deletion of information associated with your
          Google integrations by contacting us through the contact information
          provided below.
        </p>
        <p>
          When a deletion request is received, we will delete or anonymize
          applicable information within a reasonable period, subject to
          information that we are required or permitted to retain by law or that
          is reasonably necessary for security, fraud prevention, dispute
          resolution, or other legitimate business purposes.
        </p>
        <p>
          Disconnecting a Google account or integration may also be used to stop{" "}
          {SITE_NAME} from accessing the relevant Google services. Information
          that is no longer required for the provision of the service will be
          deleted or anonymized in accordance with our retention practices.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your rights">
        <p>Depending on applicable law, you may request to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access the personal information we hold about you.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Delete your account and associated personal information.</li>
          <li>Disconnect an authorized Google integration.</li>
          <li>Request information about how your data is processed.</li>
          <li>
            Request deletion of information associated with your Google
            integration.
          </li>
        </ul>
        <p>
          You can make a request through the{" "}
          <Link
            href="/#contact"
            className="font-medium text-accent hover:underline"
          >
            contact form
          </Link>{" "}
          on the {SITE_NAME} website.
        </p>
      </LegalSection>

      <LegalSection heading="9. Children's privacy">
        <p>
          {SITE_NAME} is a business tool intended for Shopify merchants and
          business users. It is not directed at children, and we do not
          knowingly collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="10. Third-party services">
        <p>
          {SITE_NAME} relies on third-party platforms and services, including
          Shopify, Google/Firebase, Google Play services, hosting providers,
          database providers, notification providers, and email providers.
        </p>
        <p>
          Your use of those third-party services may also be subject to their
          respective terms and privacy policies.
        </p>
        <p>
          {SITE_NAME} does not control the privacy practices of third-party
          services, and you should review their applicable policies when using
          those services.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes to this privacy policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to {SITE_NAME}, our services, or our data-processing practices.
        </p>
        <p>
          If we make material changes, we will update the &ldquo;Last
          updated&rdquo; date at the top of this page and, where appropriate,
          provide additional notice.
        </p>
        <p>
          You should periodically review this Privacy Policy to remain informed
          about how we handle your information.
        </p>
      </LegalSection>

      <LegalSection heading="12. Contact us">
        <p>
          If you have questions about this Privacy Policy, your personal
          information, Google authorization, Shopify data, or a data deletion
          request, please contact us through the{" "}
          <Link
            href="/#contact"
            className="font-medium text-accent hover:underline"
          >
            contact form
          </Link>{" "}
          available on the {SITE_NAME} website.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
