"use client";

import styles from "./GetQuoteModal.module.css";
import { useState, useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function GetQuoteModal({ isOpen, onClose }: Props) {
  const phone = "919063725514"; // update if needed

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string) => {
    let cleaned = value.replace(/\D/g, "");
    if (cleaned.startsWith("0")) cleaned = cleaned.substring(1);
    cleaned = cleaned.slice(0, 10);

    setForm({ ...form, phone: cleaned });
  };

  /* VALIDATION */
  const validate = () => {
    if (form.name.trim().length < 3) return "Enter valid name";
    if (!/^[6-9]\d{9}$/.test(form.phone)) return "Enter valid mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter valid email";
    return null;
  };

  /* WHATSAPP SUBMIT */
  const handleSubmit = () => {
    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    const text = `Hello Aniva Group,

I am ${form.name}

📞 Mobile: ${form.phone}
📧 Email: ${form.email}

🏡 Interested In:
${form.message || "Site Visit / Project Details"}

Please assist me with more details.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2>
          Schedule <span className={styles.gradient}>Aniva Group</span> Visit
        </h2>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Mobile Number *"
            value={form.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />

          <textarea
            placeholder="Project / Location (Optional)"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button type="submit" onClick={handleSubmit}>
            Submit & Schedule Visit
          </button>
        </form>
      </div>
    </div>
  );
}