import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { useCaseContent } from "@/content/use-cases";
import {
  getRelatedUseCases,
  getUseCase,
  useCases,
} from "@/lib/useCases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) return {};

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    openGraph: {
      type: "article",
      title: item.metaTitle,
      description: item.metaDescription,
      url: `https://viziomarketing.com/use-cases/${item.slug}/`,
      images: ["/assets/market-data.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.metaDescription,
      images: ["/assets/market-data.webp"],
    },
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getUseCase(slug);
  const Content = useCaseContent[slug];

  if (!item || !Content) notFound();

  const related = getRelatedUseCases(slug).map((entry) => ({
    slug: entry.slug,
    tag: entry.tag,
    title: entry.title,
  }));

  return (
    <ArticleLayout
      tag={item.tag}
      title={item.title}
      description={item.description}
      backHref="/use-cases"
      backLabel="Use cases"
      relatedBasePath="/use-cases"
      related={related}
    >
      <Content />
    </ArticleLayout>
  );
}
