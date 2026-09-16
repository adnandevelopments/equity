import { NextResponse } from "next/server";
import {
  buildContactAdminEmail,
} from "@/lib/emailTemplates";
import {
  clampField,
  isNonEmptyString,
  isSpamSubmission,
  normalizeEmail,
} from "@/lib/formSpam";
import { isValidEmailFormat } from "@/lib/formValidation";
import { contactTo, emailFrom, resendClient } from "@/lib/resendServer";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  sector?: string;
  message?: string;
  website?: string;
  contact_started_at?: string | number;
};

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    isSpamSubmission({
      honeypot: body.website,
      startedAt: body.contact_started_at,
    })
  ) {
    return NextResponse.json({ ok: true });
  }

  const email = normalizeEmail(body.email ?? "");
  if (!isValidEmailFormat(email)) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 },
    );
  }

  const name = clampField(body.name ?? "", 120);
  const message = clampField(body.message ?? "", 3000);
  if (!isNonEmptyString(name) || name.length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!isNonEmptyString(message) || message.length < 10) {
    return NextResponse.json(
      { error: "Message is required" },
      { status: 400 },
    );
  }

  const payload = {
    name,
    email,
    company: clampField(body.company ?? "", 160),
    phone: clampField(body.phone ?? "", 80),
    service: clampField(body.service ?? "", 160),
    sector: clampField(body.sector ?? "", 140),
    message,
  };

  const { subject, text, html } = buildContactAdminEmail(payload);

  try {
    const resend = resendClient();
    const { error } = await resend.emails.send({
      from: emailFrom(),
      to: contactTo(),
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Contact send failed:", err);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
