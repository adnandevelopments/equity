import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { insightArticles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights & Articles — Vizio Marketing",
  description:
    "SEO articles and insights on OTCQB and Nasdaq investor awareness, email marketing, social campaigns, and AI search for public companies. Vizio Marketing, Laval, Quebec.",
  openGraph: {
    title: "Insights — Vizio Marketing",
    description:
      "Investor awareness, market visibility, and growth communication insights from Vizio Marketing.",
    url: "https://viziomarketing.com/insights/",
    images: ["/assets/market-data.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights — Vizio Marketing",
    description:
      "Investor awareness, market visibility, and growth communication insights from Vizio Marketing.",
    images: ["/assets/market-data.webp"],
  },
};

const insights = insightArticles.map((article) => ({
  tag: article.tag,
  href: `/insights/${article.slug}`,
  title: article.title,
  description: article.description,
  date: article.date,
}));

export default function InsightsPage() {
  return (
    <SiteShell>
      <header className="page-hero insights-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Insights &amp; articles</div>
          <h1 className="reveal delay-1">Investor awareness perspectives.</h1>
          <p className="reveal delay-2">
            SEO-friendly articles on OTCQB and Nasdaq visibility, digital
            campaigns, email, and AI search — plus practical IR storytelling
            from Vizio Marketing.
          </p>
          <p className="reveal delay-3" style={{ marginTop: 16 }}>
            <Link href="/use-cases">View illustrative use cases →</Link>
          </p>
        </div>
      </header>

      <section className="insight-list-section">
        <div className="wrap">
          <div className="insight-list">
            {insights.map((item) => (
              <article key={item.href} className="insight-list-card">
                <span className="tag">{item.tag}</span>
                <h3>
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                <p>{item.description}</p>
                <div className="article-meta">
                  <span>{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
