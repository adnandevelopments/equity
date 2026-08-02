function ServiceCard({
  title,
  intro,
  items,
  footer,
}: {
  title: string;
  intro: string;
  items: string[];
  footer?: string;
}) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{intro}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {footer ? <p style={{ marginTop: 16 }}>{footer}</p> : null}
    </article>
  );
}

export default function CampaignMarketingSections() {
  return (
    <>
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Integrated campaigns</div>
              <h2>
                Integrated Investor Awareness and Capital Markets Marketing
              </h2>
            </div>
            <p className="lead">
              Equity Alliance develops multi-platform investor awareness
              campaigns for public companies seeking greater market visibility,
              stronger investor engagement, and broader recognition across the
              financial community.
            </p>
          </div>
          <div className="story-copy" style={{ marginTop: 0 }}>
            <p className="lead" style={{ marginBottom: 16 }}>
              Our campaigns combine financial media, social media advertising,
              investor email marketing, sponsored content, influencer promotion,
              retargeting, content creation, analytics, and ongoing campaign
              management.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#53657a",
                margin: 0,
              }}
            >
              We help public companies communicate their investment story
              through accurate, professional, and compliance-conscious marketing
              across the platforms investors use to research and follow the
              market.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="wrap">
          <div className="two-grid">
            <ServiceCard
              title="Facebook and Instagram Investor Marketing"
              intro="Equity Alliance develops and manages targeted Facebook and Instagram campaigns designed specifically for public-company and investor audiences."
              items={[
                "Paid Facebook and Instagram campaigns",
                "Organic investor-focused social content",
                "Custom and lookalike audience development, where permitted",
                "Website visitor retargeting",
                "Video-viewer and social-engagement retargeting",
                "Static, carousel, Story, Reel, and video advertisements",
                "Corporate news and press-release promotion",
                "Investor presentation and CEO interview promotion",
                "Audience testing, reporting, and optimization",
              ]}
              footer="Campaigns may target retail investors, accredited investors, high-net-worth individuals, active traders, and other relevant financial audiences. All content is submitted for client review and approval before publication."
            />

            <ServiceCard
              title="Financial Influencer and Investor Media Promotion"
              intro="Equity Alliance coordinates campaigns with financial influencers, investor commentators, and investor-focused media channels."
              items={[
                "Financial influencers",
                "YouTube investment channels",
                "Investor podcast hosts",
                "Financial newsletter publishers",
                "X and StockTwits commentators",
                "Investor-focused media personalities",
                "Small-cap and sector-specific investor communities",
              ]}
              footer="Influencers are reviewed for audience quality, engagement, reputation, and investor relevance. Clients approve influencers and content before publication. Paid relationships are clearly disclosed. Influencers cannot promise share-price increases, trading volume, financing results, or investment returns."
            />
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="wrap">
          <div className="two-grid">
            <ServiceCard
              title="Ongoing Campaign Monitoring and Optimization"
              intro="Investor awareness campaigns require active management after launch. Equity Alliance monitors performance and adjusts strategy based on audience response, advertising efficiency, website traffic, email engagement, and publisher results."
              items={[
                "Ongoing performance monitoring",
                "Audience-targeting adjustments",
                "Budget reallocation between platforms",
                "Pausing underperforming advertisements",
                "Expanding successful audiences",
                "Testing headlines, graphics, videos, and calls to action",
                "Improving email subject lines and campaign content",
                "Updating retargeting sequences",
                "Refreshing advertisements to prevent audience fatigue",
                "Weekly, biweekly, or monthly reporting",
                "Final campaign analysis and recommendations",
              ]}
            />

            <article className="card">
              <h3>Campaign Reporting</h3>
              <p>
                Clients receive clear, actionable reporting throughout each
                campaign. Reports may include:
              </p>
              <ul>
                <li>Impressions and unique reach</li>
                <li>Clicks and click-through rates</li>
                <li>Advertising costs</li>
                <li>Website and investor-page traffic</li>
                <li>Email delivery, open, and click rates</li>
                <li>Social media engagement</li>
                <li>Video performance</li>
                <li>Article readership</li>
                <li>Retargeting results</li>
                <li>Investor inquiries</li>
                <li>Audience geography</li>
                <li>Optimization actions taken</li>
                <li>Recommended next steps</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Email marketing</div>
              <h2>Qualified Investor Email Marketing and Database Access</h2>
            </div>
            <p className="lead">
              Equity Alliance provides targeted investor email marketing through
              proprietary audiences, licensed databases, publisher networks,
              opt-in investor communities, client-owned databases, and
              campaign-generated leads.
            </p>
          </div>

          <div className="story-copy" style={{ marginBottom: 28 }}>
            <p className="lead" style={{ marginBottom: 16 }}>
              Our combined investor marketing network includes permission-based
              investor contacts across North America, Europe, Australia, and
              selected international markets.
            </p>
            <div className="industries">
              {[
                "Retail investors",
                "Accredited investors",
                "High-net-worth investors",
                "Active traders",
                "Financial advisers",
                "Registered investment advisers",
                "Family offices",
                "Wealth managers",
                "Portfolio managers",
                "Investor newsletter subscribers",
                "Financial influencer audiences",
                "Investment podcast audiences",
                "Sector-specific retail investor communities",
              ].map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#53657a",
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              Audiences are qualified and segmented by geography, investor
              type, industry interest, market-cap preference, professional role,
              prior engagement, and campaign activity. Database size figures are
              published only after verification for each campaign scope.
            </p>
          </div>

          <div className="section-head compact-head">
            <div>
              <div className="kicker">Database ownership</div>
              <h2>How investor data is managed.</h2>
            </div>
          </div>

          <div className="panel who" style={{ marginBottom: 28 }}>
            <article className="who-card">
              <div className="number">01</div>
              <h3>Equity Alliance-Owned Audiences</h3>
              <p>
                Certain investor audiences are maintained directly by Equity
                Alliance or affiliated platforms. These contacts are accessed
                under Equity Alliance&apos;s data policies and consent
                frameworks.
              </p>
            </article>
            <article className="who-card">
              <div className="number">02</div>
              <h3>Licensed and Publisher Audiences</h3>
              <p>
                Some audiences are accessed through financial publishers,
                newsletters, media platforms, and approved data providers under
                license or partnership agreements.
              </p>
            </article>
            <article className="who-card">
              <div className="number">03</div>
              <h3>Client-Owned Audiences</h3>
              <p>
                Client-supplied shareholder, conference, inquiry, or newsletter
                databases remain the property of the client. Equity Alliance
                manages campaigns on the client&apos;s behalf without claiming
                ownership of the underlying data.
              </p>
            </article>
            <article className="who-card">
              <div className="number">04</div>
              <h3>Campaign-Generated Leads</h3>
              <p>
                Investors who voluntarily submit information through approved
                landing pages, webcasts, subscriptions, or information requests
                are delivered to the client according to the campaign
                agreement. Lead ownership and data-access terms are defined
                before launch.
              </p>
            </article>
          </div>

          <div className="two-grid">
            <ServiceCard
              title="Email Campaign Services"
              intro="Our email marketing services may include:"
              items={[
                "Audience selection and segmentation",
                "Email copywriting and design",
                "Subject-line development",
                "Mobile-responsive HTML emails",
                "Landing-page creation",
                "A/B testing",
                "Email deployment",
                "Resending to non-openers",
                "Engagement-based follow-up campaigns",
                "Click tracking and engagement tracking",
                "Retargeting integration",
                "Lead capture",
                "Campaign reporting",
              ]}
            />

            <article className="card">
              <h3>Consent, privacy, and compliance</h3>
              <p>
                Email campaigns are structured with attention to consent, privacy,
                unsubscribe management, bounce control, data security, sender
                reputation, and applicable anti-spam requirements including CAN-SPAM
                and CASL where relevant.
              </p>
              <p style={{ marginTop: 16 }}>Email campaign reports may include:</p>
              <ul>
                <li>Total sends, deliveries, open rates, and clicks</li>
                <li>Bounce rates and unsubscribes</li>
                <li>Geographic engagement and device usage</li>
                <li>Landing-page traffic and investor inquiries</li>
                <li>Follow-up campaign performance</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <article className="focus-card">
            <div className="kicker" style={{ color: "#85e9ff" }}>
              Multi-platform
            </div>
            <h2 style={{ color: "#fff" }}>
              Integrated Multi-Platform Campaigns
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.80)",
                lineHeight: 1.7,
                maxWidth: 820,
              }}
            >
              Equity Alliance combines Facebook, Instagram, LinkedIn, X,
              YouTube, Google, financial publishers, investor communities, email
              marketing, sponsored content, influencer promotion, and
              retargeting into one coordinated campaign.
            </p>
            <ul className="checklist">
              <li>Investor messaging and campaign strategy</li>
              <li>Content and advertising development</li>
              <li>Press-release amplification</li>
              <li>Financial media and publisher promotion</li>
              <li>Targeted investor email campaigns</li>
              <li>Paid social and search advertising</li>
              <li>Executive interviews</li>
              <li>Influencer promotion</li>
              <li>Landing-page traffic generation</li>
              <li>Audience retargeting</li>
              <li>Ongoing monitoring and optimization</li>
              <li>Weekly reporting and final analysis</li>
            </ul>
            <p
              style={{
                color: "rgba(255,255,255,.72)",
                lineHeight: 1.7,
                marginTop: 22,
                maxWidth: 820,
              }}
            >
              Each program is customized based on the company&apos;s industry,
              listing jurisdiction, market capitalization, investor profile,
              geographic priorities, disclosure calendar, campaign duration, and
              media budget.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Why Equity Alliance</div>
              <h2>Why public companies choose Equity Alliance.</h2>
            </div>
          </div>
          <div className="panel who">
            <article className="who-card">
              <div className="number">01</div>
              <h3>Facebook and Instagram Expertise</h3>
              <p>
                Targeted paid and organic campaigns on the platforms where
                retail and accredited investors spend time researching
                opportunities.
              </p>
            </article>
            <article className="who-card">
              <div className="number">02</div>
              <h3>Qualified Investor Audiences</h3>
              <p>
                Access to proprietary, licensed, publisher, and client-owned
                investor databases with permission-based email marketing.
              </p>
            </article>
            <article className="who-card">
              <div className="number">03</div>
              <h3>Influencer and Media Relationships</h3>
              <p>
                Established connections with financial influencers, podcast
                hosts, newsletter publishers, and investor-focused media
                channels.
              </p>
            </article>
            <article className="who-card">
              <div className="number">04</div>
              <h3>Multi-Platform Execution</h3>
              <p>
                One coordinated team managing strategy, content, advertising,
                email, media, and reporting across every channel.
              </p>
            </article>
            <article className="who-card">
              <div className="number">05</div>
              <h3>Active Campaign Monitoring</h3>
              <p>
                Continuous performance review with budget reallocation, audience
                refinement, creative testing, and retargeting updates.
              </p>
            </article>
            <article className="who-card">
              <div className="number">06</div>
              <h3>Transparent Reporting</h3>
              <p>
                Clear weekly, biweekly, or monthly reports covering reach,
                engagement, costs, traffic, email performance, and optimization
                actions.
              </p>
            </article>
            <article className="who-card">
              <div className="number">07</div>
              <h3>Compliance-Conscious Practices</h3>
              <p>
                All content is based on approved public information, subject to
                client review, with compensated promotions clearly disclosed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="notice">
            <strong>Compliance statement.</strong> All campaign content is
            based on approved public information. Clients approve material
            before publication. Compensated promotions are disclosed. Applicable
            privacy and anti-spam requirements are followed. Equity Alliance
            does not guarantee share-price appreciation, trading volume,
            financing success, liquidity, or investment results. Our role is to
            help public companies communicate more effectively, reach relevant
            investor audiences, strengthen market visibility, and build a
            consistent capital-markets presence.
          </p>
        </div>
      </section>
    </>
  );
}
