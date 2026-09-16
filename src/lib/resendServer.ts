import { Resend } from "resend";
import { requireEnv } from "./env";

export function resendClient() {
  return new Resend(requireEnv("RESEND_API_KEY"));
}

export function emailFrom() {
  return requireEnv("EMAIL_FROM");
}

export function contactTo() {
  return requireEnv("CONTACT_TO");
}
