import { COMPANY } from "@/lib/company";

const SERVICES = [
  {
    name: "Investor Relations & Shareholder Communications",
    description:
      "Investor relations strategy, investment thesis development, corporate messaging, presentations, and shareholder communications for public companies.",
    url: `${COMPANY.siteUrl}/services`,
  },
  {
    name: "AI-Powered Investor Acquisition",
    description:
      "AI-supported investor discovery, audience segmentation, qualified investor email marketing, and campaign-generated investor leads.",
    url: `${COMPANY.siteUrl}/services`,
  },
  {
    name: "Digital Investor Awareness Campaigns",
    description:
      "Multi-platform investor awareness campaigns across social, search, financial media, influencers, and retargeting for OTCQB, OTCQX, and Nasdaq companies.",
    url: `${COMPANY.siteUrl}/investor-awareness`,
  },
  {
    name: "Capital Markets Advisory",
    description:
      "Capital markets strategy, OTCQB and OTCQX advisory, Nasdaq preparation, shareholder growth strategy, and roadshow support.",
    url: `${COMPANY.siteUrl}/services`,
  },
  {
    name: "Corporate Storytelling",
    description:
      "Investor narrative development that turns complex company information into a clear investment story.",
    url: `${COMPANY.siteUrl}/services`,
  },
] as const;

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY.siteUrl}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.name,
    url: COMPANY.siteUrl,
    logo: `${COMPANY.siteUrl}/assets/vizio-marketing-logo.png`,
    image: `${COMPANY.siteUrl}/assets/vizio-marketing-logo.png`,
    foundingDate: String(COMPANY.establishedYear),
    description:
      "Vizio Marketing helps OTCQB, OTCQX, Nasdaq, and growth-stage public companies increase investor awareness, attract investors, improve shareholder engagement, and access capital through capital markets expertise and AI-powered investor growth campaigns.",
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.addressLine1,
      addressLocality: "Laval",
      addressRegion: "Quebec",
      postalCode: "H7W 2H7",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        contactType: "customer service",
        areaServed: ["CA", "US"],
        availableLanguage: ["English", "French"],
      },
    ],
    knowsAbout: [
      "Investor relations",
      "Investor awareness campaigns",
      "OTCQB marketing",
      "OTCQX marketing",
      "Nasdaq small-cap investor communications",
      "AI-powered investor acquisition",
      "Capital markets advisory",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.siteUrl}/#website`,
    url: COMPANY.siteUrl,
    name: COMPANY.name,
    publisher: { "@id": `${COMPANY.siteUrl}/#organization` },
    inLanguage: "en-CA",
  };
}

export function getProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${COMPANY.siteUrl}/#service`,
    name: COMPANY.name,
    url: COMPANY.siteUrl,
    image: `${COMPANY.siteUrl}/assets/vizio-marketing-logo.png`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
    foundingDate: String(COMPANY.establishedYear),
    description:
      "Investor awareness, investor relations, AI-powered investor acquisition, and capital markets advisory for public and growth-stage companies in Canada and the United States.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.addressLine1,
      addressLocality: "Laval",
      addressRegion: "Quebec",
      postalCode: "H7W 2H7",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vizio Marketing services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: service.url,
          provider: { "@id": `${COMPANY.siteUrl}/#organization` },
        },
      })),
    },
  };
}

export function getFaqJsonLd(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
