"use client";

import { useState } from "react";
import styles from "./EnquiryForm.module.css";

export default function EnquiryForm() {
  const phone = "919063725514";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  /* INPUT HANDLER */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* VALIDATION */
  const validate = () => {
    if (formData.name.trim().length < 3) {
      return "Please enter a valid name";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      return "Enter valid 10-digit mobile number (without 0)";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Enter valid email address";
    }

    if (formData.message.trim().length < 5) {
      return "Please enter your requirement";
    }

    return null;
  };

  /* WHATSAPP SUBMIT */
  const handleSubmit = () => {
    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    const text = `Hello Srija Boutique,

I am ${formData.name}

📞 Mobile: ${formData.mobile}
📧 Email: ${formData.email}

🧵 Requirement:
${formData.message}`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Get Quote</h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number (10 digits)"
        value={formData.mobile}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Requirement"
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />

      <button type="button" onClick={handleSubmit}>
        Send via WhatsApp
      </button>
    </div>
  );
}