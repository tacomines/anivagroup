"use client";

import styles from "./page.module.css";

export default function AboutPageClient() {
  return (
    <main className={styles.section}>

      {/* HERO */}
      <section className={styles.hero} aria-label="About Aniva Group">
        <img
          src="/images/banners/theam-image.png"
          alt="Aniva Group real estate developments in Hyderabad"
        />

        <div className={styles.heroOverlay}>
          <h1>About Aniva Group</h1>
          <p>
            Building trust, delivering quality, and creating future-ready communities in Hyderabad.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.container}>

        {/* INTRO */}
        <div className={styles.intro}>
          <h2>Who We Are</h2>
          <p>
            Aniva Group is a trusted real estate developer in Hyderabad,
            focused on delivering premium residential plots, villa projects,
            and investment opportunities in high-growth locations. With a
            commitment to transparency, quality, and customer satisfaction,
            we help individuals and investors secure their future with confidence.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>
              To become a leading real estate brand in Hyderabad known for
              innovation, trust, and sustainable development across prime locations.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality real estate projects with clear titles,
              strategic locations, and strong growth potential for both investors
              and homeowners.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Our Values</h3>
            <p>
              Transparency, integrity, customer-first approach, and timely
              delivery are the core principles that drive every Aniva project.
            </p>
          </div>

        </div>

        {/* WHY */}
        <div className={styles.why}>
          <h2>Why Choose Aniva Group</h2>

          <ul>
            <li>✔ Prime location projects in Hyderabad with high growth potential</li>
            <li>✔ Clear legal titles and government-approved layouts</li>
            <li>✔ Transparent pricing with no hidden costs</li>
            <li>✔ Customer-focused service and guidance</li>
            <li>✔ Strong after-sales support and assistance</li>
          </ul>
        </div>

      </section>

    </main>
  );
}