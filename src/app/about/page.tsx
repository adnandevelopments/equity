import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Vizio Marketing",
  description:
    "Vizio Marketing provides investor awareness, marketing, business development, and investor relations support for OTCQB, OTCQX, Nasdaq, and growth-stage public companies.",
  openGraph: {
    title: "About Vizio Marketing",
    description:
      "Vizio Marketing provides investor awareness, marketing, business development, and investor relations support for OTCQB, OTCQX, Nasdaq, and growth-stage public companies.",
    url: "https://equityalliancevc.com/about",
    images: ["/assets/advisory-meeting.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vizio Marketing",
    description:
      "Vizio Marketing provides investor awareness, marketing, business development, and investor relations support for OTCQB, OTCQX, Nasdaq, and growth-stage public companies.",
    images: ["/assets/advisory-meeting.webp"],
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <header className="page-hero">
        <div className="wrap">
          <div className="eyebrow reveal">About Vizio Marketing</div>
          <h1 className="reveal delay-1">
            Capital Markets Expertise. AI-Powered Investor Growth.
          </h1>
          <p className="reveal delay-2">
            Vizio Marketing helps OTCQB, OTCQX, Nasdaq, and growth-stage public
            companies increase market awareness, attract investors, improve
            shareholder engagement, and access capital.
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
            <h2>Our work</h2>
            <p>
              Most public companies face the same challenge: the market does
              not fully understand their story. Even exceptional companies can
              remain undervalued if investors never discover them.
            </p>
            <p>
              {COMPANY.sinceYearLabel}, Vizio Marketing has helped public and private
              companies increase visibility, communicate their investment
              thesis, attract investors, and access capital.
            </p>
          </article>
          <article className="card">
            <h2>Our mission</h2>
            <p>
              Helping quality companies get discovered — clearly,
              professionally, and consistently.
            </p>
          </article>
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
