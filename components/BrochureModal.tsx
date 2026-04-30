"use client";

import styles from "./BrochureModal.module.css";
import { useState } from "react";

export default function BrochureModal({ onClose }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    const phoneRegex = /^[1-9][0-9]{9}$/;

    if (!name) return setError("Enter your name");
    if (!phoneRegex.test(phone))
      return setError("Enter valid mobile number");

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email))
        return setError("Enter valid email");
    }

    /* ✅ OPEN PDF */
    window.open("/docs/partner-brochure.pdf", "_blank");

    /* ✅ SEND WHATSAPP */
    const message = `
Hello Aniva Group,

I downloaded the partnership brochure.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Please connect with me for partnership.
    `;

    window.open(
      `https://wa.me/919699445566?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className={styles.overlay}>

      <div className={styles.modal}>
        <h2>Download Brochure</h2>

        <input
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Mobile Number *"
          maxLength={10}
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, ""))
          }
        />

        <input
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button onClick={handleSubmit}>
          Download & Continue
        </button>

        <span className={styles.close} onClick={onClose}>
          ✕
        </span>
      </div>

    </div>
  );
}