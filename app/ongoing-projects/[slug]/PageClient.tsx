"use client";

import styles from "./page.module.css";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { useGallery } from "@/context/GalleryContext";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectDetailClient({ project }: any) {
  const { openGallery } = useGallery();

  /* ✅ FILTER OTHER PROJECTS */
  const otherProjects = projects.filter(
    (p) => p.slug !== project.slug
  );

  return (
    <section className={styles.section}>

      {/* HERO */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroSplit}>
          
          {/* LEFT IMAGE */}
          <div className={styles.heroImage}>
            <img src={project.image} alt={project.name} />
          </div>

          {/* RIGHT CONTENT */}
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

            <button className={styles.cta}>
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

            {/* OVERVIEW */}
            <p className={styles.overview}>
              {project.name} is a premium real estate project located in{" "}
              {project.location}, Hyderabad with excellent infrastructure
              and investment potential.
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
              {project.gallery.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={project.name}
                  onClick={() => openGallery(project.gallery, index)}
                />
              ))}
            </div>

            {/* MEDIA */}
            <div className={styles.mediaBlock}>
              <iframe
                src="https://www.youtube.com/embed/UhUa8S0jVVQ"
                allowFullScreen
                title="Project video"
              ></iframe>

              <iframe
                src={`https://maps.google.com/maps?q=${project.location}&output=embed`}
                title="Project location map"
              ></iframe>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className={styles.sidebar}>

            {/* DETAILS */}
            <div className={styles.details}>
              <h3>Project Details</h3>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Plot Size:</strong> 150 – 300 Sq.Yds</p>
              <p><strong>Status:</strong> Ongoing</p>
            </div>

            {/* FORM */}
            <div className={styles.form}>
              <h3>Schedule Visit</h3>
              <EnquiryForm />
            </div>

            {/* ✅ OTHER PROJECTS */}
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