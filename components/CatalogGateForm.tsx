"use client";

import { useActionState } from "react";
import { submitCatalogGate, type FormState } from "@/app/actions";

const initial: FormState = { ok: false, message: "" };

type CatalogGateFormProps = {
  resource?: string;
  title?: string;
};

export function CatalogGateForm({
  resource = "company-profile",
  title = "Download company profile",
}: CatalogGateFormProps) {
  const [state, formAction, pending] = useActionState(submitCatalogGate, initial);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="resource" value={resource} />
      <p className="font-display text-xl text-espresso">{title}</p>
      <p className="text-sm text-muted">
        Enter your details to receive the PDF. Useful for tender packs and consultant
        submissions.
      </p>
      <div className="form-field">
        <label htmlFor="gate-name">Name</label>
        <input id="gate-name" name="name" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="gate-email">Email</label>
        <input id="gate-email" name="email" type="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="gate-company">Company</label>
        <input id="gate-company" name="company" type="text" required />
      </div>
      <button type="submit" className="btn btn-brass w-full" disabled={pending}>
        {pending ? "Submitting…" : "Get the PDF"}
      </button>
      {state.message ? (
        <p
          className={`text-sm ${state.ok ? "text-[var(--success)]" : "text-[var(--error)]"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
