import { NextResponse } from "next/server";
import {
  buildSubscribeAdminEmail,
  buildSubscribeConfirmationEmail,
} from "@/lib/emailTemplates";
import {
  clampField,
  isSpamSubmission,
  isValidEmail,
  normalizeEmail,
} from "@/lib/formSpam";
import { contactTo, emailFrom, resendClient } from "@/lib/resendServer";

type SubscribeBody = {
  email?: string;
  source?: string;
  newsletter_website?: string;
  newsletter_started_at?: string | number;
};

export async function POST(req: Request) {
  let body: SubscribeBody;
  try {
    body = (await req.json()) as SubscribeBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    isSpamSubmission({
      honeypot: body.newsletter_website,
      startedAt: body.newsletter_started_at,
    })
  ) {
    return NextResponse.json({ ok: true });
  }

  const email = normalizeEmail(body.email ?? "");
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 },
    );
  }

  const source = clampField(body.source ?? "website", 40) || "website";
  const admin = buildSubscribeAdminEmail({ email, source });
  const confirmation = buildSubscribeConfirmationEmail({ email });

  try {
    const resend = resendClient();
    const from = emailFrom();

    const adminResult = await resend.emails.send({
      from,
      to: contactTo(),
      replyTo: email,
      subject: admin.subject,
      text: admin.text,
      html: admin.html,
    });

    if (adminResult.error) {
      console.error("Resend subscribe admin error:", adminResult.error);
      return NextResponse.json(
        { error: "Unable to complete signup right now." },
        { status: 500 },
      );
    }

    const confirmResult = await resend.emails.send({
      from,
      to: email,
      replyTo: contactTo(),
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });

    if (confirmResult.error) {
      // Admin was notified; don't fail the signup UX if confirmation fails.
      console.error(
        "Resend subscribe confirmation error:",
        confirmResult.error,
      );
    }
  } catch (err) {
    console.error("Subscribe send failed:", err);
    return NextResponse.json(
      { error: "Unable to complete signup right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
