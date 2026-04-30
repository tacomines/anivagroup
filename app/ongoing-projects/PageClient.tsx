"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "@/data/projects";

export default function ProjectsPageClient() {
  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="/images/banners/theam-image.png"
          alt="Ongoing real estate projects in Hyderabad by Aniva Group"
        />
        <div className={styles.heroOverlay}>
          <h1>Ongoing Projects</h1>
          <p>Discover premium investment opportunities with Aniva Group</p>
        </div>
      </div>

      {/* 🔥 SEO CONTENT (IMPORTANT) */}
      <div className={styles.introText}>
        <p>
          Explore Aniva Group’s ongoing real estate projects in Hyderabad,
          including premium plotted developments in high-growth locations like
          Tellapur and Nallagandla. These projects offer excellent connectivity,
          clear titles, and strong investment potential.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              href={`/ongoing-projects/${project.slug}`}
              key={project.slug}
              className={styles.card}
            >
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${project.name} real estate project in ${project.location} Hyderabad`}
                />

                {/* LOGO */}
                <div className={styles.logoOverlay}>
                  <img src="/images/icon.png" alt="Aniva Group logo" />
                </div>
              </div>

              {/* CONTENT */}
              <div className={styles.cardContent}>
                <h3>{project.name}</h3>
                <p className={styles.location}>{project.location}</p>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}