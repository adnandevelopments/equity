import Link from "next/link";
import SiteShell from "./SiteShell";

export type RelatedArticle = {
  slug: string;
  tag: string;
  title: string;
};

type ArticleLayoutProps = {
  tag: string;
  title: string;
  description: string;
  date: string;
  related: RelatedArticle[];
  children: React.ReactNode;
};

export default function ArticleLayout({
  tag,
  title,
  description,
  date,
  related,
  children,
}: ArticleLayoutProps) {
  return (
    <SiteShell>
      <article className="article-shell">
        <header className="article-hero">
          <div className="wrap">
            <Link className="article-back" href="/insights">
              ← Insights
            </Link>
            <div className="eyebrow reveal">{tag}</div>
            <h1 className="reveal delay-1">{title}</h1>
            <p className="reveal delay-2">{description}</p>
            <div className="article-meta reveal delay-3">
              <span>{date}</span>
            </div>
          </div>
        </header>

        <div className="wrap article-layout">
          <div className="article-card">
            <div className="article-content">{children}</div>
          </div>

          <aside className="article-aside">
            <div className="aside-card">
              <div className="kicker">Investor Awareness</div>
              <h3>Need more investors to understand the story?</h3>
              <p>
                Equity Alliance helps public and growth companies sharpen their
                message, build visibility, and create investor engagement.
              </p>
              <Link className="btn primary" href="/contact">
                Schedule Consultation →
              </Link>
            </div>

            <div className="aside-card">
              <div className="kicker">More insights</div>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  className="article-next-card"
                  href={`/insights/${item.slug}`}
                >
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
