"use client";

import styles from "./page.module.css";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { useState } from "react";

export default function BlogDetailClient({ blog }: any) {
  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [error, setError] = useState("");

  const handleWhatsApp = () => {
    setError("");

    const phoneRegex = /^[1-9][0-9]{9}$/;

    if (!name.trim()) return setError("Please enter your name");
    if (!phoneRegex.test(phone))
      return setError("Enter valid 10-digit mobile number");

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email))
        return setError("Enter valid email address");
    }

    const message = `
Hello Aniva Group,

I’m interested in your projects.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Requirement: ${requirement || "Not specified"}

Source: Blog - ${blog.title}

Please share more details.
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
          src={blog.image}
          alt={`${blog.title} real estate blog`}
        />

        <div className={styles.overlay}>
          <h1>{blog.title}</h1>
          <p>{blog.date}</p>
        </div>
      </div>

      {/* 🔥 SEO INTRO */}
      <div className={styles.introText}>
        <p>
          {blog.description} Learn more about real estate investment,
          property buying tips, and market trends in Hyderabad with Aniva Group insights.
        </p>
      </div>

      {/* MAIN */}
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* CONTENT */}
          <div className={styles.main}>
            {blog.content.split("\n").map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* SIDEBAR */}
          <div className={styles.sidebar}>

            {/* FORM */}
            <div className={styles.cta}>
              <h3>Schedule a Site Visit</h3>

              <input
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Mobile Number *"
                maxLength={10}
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
              />

              <input
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                placeholder="Requirement"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              />

              {error && <p className={styles.error}>{error}</p>}

              <button onClick={handleWhatsApp}>
                Send via WhatsApp
              </button>
            </div>

            {/* RELATED */}
            <div className={styles.related}>
              <h4>Related Articles</h4>

              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`}>
                  <div className={styles.relatedItem}>
                    <img
                      src={item.image}
                      alt={`${item.title} blog`}
                    />
                    <span>{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}