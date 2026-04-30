"use client";

import styles from "./page.module.css";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { useGallery } from "@/context/GalleryContext";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailClient({ project }: any) {
  const { openGallery } = useGallery();

  const otherProjects = projects.filter(
    (p) => p.slug !== project.slug
  );

  /* ✅ SCROLL FUNCTION */
  const handleScheduleClick = () => {
    const formSection = document.getElementById("schedule-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroSplit}>
          
          <div className={styles.heroImage}>
            <Image
              src={project.image}
              alt={`${project.name} in ${project.location}`}
              width={800}
              height={500}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>

          <div className={styles.heroContent}>
            <h1>{project.name}</h1>

            <p className={styles.location}>
              {project.location}
            </p>

            <p className={styles.desc}>
              {project.description}
            </p>

            <div className={styles.stats}>
              <div>
                <strong>{project.floors}</strong>
                <span>Floors</span>
              </div>

              <div>
                <strong>{project.units}</strong>
                <span>Flats</span>
              </div>

              <div>
                <strong>{project.amenitiesCount}</strong>
                <span>Amenities</span>
              </div>
            </div>

            {/* ✅ FIXED BUTTON */}
            <button
              className={styles.cta}
              onClick={handleScheduleClick}
              aria-label={`Schedule a visit for ${project.name}`}
            >
              Schedule Visit
            </button>
          </div>

        </div>
      </div>

      {/* MAIN */}
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* LEFT */}
          <div className={styles.main}>
            <p className={styles.overview}>
              {project.name} is a premium real estate project located in{" "}
              {project.location}, Hyderabad with excellent infrastructure
              and investment potential.
            </p>

            <div className={styles.amenities}>
              <span>Clubhouse</span>
              <span>Children Park</span>
              <span>Street Lights</span>
              <span>Security</span>
            </div>

            <ul className={styles.highlights}>
              <li>HMDA Approved Layout</li>
              <li>Prime Location</li>
              <li>Blacktop Roads</li>
              <li>Clear Title</li>
            </ul>

            <div className={styles.visualBlock}>
              {project.gallery.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.name} image ${index + 1}`}
                  loading="lazy"
                  onClick={() => openGallery(project.gallery, index)}
                />
              ))}
            </div>

            <div className={styles.mediaBlock}>
              <iframe
                src="https://www.youtube.com/embed/UhUa8S0jVVQ"
                title={`${project.name} video`}
                loading="lazy"
              ></iframe>

              <iframe
                src={`https://maps.google.com/maps?q=${project.location}&output=embed`}
                title={`${project.name} map`}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className={styles.sidebar}>

            <div className={styles.details}>
              <h3>Project Details</h3>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Plot Size:</strong> 150 – 300 Sq.Yds</p>
              <p><strong>Status:</strong> Ongoing</p>
            </div>

            {/* ✅ ADD ID HERE */}
            <div id="schedule-form" className={styles.form}>
              <h3>Schedule Visit</h3>
              <EnquiryForm />
            </div>

            <div className={styles.otherProjects}>
              <h3>Other Projects</h3>

              {otherProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/ongoing-projects/${item.slug}`}
                  className={styles.otherCard}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}