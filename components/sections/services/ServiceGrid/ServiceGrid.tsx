import styles from "./index.module.css";
import Link from "next/link";

const services = [
  {
    title: "Blouses",
    desc: "Perfect fit designer blouses tailored with precision and elegance.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200",
    link: "/tailoring/blouses",
  },
  {
    title: "Sarees",
    desc: "Elegant saree embroidery and custom finishing for every occasion.",
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=1200",
    link: "/tailoring/sarees",
  },
  {
    title: "Skirts",
    desc: "Custom stitched skirts with modern and traditional styles.",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1200",
    link: "/tailoring/skirts",
  },
  {
    title: "Punjabis",
    desc: "Stylish Punjabi suits crafted with premium fabrics and finishing.",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200",
    link: "/tailoring/punjabis",
  },
  {
    title: "Kids Special",
    desc: "Beautiful and comfortable custom outfits designed for kids.",
    image: "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?q=80&w=1200",
    link: "/tailoring/kids-special",
  },
  {
    title: "Custom Fit",
    desc: "Tailored designs crafted exactly to your measurements and style.",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200",
    link: "/tailoring/custom-fit",
  },
];

export default function ServiceGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Our Services</h2>
          <p>Tailored perfection with elegance and craftsmanship</p>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link href={service.link} key={index} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}