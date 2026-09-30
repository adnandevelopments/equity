import {
  getFaqJsonLd,
  getOrganizationJsonLd,
  getProfessionalServiceJsonLd,
  getWebsiteJsonLd,
} from "@/lib/structuredData";

export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export {
  getFaqJsonLd,
  getOrganizationJsonLd,
  getProfessionalServiceJsonLd,
  getWebsiteJsonLd,
};
