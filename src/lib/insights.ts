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
      "The Next Great Growth Stock Won't Be Discovered By Accident — Equity Alliance",
    metaDescription:
      "Growth creates value, but awareness accelerates recognition. Equity Alliance explains why investor awareness matters for growth companies seeking market recognition.",
  },
  {
    slug: "investor-relations-best-practices",
    tag: "Investor Relations",
    title:
      "Investor relations best practices that make a company easier to understand",
    description:
      "Practical guidance for clearer stakeholder communication, stronger investor materials, and fewer unanswered questions around the company story.",
    date: "25 May 2026",
    metaTitle: "Investor Relations Best Practices — Equity Alliance",
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
    metaTitle: "Building Stakeholder Confidence — Equity Alliance",
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
    metaTitle: "International Growth — Equity Alliance",
    metaDescription:
      "Practical guidance on market positioning for companies pursuing cross-border business development, investor visibility, and international stakeholder engagement.",
  },
];

export function getArticle(slug: string) {
  return insightArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string) {
  return insightArticles.filter((a) => a.slug !== slug);
}
