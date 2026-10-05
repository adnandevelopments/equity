export type UseCaseMeta = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
};

export const useCases: UseCaseMeta[] = [
  {
    slug: "otcqb-canada-investor-awareness",
    tag: "OTCQB · Canada",
    title: "How an OTCQB company in Canada builds investor awareness",
    description:
      "A practical use case for public companies that need clearer messaging, digital visibility, and consistent outreach to retail and professional investors.",
    metaTitle:
      "OTCQB Investor Awareness Canada — Use Case | Vizio Marketing",
    metaDescription:
      "Use case: investor awareness for an OTCQB company in Canada — messaging, digital campaigns, and investor communication support from Vizio Marketing.",
  },
  {
    slug: "nasdaq-small-cap-social-campaigns",
    tag: "Nasdaq · Digital",
    title: "Nasdaq small-cap social and digital investor campaigns",
    description:
      "How multi-platform campaigns help small-cap listed companies reach investors who do not already follow the story.",
    metaTitle:
      "Nasdaq Small-Cap Investor Campaigns — Use Case | Vizio Marketing",
    metaDescription:
      "Use case for Nasdaq small-cap companies using Facebook, Instagram, retargeting, and financial media to improve investor visibility.",
  },
  {
    slug: "permission-based-investor-email",
    tag: "Email Marketing",
    title: "Permission-based investor email for public companies",
    description:
      "Segmenting qualified investor audiences, structuring campaigns, and measuring engagement without overpromising results.",
    metaTitle:
      "Investor Email Marketing Use Case | Vizio Marketing",
    metaDescription:
      "Use case: permission-based investor email marketing for OTC and Nasdaq companies — audience segmentation, campaigns, and reporting.",
  },
  {
    slug: "canada-to-us-investor-reach",
    tag: "Cross-Border",
    title: "Canadian public company reaching U.S. investors",
    description:
      "Positioning, channel mix, and compliance-conscious promotion when a Canada-based issuer wants stronger U.S. market visibility.",
    metaTitle:
      "Canada to U.S. Investor Reach — Use Case | Vizio Marketing",
    metaDescription:
      "Use case for Canadian public companies expanding investor visibility in the United States through IR, digital campaigns, and targeted outreach.",
  },
];

export function getUseCase(slug: string) {
  return useCases.find((item) => item.slug === slug);
}

export function getRelatedUseCases(slug: string) {
  return useCases.filter((item) => item.slug !== slug);
}
