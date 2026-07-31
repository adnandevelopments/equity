import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Investor Awareness AI™ — Equity Alliance",
  description:
    "Investor awareness campaigns for public companies: AI visibility, targeted traffic, investor storytelling, landing pages, and measurable engagement.",
  openGraph: {
    title: "Investor Awareness AI™ — Equity Alliance",
    description:
      "Helping public companies get discovered, understood, and followed by investors. AI visibility, targeted traffic, investor storytelling, and measurable engagement.",
    url: "https://equityalliancevc.com/investor-awareness",
    images: ["/assets/market-data.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Awareness AI™ — Equity Alliance",
    description:
      "Helping public companies get discovered, understood, and followed by investors. AI visibility, targeted traffic, investor storytelling, and measurable engagement.",
    images: ["/assets/market-data.webp"],
  },
};

export default function InvestorAwarenessPage() {
  return (
    <SiteShell>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow reveal">Investor Awareness AI™</div>
            <h1 className="reveal delay-1">
              Get Discovered, Understood, and Followed by Investors
            </h1>
            <p className="reveal delay-2">
              Most public companies do not have a product problem. They do not
              have a management problem. They have a visibility problem.
            </p>
            <p className="reveal delay-2" style={{ marginTop: 16 }}>
              Equity Alliance helps NASDAQ, NYSE, OTCQX, and OTCQB companies
              increase investor awareness, strengthen market positioning, and
              attract attention from retail and institutional investors, family
              offices, wealth managers, analysts, financial media, and other
              market participants.
            </p>
            <div className="hero-actions reveal delay-3">
              <Link className="btn primary" href="/contact">
                Book Your Visibility Assessment →
              </Link>
            </div>
          </div>
          <aside
            className="hero-showcase reveal delay-2"
            aria-label="Investor awareness and market visibility visual"
          >
            <figure className="hero-photo">
              <img
                src="/assets/market-data.webp"
                alt="Financial market data displays representing investor visibility and ticker awareness"
              />
              <figcaption>
                <span>Founded 1999</span>
                <strong>
                  Investor awareness, AI visibility, and market impact for
                  public companies.
                </strong>
              </figcaption>
            </figure>
            <div className="hero-proof">
              <div>
                <b>1999</b>
                <span>Working with public-company management</span>
              </div>
              <div>
                <b>AI</b>
                <span>Visibility across search and AI platforms</span>
              </div>
              <div>
                <b>IR</b>
                <span>Story, traffic, and measurable engagement</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">The real challenge</div>
              <h2>Visibility, not capability.</h2>
            </div>
            <p className="lead">
              Founded in 1999, Equity Alliance works directly with
              public-company CEOs and management teams to develop tailored
              investor awareness campaigns based on each company&apos;s goals,
              story, market position, timing, and budget.
            </p>
          </div>
          <div className="panel who">
            <article className="who-card">
              <div className="number">01</div>
              <h3>Not a product problem</h3>
              <p>
                The product works and the business is real, but the market has
                not yet seen it clearly.
              </p>
            </article>
            <article className="who-card">
              <div className="number">02</div>
              <h3>Not a management problem</h3>
              <p>
                Credible leadership and a strong story exist, yet they are not
                reaching investors.
              </p>
            </article>
            <article className="who-card">
              <div className="number">03</div>
              <h3>A visibility problem</h3>
              <p>
                If your company is not visible where investors are searching,
                opportunities are being missed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="image-story">
        <div className="wrap image-story-grid">
          <figure className="feature-image">
            <img
              src="/assets/global-network-graphic.webp"
              alt="Abstract global network graphic representing where investors search and discover companies"
            />
            <figcaption>
              Investors now discover companies across search, AI platforms,
              media, and social channels.
            </figcaption>
          </figure>
          <div className="story-copy">
            <div className="kicker">Investor awareness in the AI era</div>
            <h2>The way investors discover companies has changed.</h2>
            <p className="lead">
              Investors are no longer relying only on press releases, brokers,
              or traditional investor relations. They are searching everywhere,
              and if your company is not visible where they look, you are
              invisible.
            </p>
            <div className="industries" style={{ marginTop: 8 }}>
              <span className="pill">Google</span>
              <span className="pill">AI search platforms</span>
              <span className="pill">Financial media</span>
              <span className="pill">YouTube</span>
              <span className="pill">LinkedIn</span>
              <span className="pill">Investor websites</span>
              <span className="pill">Podcasts</span>
              <span className="pill">Industry publications</span>
              <span className="pill">Stock discussion platforms</span>
              <span className="pill">Company ticker symbols</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <article className="focus-card">
            <div className="kicker" style={{ color: "#85e9ff" }}>
              What we do
            </div>
            <h2 style={{ color: "#fff" }}>
              Customized Investor Awareness Campaigns.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.80)",
                lineHeight: 1.7,
                maxWidth: 760,
              }}
            >
              Designed to help public companies become more visible, better
              understood, and easier for investors to follow. Campaigns may
              include:
            </p>
            <ul className="checklist">
              <li>Investor story development</li>
              <li>AI visibility strategy</li>
              <li>Google search advertising</li>
              <li>Google Display Network</li>
              <li>YouTube campaigns</li>
              <li>LinkedIn investor targeting</li>
              <li>X / Twitter, StockTwits, and InvestorHub visibility</li>
              <li>
                Seeking Alpha, Benzinga, Yahoo Finance, and MarketWatch
                visibility
              </li>
              <li>Ticker-symbol targeted advertising</li>
              <li>Dedicated investor landing pages</li>
              <li>Display advertising on investor websites</li>
              <li>CEO interviews & video storytelling</li>
              <li>Written investor content</li>
              <li>Thought leadership articles</li>
              <li>Financial media placement</li>
              <li>Sponsored content</li>
              <li>Press distribution</li>
              <li>Investor database building</li>
              <li>Email marketing</li>
              <li>Retargeting campaigns</li>
              <li>Analytics & reporting</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Investor storytelling</div>
              <h2>We help build the investor story.</h2>
            </div>
            <p className="lead">
              Investors need to quickly understand why your company matters. We
              turn complex public-company information into a clear, credible,
              investor-focused narrative.
            </p>
          </div>
          <div className="panel who">
            <article className="who-card">
              <div className="number">01</div>
              <h3>The problem you solve</h3>
              <p>
                What problem the company solves, framed for an investor
                audience.
              </p>
            </article>
            <article className="who-card">
              <div className="number">02</div>
              <h3>Why the market matters now</h3>
              <p>
                Why the market opportunity matters now, and why timing is on
                your side.
              </p>
            </article>
            <article className="who-card">
              <div className="number">03</div>
              <h3>What makes you different</h3>
              <p>
                The differentiation that sets the company apart from the
                alternatives.
              </p>
            </article>
            <article className="who-card">
              <div className="number">04</div>
              <h3>Why management is credible</h3>
              <p>
                The experience and track record that make leadership believable.
              </p>
            </article>
            <article className="who-card">
              <div className="number">05</div>
              <h3>Milestones to watch</h3>
              <p>The milestones and catalysts investors should be following.</p>
            </article>
            <article className="who-card">
              <div className="number">06</div>
              <h3>Why investors should pay attention</h3>
              <p>A clear, compelling reason to follow the story going forward.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="image-story">
        <div className="wrap image-story-grid">
          <div className="story-copy">
            <div className="kicker">Targeted traffic</div>
            <h2>Targeted traffic to your ticker and story.</h2>
            <p className="lead">
              Equity Alliance helps drive targeted investor traffic through
              Google Ads, display networks, financial media, LinkedIn, sponsored
              content, and ticker-symbol campaigns.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#53657a",
                marginTop: 18,
              }}
            >
              Instead of sending investors to a generic corporate website, we
              can create specialized investor landing pages designed to present
              the company&apos;s story, highlight key developments, showcase
              video content, capture investor interest, and measure engagement.
            </p>
          </div>
          <figure className="feature-image compact">
            <img
              src="/assets/investor-meeting.webp"
              alt="Executives reviewing investor engagement and market visibility"
            />
            <figcaption>
              Targeted campaigns and dedicated landing pages that convert
              curiosity into engagement.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services-page">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Convert & build trust</div>
              <h2>Landing pages and content that earn attention.</h2>
            </div>
            <p className="lead">
              Visibility is not just about traffic. It is about trust. Dedicated
              investor pages and investor-focused content turn curiosity into
              measurable, lasting engagement.
            </p>
          </div>
          <div className="two-grid">
            <article className="card">
              <h3>Investor Landing Pages</h3>
              <p>
                Dedicated investor landing pages help convert investor curiosity
                into measurable engagement. They may include:
              </p>
              <ul>
                <li>Company overview</li>
                <li>Investment highlights</li>
                <li>CEO video</li>
                <li>Market opportunity</li>
                <li>Recent news</li>
                <li>Investor presentation</li>
                <li>Email signup</li>
                <li>Call-to-action</li>
                <li>Analytics tracking</li>
              </ul>
            </article>
            <article className="card">
              <h3>Content, Video & Thought Leadership</h3>
              <p>
                Position management and the company as credible industry
                leaders so investors understand the company, remember the
                story, and follow future developments:
              </p>
              <ul>
                <li>CEO interviews</li>
                <li>Corporate overview videos</li>
                <li>Investor update videos</li>
                <li>Written articles</li>
                <li>Industry commentary</li>
                <li>Market opportunity content</li>
                <li>Executive thought leadership</li>
                <li>Newsletter content</li>
                <li>Sponsored articles</li>
                <li>Webinar content</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Reach</div>
              <h2>Investor audiences we help you reach.</h2>
            </div>
            <p className="lead">
              Campaigns can be designed to increase visibility among the market
              participants who matter most to your story.
            </p>
          </div>
          <div className="industries">
            <span className="pill">Retail investors</span>
            <span className="pill">Institutional investors</span>
            <span className="pill">Family offices</span>
            <span className="pill">Wealth managers</span>
            <span className="pill">Financial advisors</span>
            <span className="pill">Portfolio managers</span>
            <span className="pill">Small-cap funds</span>
            <span className="pill">Analysts</span>
            <span className="pill">Financial journalists</span>
            <span className="pill">Investor influencers</span>
            <span className="pill">Strategic partners</span>
            <span className="pill">Investment bankers</span>
            <span className="pill">Potential acquirers</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Tailored to you</div>
              <h2>Custom campaigns based on goals and budget.</h2>
            </div>
            <p className="lead">
              Every public company is different. Equity Alliance works directly
              with management to understand your objectives and develop a
              practical campaign that fits your goals, timing, and budget.
            </p>
          </div>
          <div className="industries">
            <span className="pill">More investor traffic</span>
            <span className="pill">Stronger messaging</span>
            <span className="pill">Better content</span>
            <span className="pill">CEO visibility</span>
            <span className="pill">Media exposure</span>
            <span className="pill">A dedicated investor landing page</span>
            <span className="pill">Investor database building</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap focus-grid">
          <article className="focus-card">
            <div className="kicker" style={{ color: "#85e9ff" }}>
              Visibility Assessment
            </div>
            <h2 style={{ color: "#fff" }}>Not sure where to begin?</h2>
            <p style={{ color: "rgba(255,255,255,.80)", lineHeight: 1.7 }}>
              For companies unsure where to start, Equity Alliance offers a
              Visibility Assessment, a clear roadmap for improving investor
              awareness and market visibility. The assessment may review:
            </p>
            <ul className="checklist">
              <li>Website effectiveness</li>
              <li>Investor messaging</li>
              <li>Investor presentation</li>
              <li>Google visibility</li>
              <li>AI visibility</li>
              <li>Ticker search visibility</li>
              <li>LinkedIn presence</li>
              <li>CEO visibility</li>
              <li>Media visibility</li>
              <li>Competitive positioning</li>
              <li>Investor engagement opportunities</li>
            </ul>
          </article>
          <article className="quote-card">
            <div className="kicker">Why Equity Alliance</div>
            <p className="positioning-line">
              Visibility without strategy is wasted spend.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#53657a",
                marginTop: 20,
              }}
            >
              We help public companies build the right message, reach the right
              audience, and create measurable investor engagement.
            </p>
            <div className="industries" style={{ marginTop: 22 }}>
              <span className="pill">Founded in 1999</span>
              <span className="pill">Public-company experience</span>
              <span className="pill">Direct CEO involvement</span>
              <span className="pill">Strategy-first approach</span>
              <span className="pill">Customized campaigns</span>
              <span className="pill">Investor-focused storytelling</span>
              <span className="pill">AI & digital visibility</span>
              <span className="pill">Transparent campaign planning</span>
              <span className="pill">Analytics & reporting</span>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Investor Awareness. AI Visibility. Market Impact.</h2>
              <p>
                If your company has a strong story but needs greater investor
                visibility, Equity Alliance can help develop a tailored Investor
                Awareness Campaign aligned with your goals and budget. Speak
                directly with Dean Lynch, CEO of Equity Alliance, to discuss
                your visibility challenges and whether a customized campaign is
                the right fit.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Link className="btn" href="/contact">
                Schedule a Confidential Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
