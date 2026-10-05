export type InsightArticleMeta = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
};

export const insightArticles: InsightArticleMeta[] = [
  {
    slug: "the-next-great-growth-stock",
    tag: "Investor Awareness",
    title: "The Next Great Growth Stock Won't Be Discovered By Accident",
    description:
      "Growth creates value, but awareness accelerates recognition. Why high-growth companies need investor awareness to help the market understand their opportunity.",
    date: "22 June 2026",
    metaTitle:
      "The Next Great Growth Stock Won't Be Discovered By Accident — Vizio Marketing",
    metaDescription:
      "Growth creates value, but awareness accelerates recognition. Vizio Marketing explains why investor awareness matters for growth companies seeking market recognition.",
  },
  {
    slug: "investor-relations-best-practices",
    tag: "Investor Relations",
    title:
      "Investor relations best practices that make a company easier to understand",
    description:
      "Practical guidance for clearer stakeholder communication, stronger investor materials, and fewer unanswered questions around the company story.",
    date: "25 May 2026",
    metaTitle: "Investor Relations Best Practices — Vizio Marketing",
    metaDescription:
      "Practical investor relations guidance for public and growth companies that want clearer stakeholder communication and stronger market understanding.",
  },
  {
    slug: "building-stakeholder-confidence",
    tag: "Stakeholder Communication",
    title: "Building stakeholder confidence without overpromising",
    description:
      "Trust is built through consistency, transparency, and clarity. For public and growth companies, confidence comes from doing the basics well over time.",
    date: "20 April 2026",
    metaTitle: "Building Stakeholder Confidence — Vizio Marketing",
    metaDescription:
      "How public and growth companies can build stakeholder confidence through consistent communication, transparent milestones, and clearer market messaging.",
  },
  {
    slug: "international-growth",
    tag: "International Growth",
    title: "International growth starts with better market positioning",
    description:
      "Cross-border business development works best when companies adapt the story, proof points, and stakeholder communication to each market.",
    date: "23 March 2026",
    metaTitle: "International Growth — Vizio Marketing",
    metaDescription:
      "Practical guidance on market positioning for companies pursuing cross-border business development, investor visibility, and international stakeholder engagement.",
  },
  {
    slug: "otcqb-investor-awareness-canada",
    tag: "OTCQB · Canada",
    title: "OTCQB investor awareness for Canada-based public companies",
    description:
      "How OTCQB issuers in Canada improve discovery, messaging, and digital reach without crossing compliance lines.",
    date: "5 October 2026",
    metaTitle:
      "OTCQB Investor Awareness Canada — Vizio Marketing",
    metaDescription:
      "SEO guide for Canada-based OTCQB companies: investor awareness, digital campaigns, email, and IR messaging from Vizio Marketing in Laval, Quebec.",
  },
  {
    slug: "facebook-instagram-investor-advertising",
    tag: "Digital Marketing",
    title:
      "Facebook and Instagram investor advertising for public companies",
    description:
      "Using Meta platforms for compliance-conscious investor awareness, retargeting, and measurable campaign reporting.",
    date: "3 October 2026",
    metaTitle:
      "Facebook Instagram Investor Advertising — Vizio Marketing",
    metaDescription:
      "How OTC and Nasdaq public companies use Facebook and Instagram for investor awareness campaigns, retargeting, and reporting with Vizio Marketing.",
  },
  {
    slug: "investor-email-marketing-public-companies",
    tag: "Email Marketing",
    title: "Investor email marketing for OTC and Nasdaq public companies",
    description:
      "Permission-based lists, segmentation, CASL/CAN-SPAM considerations, and integration with digital investor awareness.",
    date: "1 October 2026",
    metaTitle:
      "Investor Email Marketing Public Companies — Vizio Marketing",
    metaDescription:
      "Permission-based investor email marketing for public companies: audience types, compliance, campaigns, and reporting from Vizio Marketing.",
  },
  {
    slug: "nasdaq-small-cap-investor-visibility",
    tag: "Nasdaq",
    title: "Nasdaq small-cap investor visibility beyond the news spike",
    description:
      "Sustained discovery through storytelling, digital campaigns, media, and email — with metrics that matter.",
    date: "28 September 2026",
    metaTitle:
      "Nasdaq Small-Cap Investor Visibility — Vizio Marketing",
    metaDescription:
      "Investor visibility strategies for Nasdaq small-cap companies: digital awareness, media, email, and cross-border reach from Vizio Marketing.",
  },
  {
    slug: "ai-search-investor-awareness",
    tag: "SEO · AI Search",
    title: "AI search and investor awareness: make your story machine-readable",
    description:
      "Why public companies and IR vendors should publish clear FAQ, articles, and factual pages for AI crawlers and modern search.",
    date: "26 September 2026",
    metaTitle:
      "AI Search Investor Awareness — Vizio Marketing",
    metaDescription:
      "How public companies improve AI search and ChatGPT discoverability with FAQ, articles, schema, and transparent investor awareness content.",
  },
];

export function getArticle(slug: string) {
  return insightArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string) {
  return insightArticles.filter((a) => a.slug !== slug);
}
