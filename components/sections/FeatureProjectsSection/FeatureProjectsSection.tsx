import Link from "next/link";
import Image from "next/image";
import styles from "./FeatureProjectsSection.module.css";

const projects = [
  {
    title: "Nallagandla Project",
    location: "Nallagandla, Hyderabad",
    image: "/images/projects/nallagandla/nallagandla-thumbnail.webp",
    slug: "nallagandla",
  },
  {
    title: "Tellapur Project",
    location: "Tellapur, Hyderabad",
    image: "/images/projects/tellapur/tellapur-thumbnail.webp",
    slug: "tellapur",
  },
];

export default function FeatureProjectsSection() {
  return (
    <section className="section sectionLight">
      <div className="container">

        {/* HEADER */}
        <div className="sectionHeader">
          <h2>Ongoing Projects</h2>
          <p>
            Explore ongoing real estate projects in Hyderabad by Aniva Group,
            including premium plotted developments in Tellapur and Nallagandla
            with strong investment potential and clear legal titles.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/ongoing-projects/${project.slug}`}
              className={styles.card}
            >
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={`${project.title} real estate project in ${project.location}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* OVERLAY */}
                <div className={styles.overlay}>
                  <img
                    src="/images/icon.png"
                    alt="Aniva Group"
                    className={styles.logo}
                  />

                  <button className={styles.cta}>
                    View Project →
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}