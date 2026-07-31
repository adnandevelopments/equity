export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <strong>Equity Alliance</strong>
        <div>
          Equity Alliance provides investor relations, strategic communications,
          and corporate advisory services. The company does not provide
          investment advice, securities brokerage services, or investment
          recommendations.
        </div>
        <div className="newsletter-footer">
          <strong>Insights updates</strong>
          <form className="newsletter-form" method="post" action="/contact-submit">
            <input type="hidden" name="form_type" value="newsletter" />
            <input type="hidden" name="newsletter_source" value="footer" />
            <input type="hidden" name="newsletter_started_at" value="0" />
            <div className="hidden-field" aria-hidden="true">
              <label>
                Website
                <input
                  name="newsletter_website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
            <label>
              <span className="sr-only">Email address</span>
              <input
                type="email"
                name="newsletter_email"
                required
                placeholder="Email address"
              />
            </label>
            <button type="submit">Sign up</button>
          </form>
          <p className="newsletter-fineprint">
            Occasional Equity Alliance insights. Unsubscribe any time.
          </p>
        </div>
      </div>
    </footer>
  );
}
