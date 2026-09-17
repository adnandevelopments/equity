import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { articleContent } from "@/content/insights";
import {
  getArticle,
  getRelatedArticles,
  insightArticles,
} from "@/lib/insights";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://viziomarketing.com/insights/${article.slug}/`,
      images: ["/assets/market-data.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: ["/assets/market-data.webp"],
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Content = articleContent[slug];

  if (!article || !Content) notFound();

  const related = getRelatedArticles(slug).map((item) => ({
    slug: item.slug,
    tag: item.tag,
    title: item.title,
  }));

  return (
    <ArticleLayout
      tag={article.tag}
      title={article.title}
      description={article.description}
      date={article.date}
      related={related}
    >
      <Content />
    </ArticleLayout>
  );
}
