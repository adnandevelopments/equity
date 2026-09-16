"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";

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
      <div className="kicker">Vizio Marketing insights</div>
      <h2>Stay close to investor awareness updates.</h2>
      <p>
        Occasional notes on market visibility, investor communication, and
        growth advisory.
      </p>
      <NewsletterForm
        source="popup"
        buttonLabel="Keep me updated"
        onSuccess={() => {
          window.setTimeout(hide, 1600);
        }}
      />
    </div>
  );
}
