"use client";

import styles from "./page.module.css";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function ProjectDetailClient({ project }: any) {

  /* ✅ WHATSAPP CTA */
  const handleWhatsApp = () => {
    const message = `Hello Aniva Group,

I am interested in ${project.name} located in ${project.location}.

Please share more details.`;

    window.open(
      `https://wa.me/919699445566?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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
            {project.description ||
              `${project.name} is a premium plotted development in ${project.location}, Hyderabad offering excellent connectivity and investment potential.`}
          </p>

          <div className={styles.heroActions}>
            <button className={styles.cta} onClick={handleWhatsApp}>
              Schedule Visit
            </button>

            {project.brochure && (
              <a href={project.brochure} target="_blank">
                Download Brochure
              </a>
            )}
          </div>
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
              {project.location}, Hyderabad. This project is designed for
              modern living with excellent infrastructure, connectivity,
              and strong appreciation potential.
            </p>

            {/* AMENITIES */}
            {project.amenities && (
              <div className={styles.amenities}>
                {project.amenities.map((item: string, i: number) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            )}

            {/* HIGHLIGHTS */}
            {project.highlights && (
              <ul className={styles.highlights}>
                {project.highlights.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* GALLERY */}
            {project.gallery && (
              <div className={styles.visualBlock}>
                {project.gallery.map((img: string, i: number) => (
                  <img key={i} src={img} alt={project.name} />
                ))}
              </div>
            )}

            {/* VIDEO */}
            {project.video && (
              <div className={styles.mediaBlock}>
                <iframe
                  src={project.video}
                  allowFullScreen
                  title="Project video"
                ></iframe>
              </div>
            )}

            {/* MAP */}
            {project.map && (
              <div className={styles.mediaBlock}>
                <iframe
                  src={project.map}
                  title="Project location map"
                ></iframe>
              </div>
            )}

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