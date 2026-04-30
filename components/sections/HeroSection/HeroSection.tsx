"use client";

import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const videoId = "UhUa8S0jVVQ";

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h1>
            Premium Real Estate Projects by{" "}
            <span>Aniva Group</span>
          </h1>

          <p>
            Discover high-growth investment opportunities with Aniva Group’s
            ongoing and delivered real estate projects in prime locations.
          </p>

          <div className={styles.actions}>
            <Link href="/ongoing-projects" className={styles.primaryBtn}>
              Explore Projects
            </Link>

            <Link href="/contact" className={styles.secondaryBtn}>
              Schedule Visit
            </Link>
          </div>
        </div>

        {/* RIGHT YOUTUBE VIDEO */}
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
            title="Aniva Group Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}