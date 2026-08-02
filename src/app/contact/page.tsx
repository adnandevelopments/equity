import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Equity Alliance",
  description:
    "Contact Equity Alliance to discuss investor relations, strategic communications, and corporate advisory needs.",
  openGraph: {
    title: "Contact Equity Alliance",
    description:
      "Contact Equity Alliance to discuss investor relations, strategic communications, and corporate advisory needs.",
    url: "https://equityalliancevc.com/contact",
    images: ["/assets/equity-alliance-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Equity Alliance",
    description:
      "Contact Equity Alliance to discuss investor relations, strategic communications, and corporate advisory needs.",
    images: ["/assets/equity-alliance-logo.png"],
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Contact</div>
          <h1 className="reveal delay-1">Schedule a Consultation</h1>
          <p className="reveal delay-2">
            Tell us about your company and advisory needs. Equity Alliance will
            review your enquiry and respond where there is a relevant fit.
          </p>
        </div>
      </header>

      <section id="contact-form">
        <div className="wrap two-grid">
          <div className="card">
            <h2>Contact Our Team</h2>
            <p>
              Use the form to share your company, sector, and priorities across
              investor communication, corporate positioning, or international
              business development.
            </p>
            <p style={{ margin: "0 0 16px", lineHeight: 1.85 }}>
              <strong>Speak with our team</strong>
              <br />
              Canada&nbsp;&nbsp;
              <a
                href={COMPANY.phoneHref}
                style={{ fontWeight: 850, color: "#1648df" }}
              >
                {COMPANY.phone}
              </a>
            </p>
            <p className="notice">
              Submissions are saved securely for follow-up. Equity Alliance does
              not provide investment advice, brokerage services, or investment
              recommendations.
            </p>
          </div>

          <form
            className="panel form"
            method="post"
            action="/contact-submit"
            style={{ padding: 28 }}
          >
            <input type="hidden" name="contact_started_at" value="0" />
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
            <div className="hidden-field">
              <label>
                Leave this empty
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button className="btn primary" type="submit">
              Send Enquiry →
            </button>
            <p className="form-email">
              Prefer email?{" "}
              <a href="mailto:hello@equityalliancevc.com">
                hello@equityalliancevc.com
              </a>
            </p>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
