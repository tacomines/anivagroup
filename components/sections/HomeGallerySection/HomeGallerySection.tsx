"use client";

import { useState } from "react";
import styles from "./index.module.css";
import { useGallery } from "@/context/GalleryContext";

const categories = ["All", "Blouses", "Sarees", "Skirts", "Punjabis", "Kids"];

const images = [
  { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800", cat: "Blouses" },
  { src: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800", cat: "Sarees" },
  { src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800", cat: "Skirts" },
  { src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800", cat: "Punjabis" },
  { src: "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=800", cat: "Kids" },
  { src: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800", cat: "Blouses" },
];

export default function HomeGallerySection() {
  const [active, setActive] = useState("All");
  const { openGallery } = useGallery();

  const filtered =
    active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Our Designs</h2>

        {/* FILTER */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? styles.active : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {filtered.map((img, i) => (
            <div
              key={i}
              className={styles.card}
              onClick={() => openGallery(filtered.map(f => f.src), i)}
            >
              <img src={img.src} alt={img.cat} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}