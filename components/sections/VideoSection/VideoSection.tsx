import styles from "./VideoSection.module.css";

const videos = [
  {
    title: "Aniva Group Project Overview",
    url: "https://www.youtube.com/embed/UhUa8S0jVVQ",
  },
  {
    title: "Aniva Group Site Visit Experience",
    url: "https://www.youtube.com/embed/UhUa8S0jVVQ", // 👉 replace with 2nd video later
  },
];

export default function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Explore Our Projects</h2>
          <p>
            Watch videos showcasing Aniva Group’s real estate developments,
            locations, and customer experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {videos.map((video, index) => (
            <div key={index} className={styles.card}>

              <div className={styles.videoWrapper}>
                <iframe
                  src={video.url}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>{video.title}</h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}