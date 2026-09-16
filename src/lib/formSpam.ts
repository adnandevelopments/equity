const MIN_SUBMIT_SECONDS = 2;

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string) {
  return Boolean(email) && email.includes("@") && !email.includes(" ");
}

export function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

/** Returns true when the request looks like a bot (honeypot filled or too fast). */
export function isSpamSubmission(input: {
  honeypot?: string;
  startedAt?: string | number;
}) {
  if (isNonEmptyString(input.honeypot)) return true;

  const started =
    typeof input.startedAt === "number"
      ? input.startedAt
      : Number(input.startedAt);
  if (!Number.isFinite(started) || started <= 0) return true;

  const elapsed = Math.floor(Date.now() / 1000) - started;
  if (elapsed < MIN_SUBMIT_SECONDS) return true;

  return false;
}

export function clampField(value: string, max: number) {
  return value.trim().slice(0, max);
}
