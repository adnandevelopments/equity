"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";
import {
  type FieldErrors,
  validateContactForm,
} from "@/lib/formValidation";

const INTEREST_OPTIONS = [
  "Investor Relations Strategy",
  "Investor Awareness Campaigns",
  "Corporate Storytelling",
  "AI-Powered Investor Acquisition",
  "Capital Markets Advisory",
  "AI Market Intelligence",
  "General enquiry",
] as const;

const labelClass =
  "text-xs font-extrabold tracking-[-0.01em] text-[#263c57] sm:text-[13px]";
const controlClass =
  "h-10 rounded-xl border-[rgba(6,19,38,0.14)] bg-white px-3.5 text-sm font-medium leading-none text-[#07111f] shadow-none placeholder:font-normal placeholder:text-[#8a9bb0] focus-visible:border-[#174dff] focus-visible:ring-[3px] focus-visible:ring-[rgba(23,77,255,0.15)] sm:h-11 sm:rounded-2xl sm:px-4 sm:text-[15px]";
const fieldErrorClass =
  "m-0 text-[12px] font-semibold leading-snug text-[#b42318]";

export default function ContactForm() {
  const startedAtRef = useRef(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serviceValue, setServiceValue] = useState("");

  useEffect(() => {
    startedAtRef.current = Math.floor(Date.now() / 1000);
  }, []);

  function clearFieldError(field: string) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service: serviceValue.trim(),
      sector: String(fd.get("sector") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      contact_started_at: startedAtRef.current,
    };

    const nextErrors = validateContactForm(values);
    setFieldErrors(nextErrors);
    setError(null);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>(
        "[aria-invalid='true']",
      );
      firstInvalid?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || "Failed to send enquiry.");

      setSubmitted(true);
      form.reset();
      setServiceValue("");
      setFieldErrors({});
      startedAtRef.current = Math.floor(Date.now() / 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send enquiry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="panel grid gap-4 p-5 sm:gap-5 sm:p-7"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name" className={labelClass}>
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={controlClass}
            onChange={() => clearFieldError("name")}
          />
          {fieldErrors.name ? (
            <p id="name-error" className={fieldErrorClass} role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className={labelClass}>
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            maxLength={160}
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={controlClass}
            onChange={() => clearFieldError("email")}
          />
          {fieldErrors.email ? (
            <p id="email-error" className={fieldErrorClass} role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="grid gap-2">
          <Label htmlFor="company" className={labelClass}>
            Company
          </Label>
          <Input
            id="company"
            name="company"
            maxLength={160}
            autoComplete="organization"
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={
              fieldErrors.company ? "company-error" : undefined
            }
            className={controlClass}
            onChange={() => clearFieldError("company")}
          />
          {fieldErrors.company ? (
            <p id="company-error" className={fieldErrorClass} role="alert">
              {fieldErrors.company}
            </p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className={labelClass}>
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            maxLength={80}
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className={controlClass}
            onChange={() => clearFieldError("phone")}
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className={fieldErrorClass} role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="service" className={labelClass}>
            Area of interest
          </Label>
          <Select
            value={serviceValue || undefined}
            onValueChange={(value) => setServiceValue(value ?? "")}
          >
            <SelectTrigger
              id="service"
              className={cn(
                controlClass,
                "w-full min-w-0 justify-between whitespace-nowrap data-[size=default]:h-10 sm:data-[size=default]:h-11 *:data-[slot=select-value]:line-clamp-none *:data-[slot=select-value]:whitespace-nowrap *:data-[slot=select-value]:overflow-visible",
              )}
            >
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              align="start"
              className="z-[80] min-w-[var(--radix-select-trigger-width)] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border-[rgba(6,19,38,0.12)] bg-white p-1.5 shadow-lg"
            >
              {INTEREST_OPTIONS.map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="cursor-pointer rounded-lg py-2.5 pl-3 pr-9 text-[13px] font-medium whitespace-nowrap text-[#07111f] focus:bg-[#eef3ff] focus:text-[#07111f] sm:text-sm"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="sector" className={labelClass}>
            Sector
          </Label>
          <Input
            id="sector"
            name="sector"
            maxLength={140}
            placeholder="e.g. sustainability, healthcare, technology"
            className={controlClass}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message" className={labelClass}>
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "message-error" : undefined
          }
          className="min-h-[120px] max-h-[220px] resize-y overflow-y-auto rounded-xl border-[rgba(6,19,38,0.14)] bg-white px-3.5 py-3 text-sm font-medium text-[#07111f] shadow-none placeholder:font-normal placeholder:text-[#8a9bb0] focus-visible:border-[#174dff] focus-visible:ring-[3px] focus-visible:ring-[rgba(23,77,255,0.15)] sm:min-h-[138px] sm:max-h-[280px] sm:rounded-2xl sm:px-4 sm:text-[15px]"
          onChange={() => clearFieldError("message")}
        />
        {fieldErrors.message ? (
          <p id="message-error" className={fieldErrorClass} role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="hidden-field" aria-hidden="true">
        <Label htmlFor="website-honeypot">Leave this empty</Label>
        <Input
          id="website-honeypot"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        size="lg"
        className={cn(
          "h-11 rounded-xl px-5 text-sm font-extrabold text-white shadow-none sm:h-12 sm:rounded-2xl sm:px-6 sm:text-[15px]",
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
          "Enquiry sent ✓"
        ) : (
          "Send Enquiry →"
        )}
      </Button>

      {submitted ? (
        <p
          className="m-0 text-[13px] font-semibold leading-relaxed text-[#0f6b45]"
          role="status"
        >
          Thanks — your enquiry was sent to our team. We will follow up where
          there is a relevant fit.
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

      <p className="m-0 text-sm leading-relaxed text-[#6a7b91]">
        Prefer email?{" "}
        <a
          href={COMPANY.emailHref}
          className="font-extrabold text-[#33506f] underline decoration-[rgba(51,80,111,0.28)] underline-offset-[3px] hover:text-[#174dff] hover:decoration-[rgba(23,77,255,0.5)]"
        >
          {COMPANY.email}
        </a>
      </p>
    </form>
  );
}
