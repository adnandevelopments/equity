import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Investor Awareness & Growth Services — Equity Alliance",
  description:
    "Investor awareness campaigns, investor relations strategy, corporate storytelling, digital visibility, and business development for public and growth companies.",
  openGraph: {
    title: "Investor Awareness & Growth Services — Equity Alliance",
    description:
      "Investor awareness campaigns, investor relations strategy, corporate storytelling, digital visibility, and business development for public and growth companies.",
    url: "https://equityalliancevc.com/services",
    images: ["/assets/boardroom.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Awareness & Growth Services — Equity Alliance",
    description:
      "Investor awareness campaigns, investor relations strategy, corporate storytelling, digital visibility, and business development for public and growth companies.",
    images: ["/assets/boardroom.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">Services</div>
          <h1 className="reveal delay-1">
            Investor Awareness & Growth Services
          </h1>
          <p className="reveal delay-2">
            Investor relations, AI-powered investor acquisition, digital
            investor awareness, capital markets advisory, and market intelligence
            for public and growth-stage companies.
          </p>
        </div>
      </header>

      <section className="service-visual">
        <div className="wrap image-story-grid">
          <div className="story-copy">
            <div className="kicker">Market-facing growth</div>
            <h2>Clear stories create market attention.</h2>
            <p className="lead">
              Strong companies can still be overlooked when investors do not
              understand the story. We combine capital markets expertise,
              investor communications, digital targeting, and AI-supported
              intelligence to make the opportunity easier to discover and follow.
            </p>
          </div>
          <figure className="feature-image compact">
            <img
              src="/assets/boardroom.jpg"
              alt="Modern boardroom representing strategic advisory and market-facing growth"
            />
            <figcaption>
              Strategic advisory, investor visibility, and campaign support.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services-page">
        <div className="wrap">
          <div className="two-grid">
            <article className="card">
              <h3>Investor Relations & Shareholder Communications</h3>
              <p>
                Strategic communication solutions designed to improve investor
                understanding and engagement.
              </p>
              <ul>
                <li>Investor relations strategy</li>
                <li>Investment thesis development</li>
                <li>Corporate messaging</li>
                <li>Investor presentations</li>
                <li>Shareholder communications</li>
                <li>CEO positioning</li>
                <li>Corporate fact sheets</li>
                <li>Earnings support</li>
                <li>Investor website development</li>
              </ul>
            </article>

            <article className="card">
              <h3>AI-Powered Investor Acquisition™</h3>
              <p>
                AI-supported targeting and capital markets experience used to
                identify, segment, and engage relevant investor audiences.
              </p>
              <ul>
                <li>AI investor discovery</li>
                <li>Investor audience segmentation</li>
                <li>Family office identification</li>
                <li>Institutional investor targeting</li>
                <li>Retail investor targeting</li>
                <li>Investor lead generation</li>
                <li>Investor database development</li>
                <li>Investor journey optimization</li>
              </ul>
            </article>

            <article className="card">
              <h3>Corporate Storytelling</h3>
              <p>
                Turning complex company information into a clear investor
                narrative that explains the problem, opportunity,
                differentiation, and reasons to pay attention.
              </p>
              <ul>
                <li>Investor narrative development</li>
                <li>Company overview copy</li>
                <li>Executive positioning</li>
                <li>Milestone and catalyst messaging</li>
              </ul>
            </article>

            <article className="card">
              <h3>Digital Investor Awareness Campaigns</h3>
              <p>
                Campaigns designed to increase visibility, website traffic,
                investor enquiries, and shareholder engagement across the
                channels investors actually use.
              </p>
              <ul>
                <li>Google Search and Display</li>
                <li>YouTube and LinkedIn</li>
                <li>X / Twitter and StockTwits</li>
                <li>
                  Seeking Alpha, Benzinga, Yahoo Finance, and MarketWatch
                </li>
                <li>
                  InvestorHub, financial newsletters, and investment podcasts
                </li>
              </ul>
            </article>

            <article className="card">
              <h3>Capital Markets Advisory</h3>
              <p>
                Positioning support for companies preparing for long-term market
                growth and capital access.
              </p>
              <ul>
                <li>Capital markets strategy</li>
                <li>Uplisting advisory</li>
                <li>OTCQB and OTCQX advisory</li>
                <li>Nasdaq preparation</li>
                <li>Shareholder growth strategy</li>
                <li>Investor conference and roadshow support</li>
                <li>Capital access planning</li>
              </ul>
              <h3>AI Market Intelligence</h3>
              <p>
                Market intelligence to help companies monitor opportunities,
                sentiment, competitors, shareholders, and capital markets
                activity.
              </p>
              <ul>
                <li>Shareholder intelligence</li>
                <li>Competitor and industry monitoring</li>
                <li>Investor sentiment analysis</li>
                <li>News tracking</li>
                <li>Opportunity identification</li>
              </ul>
            </article>

            <article className="focus-card">
              <div className="kicker" style={{ color: "#85e9ff" }}>
                Next step
              </div>
              <h2 style={{ color: "#fff" }}>
                Discuss your investor awareness priorities.
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,.78)",
                  lineHeight: 1.7,
                }}
              >
                Tell us about your company, market, ticker, goals, and
                visibility challenges. We&apos;ll review whether there is a fit.
              </p>
              <p>
                <Link
                  className="btn"
                  style={{
                    background: "#fff",
                    color: "#07111f",
                    border: 0,
                  }}
                  href="/contact"
                >
                  Schedule Consultation →
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
