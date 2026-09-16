import NewsletterForm from "@/components/NewsletterForm";
import { COMPANY } from "@/lib/company";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <strong>{COMPANY.name}</strong>
        <div>
          {COMPANY.name} provides investor relations, strategic communications,
          and corporate advisory services. The company does not provide
          investment advice, securities brokerage services, or investment
          recommendations.
        </div>
        <div style={{ marginTop: 14, lineHeight: 1.7 }}>
          {COMPANY.addressLine1}
          <br />
          {COMPANY.addressLine2}
          <br />
          {COMPANY.addressCountry}
          <br />
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          <br />
          <a href={COMPANY.emailHref}>{COMPANY.email}</a>
        </div>
        <div className="newsletter-footer">
          <strong>Insights updates</strong>
          <NewsletterForm source="footer" buttonLabel="Sign up" />
          <p className="newsletter-fineprint">
            Occasional {COMPANY.name} insights. Unsubscribe any time.
          </p>
        </div>
      </div>
    </footer>
  );
}
