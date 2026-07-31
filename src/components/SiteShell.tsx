"use client";

import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import NewsletterPopout from "./NewsletterPopout";
import ScrollReveal from "./ScrollReveal";
import ScrollToTop from "./ScrollToTop";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Nav onNewsletterOpen={() => setNewsletterOpen(true)} />
      <main>{children}</main>
      <Footer />
      <NewsletterPopout
        open={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
      <ScrollReveal />
    </>
  );
}
