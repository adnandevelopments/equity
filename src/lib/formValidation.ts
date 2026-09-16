export type FieldErrors = Record<string, string>;

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmailFormat(email: string) {
  const value = normalizeEmail(email);
  if (!value || value.length > 160) return false;
  return EMAIL_RE.test(value);
}

export function validateContactForm(input: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  const name = input.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (name.length > 120) errors.name = "Name must be 120 characters or fewer.";

  const email = normalizeEmail(input.email);
  if (!email) errors.email = "Please enter your email address.";
  else if (!isValidEmailFormat(email))
    errors.email = "Please enter a valid email address.";

  const phone = input.phone.trim();
  if (phone && !PHONE_RE.test(phone))
    errors.phone = "Please enter a valid phone number.";

  const company = input.company.trim();
  if (company.length > 160)
    errors.company = "Company must be 160 characters or fewer.";

  const message = input.message.trim();
  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters.";
  else if (message.length > 3000)
    errors.message = "Message must be 3000 characters or fewer.";

  return errors;
}

export function validateNewsletterForm(input: { email: string }): FieldErrors {
  const errors: FieldErrors = {};
  const email = normalizeEmail(input.email);

  if (!email) errors.email = "Please enter your email address.";
  else if (!isValidEmailFormat(email))
    errors.email = "Please enter a valid email address.";

  return errors;
}
