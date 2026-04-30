"use client";

import styles from "./FloatingButtons.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const phone = "919063725514"; // update with your number

  const whatsappMessage = encodeURIComponent(
    "Hello Aniva Group, I am interested in your real estate projects. Please share more details."
  );

  const whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <div className={styles.container}>

      {/* CALL BUTTON */}
      <a
        href={`tel:${phone}`}
        className={`${styles.button} ${styles.call}`}
        aria-label="Call Aniva Group"
      >
        <FaPhoneAlt />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp} ${styles.pulse}`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}