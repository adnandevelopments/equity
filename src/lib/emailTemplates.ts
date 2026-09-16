import {
  emailKvRows,
  emailLayout,
  emailParagraph,
  emailSection,
} from "./emailHtml";
import { COMPANY } from "./company";

export type ContactEmailInput = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  sector: string;
  message: string;
};

export type SubscribeEmailInput = {
  email: string;
  source: string;
};

export function buildContactAdminEmail(input: ContactEmailInput) {
  const subject = `New contact enquiry${input.name ? ` — ${input.name}` : ""}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${input.name || "—"}`,
    `Email: ${input.email}`,
    `Company: ${input.company || "—"}`,
    `Phone: ${input.phone || "—"}`,
    `Area of interest: ${input.service || "—"}`,
    `Sector: ${input.sector || "—"}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  const html = emailLayout({
    title: "New contact enquiry",
    preheader: `${input.name || input.email}: ${input.message.slice(0, 80)}`,
    bodyHtml: [
      emailSection(
        "Contact",
        emailKvRows([
          { label: "Name", value: input.name || "—" },
          { label: "Email", value: input.email, href: `mailto:${input.email}` },
          { label: "Company", value: input.company || "—" },
          { label: "Phone", value: input.phone || "—" },
        ]),
      ),
      emailSection(
        "Enquiry",
        emailKvRows([
          { label: "Area of interest", value: input.service || "—" },
          { label: "Sector", value: input.sector || "—" },
        ]),
      ),
      emailSection("Message", emailParagraph(input.message)),
    ].join(""),
  });

  return { subject, text, html };
}

export function buildSubscribeAdminEmail(input: SubscribeEmailInput) {
  const sourceLabel = input.source || "website";
  const subject = `New insights subscriber — ${sourceLabel}`;
  const text = [
    "New insights newsletter signup",
    "",
    `Email: ${input.email}`,
    `Source: ${sourceLabel}`,
  ].join("\n");

  const html = emailLayout({
    title: "New insights subscriber",
    preheader: `${input.email} signed up via ${sourceLabel}`,
    bodyHtml: [
      emailSection(
        "Subscriber",
        emailKvRows([
          { label: "Email", value: input.email, href: `mailto:${input.email}` },
          { label: "Source", value: sourceLabel },
        ]),
      ),
    ].join(""),
  });

  return { subject, text, html };
}

export function buildSubscribeConfirmationEmail(input: { email: string }) {
  const subject = `You're subscribed to ${COMPANY.name} insights`;
  const text = [
    `Thanks for subscribing to ${COMPANY.name} insights.`,
    "",
    "You'll receive occasional notes on market visibility, investor communication, and growth advisory.",
    "",
    `If you have questions, reply to this email or write to ${COMPANY.email}.`,
    "",
    `— ${COMPANY.name}`,
  ].join("\n");

  const html = emailLayout({
    title: "You're subscribed",
    preheader: `Thanks for joining ${COMPANY.name} insights updates.`,
    footerNote: `${COMPANY.name} · Insights updates`,
    bodyHtml: [
      emailSection(
        "Welcome",
        emailParagraph(
          `Thanks for subscribing. You'll receive occasional notes on market visibility, investor communication, and growth advisory.`,
        ),
      ),
      emailSection(
        "Questions?",
        emailKvRows([
          {
            label: "Email",
            value: COMPANY.email,
            href: COMPANY.emailHref,
          },
        ]),
      ),
    ].join(""),
  });

  return { subject, text, html };
}
