import styles from "./WhyChooseUsSection.module.css";
import Link from "next/link";

const points = [
  {
    title: "Prime Locations",
    desc: "Projects located in fast-growing areas with high future appreciation potential.",
  },
  {
    title: "Clear Legal Titles",
    desc: "All properties come with verified documentation ensuring secure investments.",
  },
  {
    title: "Trusted Developer",
    desc: "Aniva Group delivers quality real estate projects with transparency and trust.",
  },
  {
    title: "High ROI Potential",
    desc: "Designed for long-term growth and strong return on investment.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section sectionWhite">
      <div className="container">

        {/* HEADER */}
        <div className="sectionHeader">
          <h2>Why Choose Aniva Group</h2>
          <p>
            Aniva Group is a trusted real estate developer in Hyderabad offering
            premium plots, secure investments, and long-term growth opportunities.
          </p>
        </div>

        {/* SEO CONTENT */}
        <div className={styles.introText}>
          <p>
            We focus on delivering legally verified real estate projects in prime
            locations like Tellapur and Nallagandla. Whether you are an investor
            or a homebuyer, our projects are designed to offer excellent
            appreciation and future growth.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {points.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div>
            <h3>12+ Projects Delivered in Hyderabad</h3>
            <p>Completed Developments</p>
          </div>
          <div>
            <h3>500+ Happy Customers</h3>
            <p>Trusted Buyers</p>
          </div>
          <div>
            <h3>100+ Channel Partners</h3>
            <p>Sales Network</p>
          </div>
          <div>
            <h3>10+ Years Experience</h3>
            <p>Industry Expertise</p>
          </div>
        </div>

        {/* INTERNAL LINK */}
        <div className={styles.cta}>
          <Link href="/ongoing-projects">
            View Ongoing Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}