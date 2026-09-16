"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type NewsletterFormProps = {
  source: "footer" | "popup";
  buttonLabel: string;
  onSuccess?: () => void;
};

export default function NewsletterForm({
  source,
  buttonLabel,
  onSuccess,
}: NewsletterFormProps) {
  const startedAtRef = useRef(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    startedAtRef.current = Math.floor(Date.now() / 1000);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload = {
        email: String(fd.get("newsletter_email") ?? "").trim(),
        source,
        newsletter_website: String(fd.get("newsletter_website") ?? "").trim(),
        newsletter_started_at: startedAtRef.current,
      };

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || "Failed to subscribe.");

      setSubmitted(true);
      form.reset();
      startedAtRef.current = Math.floor(Date.now() / 1000);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="newsletter-form-wrap">
      <form className="newsletter-form" onSubmit={onSubmit} noValidate>
        <div className="hidden-field" aria-hidden="true">
          <label>
            Website
            <input
              name="newsletter_website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <label>
          <span className="sr-only">Email address</span>
          <input
            type="email"
            name="newsletter_email"
            required
            maxLength={160}
            placeholder="Email address"
            autoComplete="email"
          />
        </label>
        <button
          type="submit"
          className={`${submitting ? "is-loading" : ""}${submitted ? " is-success" : ""}`.trim()}
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? (
            <>
              <span className="btn-spinner" aria-hidden="true" />
              Sending…
            </>
          ) : submitted ? (
            "Subscribed ✓"
          ) : (
            buttonLabel
          )}
        </button>
      </form>
      {submitted ? (
        <p className="form-status form-status-success" role="status">
          Thanks — you&apos;re subscribed. Check your inbox for a confirmation.
        </p>
      ) : null}
      {error ? (
        <p className="form-status form-status-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
