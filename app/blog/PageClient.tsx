"use client";

import styles from "./page.module.css";
import { blogs } from "@/data/blogs";
import Link from "next/link";

export default function BlogClient() {
  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="/images/banners/theam-image.png"
          alt="Real estate blog and insights in Hyderabad"
        />

        <div className={styles.heroOverlay}>
          <h1>Blog & Insights</h1>
          <p>Latest trends, tips & updates in real estate</p>
        </div>
      </div>

      {/* 🔥 SEO CONTENT */}
      <div className={styles.introText}>
        <p>
          Stay updated with the latest real estate trends, investment tips,
          and expert insights from Aniva Group. Learn about buying plots,
          market growth, and smart property investment strategies in Hyderabad.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className={styles.card}
            >
              <img
                src={blog.image}
                alt={`${blog.title} - real estate blog`}
              />

              <div className={styles.content}>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <span className={styles.date}>{blog.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}