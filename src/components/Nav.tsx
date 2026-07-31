"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  onNewsletterOpen: () => void;
};

export default function Nav({ onNewsletterOpen }: NavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuOpen = useRef(false);

  const closeMenu = useCallback(() => {
    navRef.current?.classList.remove("menu-open");
    menuOpen.current = false;
    const toggle = navRef.current?.querySelector(".menu-toggle");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  }, []);

  const scrollToContactForm = useCallback(() => {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "/contact#contact-form");
  }, []);

  const handleContactClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      closeMenu();
      if (pathname === "/contact") {
        e.preventDefault();
        scrollToContactForm();
      }
    },
    [pathname, scrollToContactForm, closeMenu],
  );

  const toggleMenu = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    menuOpen.current = !menuOpen.current;
    nav.classList.toggle("menu-open", menuOpen.current);
    const toggle = nav.querySelector(".menu-toggle");
    toggle?.setAttribute("aria-expanded", String(menuOpen.current));
    toggle?.setAttribute(
      "aria-label",
      menuOpen.current ? "Close menu" : "Open menu",
    );
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const handleClick = (e: MouseEvent) => {
      if (!nav.contains(e.target as Node)) closeMenu();
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("click", handleClick);
    };
  }, [closeMenu]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Equity Alliance home">
          <img src="/assets/equity-alliance-logo.png" alt="Equity Alliance logo" />
          <span>
            Equity
            <br />
            Alliance
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="primary-menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="links" id="primary-menu" aria-label="Primary navigation">
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/investor-awareness" onClick={closeMenu}>
            Investor Awareness
          </Link>
          <Link href="/insights" onClick={closeMenu}>
            Insights
          </Link>
          <Link href="/contact#contact-form" onClick={handleContactClick}>
            Contact
          </Link>
          <button
            className="nav-link-button"
            type="button"
            onClick={() => {
              closeMenu();
              onNewsletterOpen();
            }}
          >
            Stay Updated
          </button>
          <Link className="nav-cta" href="/contact" onClick={closeMenu}>
            Schedule Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
