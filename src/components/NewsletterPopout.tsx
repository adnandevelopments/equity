"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type NewsletterPopoutProps = {
  open: boolean;
  onClose: () => void;
};

export default function NewsletterPopout({
  open,
  onClose,
}: NewsletterPopoutProps) {
  const [visible, setVisible] = useState(false);
  const autoShown = useRef(false);
  const delayElapsed = useRef(false);

  const hide = useCallback(() => {
    setVisible(false);
    onClose();
    localStorage.setItem(
      "equity-newsletter-dismissed-until",
      String(Date.now() + 45 * 24 * 60 * 60 * 1000),
    );
  }, [onClose]);

  const show = useCallback(
    (manual = false) => {
      const dismissed =
        Number(localStorage.getItem("equity-newsletter-dismissed-until") || 0) >
        Date.now();
      const isSmallScreen = window.matchMedia("(max-width: 980px)").matches;
      if (autoShown.current || (!manual && (dismissed || isSmallScreen))) return;
      autoShown.current = true;
      setVisible(true);
    },
    [],
  );

  useEffect(() => {
    if (open) show(true);
  }, [open, show]);

  useEffect(() => {
    const maybeShow = () => {
      if (!delayElapsed.current) return;
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const scrollProgress = window.scrollY / maxScroll;
      if (scrollProgress >= 0.75 && window.scrollY > 900) show(false);
    };

    const timer = window.setTimeout(() => {
      delayElapsed.current = true;
      maybeShow();
    }, 45000);

    window.addEventListener("scroll", maybeShow, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", maybeShow);
    };
  }, [show]);

  useEffect(() => {
    document
      .querySelectorAll(
        'input[name="newsletter_started_at"], input[name="contact_started_at"]',
      )
      .forEach((input) => {
        (input as HTMLInputElement).value = String(
          Math.floor(Date.now() / 1000),
        );
      });
  }, []);

  if (!visible) return null;

  return (
    <div className="newsletter-popout" id="newsletter-popout">
      <button
        className="newsletter-popout-close"
        type="button"
        aria-label="Close newsletter signup"
        onClick={hide}
      >
        ×
      </button>
      <div className="kicker">Equity Alliance insights</div>
      <h2>Stay close to investor awareness updates.</h2>
      <p>
        Occasional notes on market visibility, investor communication, and
        growth advisory.
      </p>
      <form className="newsletter-form" method="post" action="/contact-submit">
        <input type="hidden" name="form_type" value="newsletter" />
        <input type="hidden" name="newsletter_source" value="popup" />
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
        <button type="submit">Keep me updated</button>
      </form>
    </div>
  );
}
