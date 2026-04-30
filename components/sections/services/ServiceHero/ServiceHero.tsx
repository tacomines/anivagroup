"use client";

import styles from "./index.module.css";

export default function ServiceHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}