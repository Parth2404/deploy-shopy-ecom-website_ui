import { VENDOR_SIGNUP_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Section id="contact" tone="surface" border>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
            Not ready to sign up? Talk to us first.
          </h2>
          <p className="mt-4 max-w-[40ch] text-base text-ink-muted">
            Tell us about your store and what you&rsquo;re hoping for. A real
            person on our team will reply by email.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <span>Ready to start now?</span>
            <ButtonLink href={VENDOR_SIGNUP_URL} variant="secondary" size="md">
              Sign up instead
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </Section>
  );
}
