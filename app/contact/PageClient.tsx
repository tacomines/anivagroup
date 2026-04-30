"use client";

import styles from "./page.module.css";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function ContactPageClient() {
  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="/images/banners/theam-image.png"
          alt="Contact Aniva Group real estate office in Hyderabad"
        />

        <div className={styles.heroOverlay}>
          <h1>Contact Aniva Group</h1>
          <p>
            Get in touch for project details, site visits, and real estate investment opportunities.
          </p>
        </div>
      </div>

      {/* 🔥 SEO CONTENT */}
      <div className={styles.introText}>
        <p>
          Reach out to Aniva Group for premium real estate projects in Hyderabad.
          Our team is available to assist you with site visits, investment guidance,
          and property-related enquiries across prime locations.
        </p>
      </div>

      <div className={styles.container}>

        {/* GRID */}
        <div className={styles.grid}>

          {/* MAP */}
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps?q=Nallagandla+Lingampally+Hyderabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aniva Group Office Location Map"
            ></iframe>
          </div>

          {/* INFO */}
          <div className={styles.info}>

            <div className={styles.block}>
              <h3>Phone</h3>
              <a href="tel:9699445566">+91 90637 25514</a>
            </div>

            <div className={styles.block}>
              <h3>Email</h3>
              <a href="mailto:tacovex@anivagroup.com">
                tacovex@anivagroup.com
              </a>
            </div>

            <div className={styles.block}>
              <h3>Address</h3>
              <p>
                Avani Life Spaces Private Limited <br />
                3rd Floor, House No - 7-1-1 LIG <br />
                Plot No - 1 & 28, Opp SBI (Tellapur Branch) <br />
                Nallagandla, Lingampally <br />
                Rangareddy - 500019
              </p>
            </div>

            <div className={styles.block}>
              <h3>Working Hours</h3>
              <p>Monday – Sunday</p>
              <p>9:00 AM – 8:00 PM</p>
            </div>

          </div>

          {/* FORM */}
          <div className={styles.form}>
            <EnquiryForm />
          </div>

        </div>

      </div>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Aniva Group",
            url: "https://anivagroup.com",
            telephone: "+919699445566",
            email: "sales@anivagroup.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "3rd Floor, House No - 7-1-1 LIG, Plot No - 1 & 28",
              addressLocality: "Nallagandla",
              addressRegion: "Telangana",
              postalCode: "500019",
              addressCountry: "IN",
            },
          }),
        }}
      />

    </section>
  );
}