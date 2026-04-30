"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { completedProjects } from "@/data/completedProjects";
import { useGallery } from "@/context/GalleryContext";

export default function DeliveredClient() {
  const { openGallery } = useGallery();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? completedProjects
      : completedProjects.filter((p) =>
          p.location.toLowerCase().includes(active.toLowerCase())
        );

  const allImages = filtered.map((p) => p.images[0]);

  return (
    <section className={styles.section}>
      
      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="/images/banners/theam-image.png"
          alt="Completed real estate projects by Aniva Group in Hyderabad and Bangalore"
        />

        <div className={styles.heroOverlay}>
          <h1>Delivered Projects</h1>
          <p>Crafted with trust, quality and attention to detail</p>

          {/* FILTERS */}
          <div className={styles.filters}>
            {["All", "Hyderabad", "Bangalore"].map((item) => (
              <button
                key={item}
                className={active === item ? styles.active : ""}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 SEO CONTENT */}
      <div className={styles.introText}>
        <p>
          Aniva Group has successfully delivered premium residential projects
          across Hyderabad and Bangalore, offering high-quality construction,
          modern design, and excellent connectivity in prime locations.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => openGallery(allImages, index)}
            >
              <img
                src={project.images[0]}
                alt={`${project.name} completed project in ${project.location}`}
              />

              <div className={styles.content}>
                <h3>{project.name}</h3>
                <p className={styles.location}>{project.location}</p>

                <div className={styles.meta}>
                  <span>{project.units}</span>
                  <span>{project.area || "—"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}