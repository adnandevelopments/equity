"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  type FieldErrors,
  validateNewsletterForm,
} from "@/lib/formValidation";

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
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    startedAtRef.current = Math.floor(Date.now() / 1000);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("newsletter_email") ?? "").trim();
    const payload = {
      email,
      source,
      newsletter_website: String(fd.get("newsletter_website") ?? "").trim(),
      newsletter_started_at: startedAtRef.current,
    };

    const nextErrors = validateNewsletterForm({ email });
    setFieldErrors(nextErrors);
    setError(null);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      form
        .querySelector<HTMLInputElement>(`#newsletter-email-${source}`)
        ?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || "Failed to subscribe.");

      setSubmitted(true);
      form.reset();
      setFieldErrors({});
      startedAtRef.current = Math.floor(Date.now() / 1000);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className={cn(
        "grid gap-2",
        source === "footer" ? "max-w-[360px]" : "w-full",
      )}
    >
      <form
        className={cn(
          "flex gap-2",
          source === "footer"
            ? "flex-row flex-wrap items-center"
            : "w-full flex-col sm:flex-row sm:items-center",
        )}
        onSubmit={onSubmit}
        noValidate
      >
        <div className="hidden-field" aria-hidden="true">
          <Label>
            Website
            <Input
              name="newsletter_website"
              tabIndex={-1}
              autoComplete="off"
            />
          </Label>
        </div>
        <Label htmlFor={`newsletter-email-${source}`} className="sr-only">
          Email address
        </Label>
        <Input
          id={`newsletter-email-${source}`}
          type="email"
          name="newsletter_email"
          required
          maxLength={160}
          placeholder="Email address"
          autoComplete="email"
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={
            fieldErrors.email ? `newsletter-email-error-${source}` : undefined
          }
          className={cn(
            "h-11 border-[rgba(6,19,38,0.14)] bg-white px-4 text-sm font-medium text-[#07111f] shadow-none placeholder:font-normal placeholder:text-[#8a9bb0] focus-visible:border-[#174dff] focus-visible:ring-[3px] focus-visible:ring-[rgba(23,77,255,0.15)]",
            source === "footer"
              ? "w-[220px] max-w-full shrink-0 rounded-full"
              : "w-full min-w-0 rounded-2xl sm:rounded-full",
          )}
          onChange={() =>
            setFieldErrors((prev) => {
              if (!prev.email) return prev;
              const next = { ...prev };
              delete next.email;
              return next;
            })
          }
        />
        <Button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className={cn(
            "h-11 shrink-0 px-4 text-sm font-extrabold text-white shadow-none",
            source === "footer"
              ? "rounded-full"
              : "w-full rounded-2xl sm:w-auto sm:rounded-full",
            submitted
              ? "bg-[#0f6b45] hover:bg-[#0f6b45]"
              : "bg-[#174dff] hover:bg-[#143fd0]",
          )}
        >
          {submitting ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Sending…
            </>
          ) : submitted ? (
            "Subscribed ✓"
          ) : (
            buttonLabel
          )}
        </Button>
      </form>
      {fieldErrors.email ? (
        <p
          id={`newsletter-email-error-${source}`}
          className="m-0 text-[12px] font-semibold leading-snug text-[#b42318]"
          role="alert"
        >
          {fieldErrors.email}
        </p>
      ) : null}
      {submitted ? (
        <p
          className="m-0 text-[13px] font-semibold leading-relaxed text-[#0f6b45]"
          role="status"
        >
          Thanks — you&apos;re subscribed. Check your inbox for a confirmation.
        </p>
      ) : null}
      {error ? (
        <p
          className="m-0 text-[13px] font-semibold leading-relaxed text-[#b42318]"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
