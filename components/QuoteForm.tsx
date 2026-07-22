"use client";

import { useActionState } from "react";
import { submitQuote, type FormState } from "@/app/actions";
import { StampBadge } from "@/components/StampBadge";

const initial: FormState = { ok: false, message: "" };

type QuoteFormProps = {
  source?: string;
  compact?: boolean;
  defaultProjectType?: string;
};

export function QuoteForm({
  source = "quote-form",
  compact = false,
  defaultProjectType = "",
}: QuoteFormProps) {
  const [state, formAction, pending] = useActionState(submitQuote, initial);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input type="hidden" name="source" value={source} />

      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" required autoComplete="organization" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="projectType">Project type</label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue={defaultProjectType}
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="Fire-Rated Door">Fire-Rated Door</option>
            <option value="Acoustic Door">Acoustic Door</option>
            <option value="Joinery">Joinery & Fit-Out</option>
            <option value="Mixed / Other">Mixed / Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="location">Project location</label>
          <input id="location" name="location" type="text" required placeholder="e.g. Dubai Marina" />
        </div>
        <div className={`form-field ${compact ? "" : "md:col-span-2"}`}>
          <label htmlFor="quantity">Estimated quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            placeholder="e.g. 120 FD60 doors"
          />
        </div>
        <div className={`form-field ${compact ? "" : "md:col-span-2"}`}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Share drawings, ratings, finishes, or programme notes."
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <StampBadge label="30 Years" />
        <StampBadge label="Civil Defense" />
        <StampBadge label="FD60–120" />
      </div>

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Request a Quote"}
      </button>

      {state.message ? (
        <p
          className={`text-sm ${state.ok ? "text-[var(--success)]" : "text-[var(--error)]"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <p className="text-xs text-muted">
        Submissions can be routed to email or CRM. Tell us your preferred sales pipeline
        integration when ready.
      </p>
    </form>
  );
}
