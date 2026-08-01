"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions";
import { Button } from "@/components/ui/Button";

const initialState: ContactState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-lg border border-border bg-canvas px-4 py-3 text-[0.9375rem] text-ink " +
  "placeholder:text-ink-muted transition-colors focus-visible:border-accent " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-border bg-accent-soft p-6"
      >
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
        <p className="text-[0.9375rem] text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jordan Lee"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@store.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="store" className="text-sm font-medium text-ink">
          Store name or domain{" "}
          <span className="font-normal text-ink-subtle">(optional)</span>
        </label>
        <input
          id="store"
          name="store"
          type="text"
          autoComplete="organization"
          placeholder="mystore.myshopify.com"
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us a bit about your store and what you'd like to know."
          className={fieldClass}
        />
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-danger/30 bg-danger-soft px-4 py-3 text-sm text-danger"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      )}

      <Button type="submit" size="lg" isLoading={isPending} className="w-full sm:w-auto">
        {isPending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
