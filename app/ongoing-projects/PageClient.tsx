"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { projects } from "@/data/projects";

export default function ProjectsPageClient() {
  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>
        <Image
          src="/images/banners/theam-image.png"
          alt="Ongoing real estate projects in Hyderabad by Aniva Group"
          fill
          priority
          sizes="100vw"
        />

        <div className={styles.heroOverlay}>
          <h1>Ongoing Projects</h1>
          <p>Discover premium investment opportunities with Aniva Group</p>
        </div>
      </div>

      {/* SEO CONTENT */}
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
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={`${project.name} real estate project in ${project.location} Hyderabad`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className={styles.logoOverlay}>
                  <Image
                    src="/images/icon.png"
                    alt="Aniva Group logo"
                    width={60}
                    height={30}
                  />
                </div>
              </div>

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