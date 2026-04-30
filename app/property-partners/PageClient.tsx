"use client";

import styles from "./page.module.css";
import { useState } from "react";
import BrochureModal from "@/components/BrochureModal";

export default function PartnersClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setError("");

    const phoneRegex = /^[1-9][0-9]{9}$/;

    if (!name) return setError("Enter your name");
    if (!phoneRegex.test(phone))
      return setError("Enter valid mobile number");

    const message = `
Hello Aniva Group,

I’m interested in becoming a Property Partner.

Name: ${name}
Phone: ${phone}
Partner Type: ${type || "Not specified"}

Please share partnership details.
    `;

    window.open(
      `https://wa.me/919699445566?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="/images/banners/theam-image.png"
          alt="Real estate partnership opportunities with Aniva Group"
        />

        <div className={styles.overlay}>
          <h1>Partner With Us</h1>
          <p>Grow together with trusted real estate opportunities</p>
        </div>
      </div>

      {/* 🔥 SEO TEXT */}
      <div className={styles.introText}>
        <p>
          Explore real estate partnership opportunities with Aniva Group in
          Hyderabad including joint ventures, land development, and channel
          partnerships designed for long-term growth and success.
        </p>
      </div>

      <div className={styles.container}>

        {/* STATS */}
        <div className={styles.stats}>
          <div><h3>12+</h3><p>Projects Delivered</p></div>
          <div><h3>500+</h3><p>Happy Customers</p></div>
          <div><h3>100+</h3><p>Channel Partners</p></div>
          <div><h3>10+</h3><p>Years Experience</p></div>
        </div>

        {/* WHY */}
        <div className={styles.block}>
          <h2>Why Partner With Aniva?</h2>
          <p>
            We provide strong market presence, premium developments, and a
            transparent ecosystem to ensure mutual growth and long-term success.
          </p>
        </div>

        {/* TYPES */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Channel Partners</h3>
            <p>Earn attractive commissions by selling our projects.</p>
          </div>

          <div className={styles.card}>
            <h3>Landowners</h3>
            <p>Unlock land value through joint development.</p>
          </div>

          <div className={styles.card}>
            <h3>Investors</h3>
            <p>Invest in fast-growing real estate opportunities.</p>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className={styles.testimonials}>
          <h2>What Our Partners Say</h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>“Working with Aniva has been seamless...”</p>
              <span>— Channel Partner</span>
            </div>

            <div className={styles.testimonial}>
              <p>“We partnered for a land development...”</p>
              <span>— Landowner</span>
            </div>

            <div className={styles.testimonial}>
              <p>“Great team and excellent ROI...”</p>
              <span>— Investor</span>
            </div>
          </div>
        </div>

        {/* LOGOS */}
        <div className={styles.logos}>
          <h2>Trusted By</h2>
          <div className={styles.logoRow}>
            <img src="/images/logo-big.png" alt="Partner logo" />
            <img src="/images/logo-big.png" alt="Partner logo" />
            <img src="/images/logo-big.png" alt="Partner logo" />
            <img src="/images/logo-big.png" alt="Partner logo" />
          </div>
        </div>

        {/* BROCHURE CTA */}
        <div className={styles.brochure}>
          <div>
            <h2>Download Partnership Brochure</h2>
            <p>Get detailed insights about our projects and partnerships.</p>
          </div>

          <button
            className={styles.downloadBtn}
            onClick={() => setOpen(true)}
          >
            Download Brochure
          </button>
        </div>

        {open && <BrochureModal onClose={() => setOpen(false)} />}

        {/* FORM */}
        <div className={styles.form}>
          <h2>Become a Partner</h2>

          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Mobile Number"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Partner Type</option>
            <option>Channel Partner</option>
            <option>Landowner</option>
            <option>Investor</option>
          </select>

          {error && <p className={styles.error}>{error}</p>}

          <button onClick={handleSubmit}>
            Submit via WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}