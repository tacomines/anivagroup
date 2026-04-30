"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { open } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(null);
  };

  /* ✅ FIX: HANDLE LOGO CLICK */
  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault(); // stop navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header>
      <nav className={`${styles.navbar} ${scrolled ? styles["navbar-scrolled"] : ""}`}>
        <div className={styles["navbar-container"]} ref={menuRef}>

          {/* LOGO */}
          <Link
            href="/"
            className={styles["navbar-logo"]}
            onClick={handleLogoClick}
          >
            <img src="/images/logo9.png" alt="Aniva Group Logo" />
          </Link>

          {/* HAMBURGER */}
          <div
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* MENU */}
          <ul className={`${styles["nav-menu"]} ${isOpen ? styles.open : ""}`}>

            {/* HOME ICON */}
            <li className={styles["home-icon"]}>
              <Link href="/" aria-label="Home" onClick={handleLogoClick}>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z" />
                </svg>
              </Link>
            </li>

            {navigation
              .filter((item) => item.label !== "Home")
              .map((item) => {
                const isDropdown = !!item.children;
                const isActive =
                  pathname === item.href ||
                  item.children?.some((c) => pathname === c.href);

                return (
                  <li
                    key={item.label}
                    className={isDropdown ? styles.dropdown : ""}
                    onMouseEnter={() => isDropdown && setDropdown(item.label)}
                    onMouseLeave={() => isDropdown && setDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`${styles["nav-link"]} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>

                    {/* DROPDOWN */}
                    {isDropdown && (
                      <ul
                        className={`${styles["dropdown-menu"]} ${
                          dropdown === item.label ? styles.show : ""
                        }`}
                      >
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link href={sub.href} onClick={closeMenu}>
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

            {/* CTA */}
            <li>
              <button
                onClick={() => {
                  open();
                  closeMenu();
                }}
                className={styles["cta-button"]}
              >
                Schedule Visit
              </button>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}