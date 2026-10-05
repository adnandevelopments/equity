import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";
import { insightArticles } from "@/lib/insights";
import { useCases } from "@/lib/useCases";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: COMPANY.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${COMPANY.siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${COMPANY.siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${COMPANY.siteUrl}/investor-awareness`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${COMPANY.siteUrl}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.siteUrl}/use-cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.siteUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const insightPages: MetadataRoute.Sitemap = insightArticles.map((article) => ({
    url: `${COMPANY.siteUrl}/insights/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCasePages: MetadataRoute.Sitemap = useCases.map((item) => ({
    url: `${COMPANY.siteUrl}/use-cases/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...insightPages, ...useCasePages];
}
