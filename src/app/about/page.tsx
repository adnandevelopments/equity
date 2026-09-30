import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { COMPANY } from "@/lib/company";
import { FAQ_ITEMS } from "@/lib/faq";
import { JsonLdScript } from "@/components/JsonLdScript";
import { getFaqJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "About Vizio Marketing Canada",
  description:
    "Who is Vizio Marketing? A Canada-based investor awareness and capital markets marketing firm helping OTCQB, OTCQX, Nasdaq, and growth-stage public companies get discovered by investors.",
  openGraph: {
    title: "About Vizio Marketing Canada",
    description:
      "Who is Vizio Marketing? A Canada-based investor awareness and capital markets marketing firm helping OTCQB, OTCQX, Nasdaq, and growth-stage public companies get discovered by investors.",
    url: "https://viziomarketing.com/about",
    images: ["/assets/advisory-meeting.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vizio Marketing Canada",
    description:
      "Who is Vizio Marketing? A Canada-based investor awareness and capital markets marketing firm helping OTCQB, OTCQX, Nasdaq, and growth-stage public companies get discovered by investors.",
    images: ["/assets/advisory-meeting.webp"],
  },
};

export default function AboutPage() {
  const faqPreview = FAQ_ITEMS.slice(0, 4);

  return (
    <SiteShell>
      <JsonLdScript data={getFaqJsonLd([...faqPreview])} />
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">About Vizio Marketing</div>
          <h1 className="reveal delay-1">
            Who is Vizio Marketing?
          </h1>
          <p className="reveal delay-2">
            Vizio Marketing is a Canada-based investor awareness and capital
            markets marketing firm. {COMPANY.foundedLabel}, we help public and
            growth-stage companies communicate clearly, reach investors, and
            improve market visibility across Canada and the United States.
          </p>
        </div>
      </header>

      <section className="about-visual">
        <div className="wrap">
          <figure className="wide-image">
            <img
              src="/assets/advisory-meeting.webp"
              alt="Modern corporate architecture representing progress and strategic advisory"
            />
            <figcaption>
              Investor awareness, professional communication, and long-term
              market relationships.
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="wrap two-grid">
          <article className="card">
            <h2>What Vizio Marketing does</h2>
            <p>
              Most public companies face the same challenge: the market does
              not fully understand their story. Even strong companies can remain
              overlooked if investors never discover them.
            </p>
            <p>
              Vizio Marketing helps OTCQB, OTCQX, Nasdaq, and growth-stage public
              companies increase investor awareness through investor relations
              strategy, corporate storytelling, digital campaigns, AI-powered
              investor acquisition, and capital markets advisory support.
            </p>
          </article>
          <article className="card">
            <h2>Where we are based</h2>
            <p>
              {COMPANY.name} operates from Laval, Quebec, Canada, and supports
              companies seeking investor visibility in Canadian and U.S.
              markets.
            </p>
            <p>
              {COMPANY.addressLine1}
              <br />
              {COMPANY.addressLine2}
              <br />
              {COMPANY.addressCountry}
              <br />
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              <br />
              <a href={COMPANY.emailHref}>{COMPANY.email}</a>
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">For public companies</div>
              <h2>What we do for OTC and Nasdaq companies</h2>
            </div>
            <p className="lead">
              Practical investor communications and awareness programs designed
              for listed and growth-stage companies that need clearer market
              understanding.
            </p>
          </div>
          <div className="services">
            <article className="service">
              <b>1</b>
              <h3>Investor relations strategy</h3>
              <p>
                Clear messaging, investment thesis development, and shareholder
                communication programs that help investors understand the
                opportunity.
              </p>
            </article>
            <article className="service">
              <b>2</b>
              <h3>Investor awareness campaigns</h3>
              <p>
                Digital campaigns across social platforms, financial media,
                influencers, email, and retargeting to reach relevant investor
                audiences.
              </p>
            </article>
            <article className="service">
              <b>3</b>
              <h3>AI-powered investor acquisition</h3>
              <p>
                Audience segmentation, permission-based investor email
                marketing, and campaign-generated leads for public-company
                outreach.
              </p>
            </article>
            <article className="service">
              <b>4</b>
              <h3>Capital markets advisory</h3>
              <p>
                Positioning support for OTCQB, OTCQX, Nasdaq preparation,
                shareholder growth strategy, and market-facing communications.
              </p>
            </article>
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="btn primary" href="/services">
              View all services →
            </Link>{" "}
            <Link className="btn" href="/investor-awareness">
              Investor awareness details →
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap two-grid">
          <article className="card">
            <h2>Our mission</h2>
            <p>
              Helping quality companies get discovered — clearly,
              professionally, and consistently.
            </p>
            <p>
              {COMPANY.yearsCopy} capital markets, investor relations, and
              growth campaigns to help companies earn attention from the right
              investors.
            </p>
          </article>
          <article className="card">
            <h2>Compliance-conscious approach</h2>
            <p>
              Campaign content is based on approved public information. Clients
              approve material before publication. Compensated promotions are
              disclosed. Vizio Marketing does not guarantee share-price
              appreciation, trading volume, financing success, liquidity, or
              investment results.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">FAQ</div>
              <h2>Common questions about Vizio Marketing</h2>
            </div>
            <p className="lead">
              Plain-language answers for companies researching investor
              awareness support in Canada and the United States.
            </p>
          </div>
          <div className="two-grid">
            {faqPreview.map((item) => (
              <article className="card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="btn" href="/faq">
              View full FAQ →
            </Link>{" "}
            <Link className="btn primary" href="/contact">
              Contact Vizio Marketing →
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Values</div>
              <h2>Principles for credible investor awareness.</h2>
            </div>
            <p className="lead">
              Vizio Marketing combines capital markets expertise, investor
              relations, digital marketing, AI-powered intelligence, and global
              investor reach in one focused advisory model.
            </p>
          </div>
          <div className="values">
            <span className="pill">Integrity</span>
            <span className="pill">Capital Markets Expertise</span>
            <span className="pill">Investor Awareness</span>
            <span className="pill">AI-Powered Intelligence</span>
            <span className="pill">Global Reach</span>
            <span className="pill">Long-Term Growth</span>
            <span className="pill">Transparency</span>
            <span className="pill">Professionalism</span>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
