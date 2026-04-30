"use client";

import styles from "./CTASection.module.css";
import { useQuoteModal } from "@/context/QuoteModalContext";
import Link from "next/link";

export default function CTASection() {
  const { open } = useQuoteModal();

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2>
          Looking to Invest in Premium Real Estate?
        </h2>

        <p>
          Connect with Aniva Group today and schedule a site visit to explore
          the best real estate investment opportunities in prime locations.
        </p>

        <div className={styles.actions}>

          <button
            onClick={open}
            className={styles.primaryBtn}
          >
            Schedule Visit
          </button>

          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}