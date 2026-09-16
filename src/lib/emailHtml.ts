/** Shared HTML helpers for transactional emails — flat, open layout (inline styles). */

const BRAND = "#1648df";
const INK = "#07111f";
const MUTED = "#6a7b91";
const RULE = "#e5ebf5";
const PAGE = "#ffffff";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export function emailLayout(input: {
  title: string;
  preheader?: string;
  bodyHtml: string;
  footerNote?: string;
}) {
  const preheader = input.preheader
    ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(input.preheader)}</div>`
    : "";
  const footer =
    input.footerNote ?? "Vizio Marketing · Internal notification";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(input.title)}</title>
</head>
<body style="margin:0;padding:0;background:${PAGE};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${INK};">
  ${preheader}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE};">
    <tr>
      <td align="center" style="padding:32px 20px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td style="padding:0 0 28px;">
              <p style="margin:0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:${MUTED};">Vizio Marketing</p>
              <h1 style="margin:10px 0 0;font-size:22px;font-weight:650;line-height:1.25;color:${INK};">${escapeHtml(input.title)}</h1>
              <div style="margin:16px 0 0;width:36px;height:2px;background:${BRAND};"></div>
            </td>
          </tr>
          <tr>
            <td>
              ${input.bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:28px 0 0;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:${MUTED};">
                ${escapeHtml(footer)}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function emailSection(title: string, contentHtml: string) {
  return `<div style="margin:0 0 28px;">
  <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">${escapeHtml(title)}</p>
  ${contentHtml}
</div>`;
}

export function emailKvRows(
  rows: Array<{ label: string; value: string; href?: string }>,
) {
  const cells = rows
    .map((row) => {
      const valueHtml = row.href
        ? `<a href="${escapeHtml(row.href)}" style="color:${BRAND};text-decoration:none;">${escapeHtml(row.value)}</a>`
        : escapeHtml(row.value);
      return `<tr>
  <td style="padding:5px 16px 5px 0;vertical-align:top;font-size:14px;line-height:1.5;color:${MUTED};white-space:nowrap;">${escapeHtml(row.label)}</td>
  <td style="padding:5px 0;vertical-align:top;font-size:14px;line-height:1.5;color:${INK};">${valueHtml}</td>
</tr>`;
    })
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${cells}</table>`;
}

export function emailParagraph(text: string) {
  return `<p style="margin:0;font-size:14px;line-height:1.65;color:${INK};">${nl2br(text)}</p>`;
}
