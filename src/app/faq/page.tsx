import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { COMPANY } from "@/lib/company";
import { FAQ_ITEMS } from "@/lib/faq";
import { JsonLdScript } from "@/components/JsonLdScript";
import { getFaqJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "FAQ — Who is Vizio Marketing?",
  description:
    "Frequently asked questions about Vizio Marketing: who we are, what we do for OTC and Nasdaq companies, where we are based, and how to contact us.",
  openGraph: {
    title: "FAQ — Who is Vizio Marketing?",
    description:
      "Frequently asked questions about Vizio Marketing: who we are, what we do for OTC and Nasdaq companies, where we are based, and how to contact us.",
    url: "https://viziomarketing.com/faq",
    images: ["/assets/advisory-meeting.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Who is Vizio Marketing?",
    description:
      "Frequently asked questions about Vizio Marketing: who we are, what we do for OTC and Nasdaq companies, where we are based, and how to contact us.",
    images: ["/assets/advisory-meeting.webp"],
  },
};

export default function FaqPage() {
  return (
    <SiteShell>
      <JsonLdScript data={getFaqJsonLd([...FAQ_ITEMS])} />
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">FAQ</div>
          <h1 className="reveal delay-1">Questions about Vizio Marketing</h1>
          <p className="reveal delay-2">
            Clear answers about who {COMPANY.name} is, what we do for public
            companies, and how investor awareness campaigns work.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="two-grid">
            {FAQ_ITEMS.map((item) => (
              <article className="card" key={item.question}>
                <h2 style={{ fontSize: "1.25rem" }}>{item.question}</h2>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="btn primary" href="/contact">
              Schedule a consultation →
            </Link>{" "}
            <Link className="btn" href="/about">
              About Vizio Marketing →
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
