import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { useCases } from "@/lib/useCases";

export const metadata: Metadata = {
  title: "Use Cases — Vizio Marketing",
  description:
    "Illustrative investor awareness use cases for OTCQB, Nasdaq, and Canada–U.S. public companies. Scenarios, approaches, and services from Vizio Marketing.",
  openGraph: {
    title: "Use Cases — Vizio Marketing",
    description:
      "Illustrative investor awareness use cases for OTCQB, Nasdaq, and cross-border public companies.",
    url: "https://viziomarketing.com/use-cases/",
    images: ["/assets/market-data.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases — Vizio Marketing",
    description:
      "Illustrative investor awareness use cases for OTCQB, Nasdaq, and cross-border public companies.",
    images: ["/assets/market-data.webp"],
  },
};

export default function UseCasesPage() {
  return (
    <SiteShell>
      <header className="page-hero insights-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Use cases</div>
          <h1 className="reveal delay-1">How teams apply investor awareness.</h1>
          <p className="reveal delay-2">
            Illustrative scenarios for OTCQB, Nasdaq, email, and cross-border
            programs — compliance-conscious, anonymized, and focused on process
            and measurement. Not client testimonials or performance guarantees.
          </p>
          <p className="reveal delay-3" style={{ marginTop: 16 }}>
            <Link href="/insights">Read SEO articles &amp; insights →</Link>
          </p>
        </div>
      </header>

      <section className="insight-list-section">
        <div className="wrap">
          <div className="insight-list">
            {useCases.map((item) => (
              <article key={item.slug} className="insight-list-card">
                <span className="tag">{item.tag}</span>
                <h3>
                  <Link href={`/use-cases/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
