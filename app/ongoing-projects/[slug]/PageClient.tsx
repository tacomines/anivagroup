"use client";

import styles from "./page.module.css";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function ProjectDetailClient({ project }: any) {
  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.heroSplit}>
        <div className={styles.heroImage}>
          <img
            src={project.image}
            alt={`${project.name} project in ${project.location} Hyderabad`}
          />
        </div>

        <div className={styles.heroContent}>
          <h1>{project.name}</h1>

          <p className={styles.location}>
            {project.location}, Hyderabad
          </p>

          <p className={styles.desc}>
            Premium residential plotted development with excellent connectivity,
            modern infrastructure, and strong long-term investment potential.
          </p>

          <button className={styles.cta}>
            Schedule Visit
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* LEFT */}
          <div className={styles.main}>

            {/* OVERVIEW */}
            <p className={styles.overview}>
              {project.name} is a premium real estate project located in{" "}
              {project.location}, Hyderabad. Designed for modern living,
              this development offers excellent connectivity, infrastructure,
              and future growth potential, making it ideal for both investors
              and homeowners.
            </p>

            {/* AMENITIES */}
            <div className={styles.amenities}>
              <span>Clubhouse</span>
              <span>Children Park</span>
              <span>Street Lights</span>
              <span>Security</span>
            </div>

            {/* HIGHLIGHTS */}
            <ul className={styles.highlights}>
              <li>HMDA Approved Layout</li>
              <li>Prime Location</li>
              <li>Blacktop Roads</li>
              <li>Clear Title</li>
            </ul>

            {/* GALLERY */}
            <div className={styles.visualBlock}>
              <img src={project.image} alt={project.name} />
              <img src={project.image} alt={project.name} />
              <img src={project.image} alt={project.name} />
            </div>

            {/* MEDIA */}
            <div className={styles.mediaBlock}>
              <iframe
                src="https://www.youtube.com/embed/UhUa8S0jVVQ"
                allowFullScreen
                title="Project video"
              ></iframe>

              <iframe
                src="https://maps.google.com/maps?q=Tellapur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Project location map"
              ></iframe>
            </div>

          </div>

          {/* RIGHT */}
          <div className={styles.sidebar}>

            <div className={styles.details}>
              <h3>Project Details</h3>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Plot Size:</strong> 150 – 300 Sq.Yds</p>
              <p><strong>Status:</strong> Ongoing</p>
            </div>

            <div className={styles.form}>
              <h3>Schedule Visit</h3>
              <EnquiryForm />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}