import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow reveal">
              Investor awareness and growth advisory
            </div>
            <h1 className="reveal delay-1">
              Helping Public Companies Reach Investors Since 1999
            </h1>
            <p className="reveal delay-2">
              Capital markets expertise. AI-powered investor growth. Equity
              Alliance helps OTCQB, OTCQX, Nasdaq, and growth-stage public
              companies increase market awareness, attract investors, improve
              shareholder engagement, and access capital.
            </p>
            <p className="reveal delay-2" style={{ marginTop: 16 }}>
              For more than 25 years, we have worked at the intersection of
              capital markets, investor communications, digital marketing, and
              investor acquisition — helping quality companies get discovered
              by investors worldwide.
            </p>
            <div className="hero-actions reveal delay-3">
              <Link className="btn primary" href="/contact">
                Schedule Consultation →
              </Link>
              <Link className="btn secondary" href="/investor-awareness">
                Investor Awareness
              </Link>
              <Link className="btn ghost" href="/services">
                Explore Services
              </Link>
            </div>
          </div>
          <aside
            className="hero-showcase reveal delay-2"
            aria-label="Equity Alliance investor relations visual"
          >
            <figure className="hero-photo">
              <img
                src="/assets/investor-meeting.webp"
                alt="Executives overlooking a city skyline"
              />
              <figcaption>
                <span>Established 1999</span>
                <strong>
                  Capital markets expertise, AI-powered investor acquisition,
                  and market visibility.
                </strong>
              </figcaption>
            </figure>
            <div className="hero-proof">
              <div>
                <b>25+</b>
                <span>
                  Years around capital markets, investor relations, and growth
                  campaigns
                </span>
              </div>
              <div>
                <b>IR</b>
                <span>Investor awareness and corporate storytelling</span>
              </div>
              <div>
                <b>Growth</b>
                <span>Marketing, visibility, and business development</span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Who we are</div>
              <h2>Investor awareness for companies ready to be seen.</h2>
            </div>
            <p className="lead">
              Most public companies face the same challenge: the market does not
              fully understand their story. Since 1999, Equity Alliance has
              helped companies increase visibility, communicate their
              investment thesis, attract investors, and access capital.
            </p>
          </div>
          <div className="panel who">
            <article className="who-card">
              <div className="number">01</div>
              <h3>Investor clarity</h3>
              <p>
                Helping companies explain the opportunity in language investors
                can quickly understand and follow.
              </p>
            </article>
            <article className="who-card">
              <div className="number">02</div>
              <h3>Market visibility</h3>
              <p>
                Building awareness through investor-focused storytelling,
                targeted campaigns, and professional market communication.
              </p>
            </article>
            <article className="who-card">
              <div className="number">03</div>
              <h3>Business growth</h3>
              <p>
                Supporting leadership teams with the positioning, outreach, and
                relationships needed to move the company forward.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="image-story">
        <div className="wrap image-story-grid">
          <figure className="feature-image">
            <img
              src="/assets/advisory-meeting.webp"
              alt="Modern corporate atrium representing strategic advisory and growth"
            />
            <figcaption>
              Strategic advisory, international relationships, and long-term
              growth planning.
            </figcaption>
          </figure>
          <div className="story-copy">
            <div className="kicker">Your story matters</div>
            <h2>The market cannot support what it does not understand.</h2>
            <p className="lead">
              Many companies already have the product, team, niche, and
              opportunity. What they need is a clearer way to reach investors,
              explain the vision, and turn attention into meaningful
              conversations.
            </p>
            <div className="image-pair">
              <img
                src="/assets/market-data.webp"
                alt="Financial market data displays on a trading floor"
              />
              <img
                src="/assets/global-network-graphic.webp"
                alt="Abstract global stakeholder network graphic"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Services</div>
              <h2>Capital markets expertise, digital investor reach.</h2>
            </div>
            <p className="lead">
              A focused blend of investor relations, shareholder
              communications, AI-powered investor acquisition, digital investor
              awareness, capital markets advisory, and market intelligence.
            </p>
          </div>
          <div className="services">
            <article className="service">
              <b>1</b>
              <h3>Investor Relations Strategy</h3>
              <p>
                Clear messaging and communication programs designed to help
                investors understand the company, the opportunity, and the
                milestones ahead.
              </p>
            </article>
            <article className="service">
              <b>2</b>
              <h3>Investor Awareness Campaigns</h3>
              <p>
                Targeted visibility programs for public companies seeking to
                reach retail investors, market participants, financial media,
                and strategic audiences.
              </p>
            </article>
            <article className="service">
              <b>3</b>
              <h3>Corporate Storytelling</h3>
              <p>
                Turning complex company information into a focused investor
                narrative that is easier to understand, remember, and follow.
              </p>
            </article>
            <article className="service">
              <b>4</b>
              <h3>AI-Powered Investor Acquisition™</h3>
              <p>
                Investor discovery, audience segmentation, family office and
                institutional targeting, retail investor reach, lead generation,
                and journey optimization.
              </p>
            </article>
            <article className="service">
              <b>5</b>
              <h3>Capital Markets Advisory</h3>
              <p>
                Capital markets strategy, OTCQB and OTCQX advisory, Nasdaq
                preparation, shareholder growth strategy, roadshow support, and
                capital access planning.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Industries</div>
              <h2>Companies We Support</h2>
            </div>
            <p className="lead">
              Primarily OTCQB, OTCQX, Nasdaq small-cap, and growth-stage public
              companies seeking greater market awareness, liquidity, shareholder
              engagement, and capital access.
            </p>
          </div>
          <div className="industries">
            <span className="pill">OTCQB Companies</span>
            <span className="pill">OTCQX Companies</span>
            <span className="pill">Nasdaq Small Cap Companies</span>
            <span className="pill">Growth Stage Public Companies</span>
            <span className="pill">Healthcare & Biotech</span>
            <span className="pill">Clean Technology</span>
            <span className="pill">Resource Companies</span>
            <span className="pill">$20M–$500M Market Cap</span>
            <span className="pill">Advanced Manufacturing</span>
            <span className="pill">Emerging Technologies</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap focus-grid">
          <article className="focus-card">
            <div className="kicker" style={{ color: "#85e9ff" }}>
              Why Equity Alliance
            </div>
            <h2 style={{ color: "#fff" }}>
              From untold story to market awareness.
            </h2>
            <ul className="checklist">
              <li>Investor communication</li>
              <li>Investor awareness campaigns</li>
              <li>Corporate storytelling</li>
              <li>Targeted digital visibility</li>
              <li>Marketing and business development</li>
              <li>Public-company market positioning</li>
              <li>Long-term stakeholder engagement</li>
            </ul>
          </article>
          <article className="quote-card">
            <div className="kicker">Advisory approach</div>
            <p className="positioning-line">
              Helping the right investors hear the story, see the vision, and
              understand why it matters.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#53657a",
                marginTop: 22,
              }}
            >
              Equity Alliance works with leadership teams to sharpen the
              message, build awareness, and connect company stories with
              investor and stakeholder audiences.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Insights</div>
              <h2>Strategic Insights & Market Perspectives</h2>
            </div>
            <p className="lead">
              Perspectives on investor awareness, market visibility, growth
              communication, and how companies become easier for investors to
              discover and understand.
            </p>
          </div>
          <div className="insights">
            <article className="insight featured-insight">
              <span className="tag">Investor Awareness</span>
              <h3>
                <Link href="/insights/the-next-great-growth-stock/">
                  The Next Great Growth Stock Won&apos;t Be Discovered By
                  Accident
                </Link>
              </h3>
              <p>
                Growth creates value, but awareness accelerates recognition. Why
                growth companies need visibility before the market can
                understand the opportunity.
              </p>
            </article>
            <article className="insight">
              <span className="tag">Investor Relations</span>
              <h3>
                <Link href="/insights/investor-relations-best-practices/">
                  Investor Relations Best Practices
                </Link>
              </h3>
              <p>Practical guidance for clearer stakeholder communication.</p>
            </article>
            <article className="insight">
              <span className="tag">Stakeholder Communication</span>
              <h3>
                <Link href="/insights/building-stakeholder-confidence/">
                  Building Stakeholder Confidence
                </Link>
              </h3>
              <p>
                Trust-building through consistency, transparency, and clarity.
              </p>
            </article>
            <article className="insight">
              <span className="tag">International Growth</span>
              <h3>
                <Link href="/insights/international-growth/">
                  International Growth
                </Link>
              </h3>
              <p>Market positioning for cross-border business development.</p>
            </article>
            <article className="insight">
              <span className="tag">Archive</span>
              <h3>
                <Link href="/insights">View all insights →</Link>
              </h3>
              <p>
                Read Equity Alliance perspectives on visibility, investor
                awareness, and market recognition.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>Ready for more investors to understand your story?</h2>
              <p>
                Equity Alliance works with companies that have something real to
                say and need the right strategy, campaign, and communication to
                get it in front of the market.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Link className="btn" href="/contact">
                Contact Equity Alliance →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
