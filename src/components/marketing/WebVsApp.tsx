import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SCREENSHOTS } from "@/lib/screenshots";
import { PhoneMockup } from "./PhoneMockup";

const ROWS = [
  {
    label: "Opening your store",
    web: "Search for it, or dig up a bookmark",
    app: "One tap on the icon, already installed",
  },
  {
    label: "Checkout, next time",
    web: "Re-enter details unless cookies remember you",
    app: "Already signed in — checkout is quick",
  },
  {
    label: "Reaching customers who left",
    web: "Mostly waits on email or paid ads",
    app: "A push notification reaches them directly",
  },
  {
    label: "Staying top of mind",
    web: "One browser tab among dozens",
    app: "An icon on their home screen, every day",
  },
];

export function WebVsApp() {
  return (
    <Section id="compare" tone="canvas" border>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-balance text-[clamp(1.75rem,2.4vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] text-ink">
                Right now, your store lives in a browser tab. We put it on
                the home screen instead.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink-muted">
                That&rsquo;s really the whole idea: the same store, the same
                products, the same Shopify checkout underneath — just
                sitting somewhere your customers open every day, the same
                way they open Instagram or their bank app.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)] sm:overflow-x-auto">
                <table className="block w-full border-collapse text-left text-sm sm:table sm:min-w-[32rem]">
                  <thead className="hidden sm:table-header-group">
                    <tr className="bg-surface-2">
                      <th scope="col" className="p-4 font-medium text-ink-muted">
                        &nbsp;
                      </th>
                      <th scope="col" className="p-4 font-semibold text-ink">
                        Your website today
                      </th>
                      <th scope="col" className="p-4 font-semibold text-accent">
                        With the app
                      </th>
                    </tr>
                  </thead>
                  <tbody className="block sm:table-row-group">
                    {ROWS.map((row) => (
                      <tr
                        key={row.label}
                        className="block border-t border-border p-4 first:border-t-0 sm:table-row sm:p-0 sm:first:border-t"
                      >
                        <th
                          scope="row"
                          className="block p-0 pb-2 align-top font-medium text-ink sm:table-cell sm:p-4"
                        >
                          {row.label}
                        </th>
                        <td className="block p-0 py-1.5 align-top text-ink-muted sm:table-cell sm:p-4">
                          <span className="flex items-start gap-2">
                            <X
                              className="mt-0.5 size-4 shrink-0 text-ink-subtle"
                              aria-hidden
                            />
                            {row.web}
                          </span>
                        </td>
                        <td className="block p-0 py-1.5 align-top text-ink sm:table-cell sm:p-4">
                          <span className="flex items-start gap-2">
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-accent"
                              aria-hidden
                            />
                            {row.app}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="justify-self-center lg:sticky lg:top-24">
            <PhoneMockup
              src={SCREENSHOTS.cart.src}
              alt={SCREENSHOTS.cart.alt}
              className="w-fit"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
