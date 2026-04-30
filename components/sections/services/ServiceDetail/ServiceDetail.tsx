"use client";

import styles from "./index.module.css";

export default function ServiceDetail() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Our Tailoring Process</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span>01</span>
            <h4>Consultation</h4>
            <p>
              We understand your design, fabric, and style preferences to create
              the perfect outfit.
            </p>
          </div>

          <div className={styles.card}>
            <span>02</span>
            <h4>Measurements</h4>
            <p>
              Precise measurements are taken to ensure perfect fitting and comfort.
            </p>
          </div>

          <div className={styles.card}>
            <span>03</span>
            <h4>Stitching</h4>
            <p>
              Expert stitching with premium finishing and attention to detail.
            </p>
          </div>

          <div className={styles.card}>
            <span>04</span>
            <h4>Delivery</h4>
            <p>
              Final outfit delivered with quality checks and flawless finishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}