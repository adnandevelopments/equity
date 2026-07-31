"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const revealItems = document.querySelectorAll(
      ".service,.who-card,.insight,.pill,.quote-card,.card,.focus-card,.cta,.insight-list-card",
    );

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      );

      revealItems.forEach((item) => {
        item.classList.add("scroll-reveal");
        observer.observe(item);
      });

      return () => observer.disconnect();
    }

    revealItems.forEach((item) => {
      item.classList.add("scroll-reveal", "is-visible");
    });
  }, []);

  return null;
}
