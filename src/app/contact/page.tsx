import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SiteShell from "@/components/SiteShell";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: `Contact ${COMPANY.name}`,
  description: `Contact ${COMPANY.name} to discuss investor relations, strategic communications, and corporate advisory needs.`,
  openGraph: {
    title: `Contact ${COMPANY.name}`,
    description: `Contact ${COMPANY.name} to discuss investor relations, strategic communications, and corporate advisory needs.`,
    url: "https://equityalliancevc.com/contact",
    images: ["/assets/vizio-marketing-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${COMPANY.name}`,
    description: `Contact ${COMPANY.name} to discuss investor relations, strategic communications, and corporate advisory needs.`,
    images: ["/assets/vizio-marketing-logo.png"],
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
            Tell us about your company and advisory needs. {COMPANY.name} will
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
              Tel.&nbsp;&nbsp;
              <a
                href={COMPANY.phoneHref}
                style={{ fontWeight: 850, color: "#1648df" }}
              >
                {COMPANY.phone}
              </a>
              <br />
              Email&nbsp;&nbsp;
              <a
                href={COMPANY.emailHref}
                style={{ fontWeight: 850, color: "#1648df" }}
              >
                {COMPANY.email}
              </a>
              <br />
              <br />
              <strong>Address</strong>
              <br />
              {COMPANY.addressLine1}
              <br />
              {COMPANY.addressLine2}
              <br />
              {COMPANY.addressCountry}
            </p>
            <p className="notice">
              Enquiries are sent securely to our team for follow-up.{" "}
              {COMPANY.name} does not provide investment advice, brokerage
              services, or investment recommendations.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
