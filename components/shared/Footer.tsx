"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Property Partners", href: "/property-partners" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">

      <div className={styles["footer-container"]}>

        {/* LOGO + ABOUT */}
        <div className={styles["footer-col"]}>
          <Link
            href="/"
            className={styles["footer-logo"]}
            onClick={handleLogoClick}
          >
            <img
              src="/images/logo99.webp"
              alt="Aniva Group Logo"
            />
          </Link>

          <p className={styles["footer-desc"]}>
            Aniva Group is a trusted real estate developer offering premium plots,
            ongoing projects, and high-growth investment opportunities in prime locations.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className={styles["footer-col"]}>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PROJECT LINKS */}
        <div className={styles["footer-col"]}>
          <h3>Projects</h3>
          <ul>
            <li><Link href="/ongoing-projects/tellapur">Tellapur</Link></li>
            <li><Link href="/ongoing-projects/nallagandla">Nallagandla</Link></li>
            <li><Link href="/delivered-projects">Delivered Projects</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles["footer-col"]}>
          <h3>Contact</h3>

          <ul className={styles["footer-contact"]}>
            <li>Email: tacovex@anivagroup.com</li>
            <li>Phone: +91 90637 25514</li>
            <li>Location: Hyderabad, India</li>
          </ul>

          <div className={styles["footer-social"]}>
            <a
              href="https://www.facebook.com/p/Aniva-Group-61573690089449/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/aniva_group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/aniva-group/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/AnivaGroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.youtube.com/@AnivaGroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/919063725514"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles["footer-bottom"]}>

        <div className={styles["footer-left"]}>
          © {new Date().getFullYear()} Aniva Group. All rights reserved.
        </div>

        <div className={styles["footer-right"]}>
          <span>Design & Developed by</span>

          <a
            href="https://tacovex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/logo66.webp" alt="Tacovex" />
          </a>
        </div>

      </div>

    </footer>
  );
}