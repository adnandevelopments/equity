"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/company";

export default function ContactForm() {
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
        name: String(fd.get("name") ?? "").trim(),
        email: String(fd.get("email") ?? "").trim(),
        company: String(fd.get("company") ?? "").trim(),
        phone: String(fd.get("phone") ?? "").trim(),
        service: String(fd.get("service") ?? "").trim(),
        sector: String(fd.get("sector") ?? "").trim(),
        message: String(fd.get("message") ?? "").trim(),
        website: String(fd.get("website") ?? "").trim(),
        contact_started_at: startedAtRef.current,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) throw new Error(json.error || "Failed to send enquiry.");

      setSubmitted(true);
      form.reset();
      startedAtRef.current = Math.floor(Date.now() / 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send enquiry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="panel form"
      onSubmit={onSubmit}
      style={{ padding: 28 }}
      noValidate
    >
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            maxLength={160}
            autoComplete="email"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            maxLength={160}
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            maxLength={80}
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="service">Area of interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select one</option>
            <option>Investor Relations Strategy</option>
            <option>Corporate Communications</option>
            <option>Capital Markets Advisory</option>
            <option>ESG & Sustainability Communications</option>
            <option>International Business Development</option>
            <option>General enquiry</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="sector">Sector</label>
          <input
            id="sector"
            name="sector"
            maxLength={140}
            placeholder="e.g. sustainability, healthcare, technology"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
        />
      </div>
      <div className="hidden-field" aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        className={`btn primary${submitting ? " is-loading" : ""}${submitted ? " is-success" : ""}`}
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? (
          <>
            <span className="btn-spinner" aria-hidden="true" />
            Sending…
          </>
        ) : submitted ? (
          "Enquiry sent ✓"
        ) : (
          "Send Enquiry →"
        )}
      </button>
      {submitted ? (
        <p className="form-status form-status-success" role="status">
          Thanks — your enquiry was sent to our team. We will follow up where
          there is a relevant fit.
        </p>
      ) : null}
      {error ? (
        <p className="form-status form-status-error" role="alert">
          {error}
        </p>
      ) : null}
      <p className="form-email">
        Prefer email? <a href={COMPANY.emailHref}>{COMPANY.email}</a>
      </p>
    </form>
  );
}
