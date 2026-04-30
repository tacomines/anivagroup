import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Krishna Kumar",
    rating: 4,
    text: `I recently purchased my dream home with the help of Aniva, and it couldn't have gone more smoothly. It was so knowledgeable and gave me sound advice, acted quickly, and made me feel confident and secure throughout the entire process. I would highly recommend Aniva to anyone thinking of buying or selling a home.`,
  },
  {
    name: "Sravan Raghavendra",
    rating: 5,
    text: `My wife & I have moved 6 times in the last 25 years. Obviously, we've dealt with many realtors both on the buying and selling side. I have to say that David is by far the BEST realtor we've ever worked with, his professionalism, personality, attention to detail, responsiveness and his ability to close the deal was Outstanding!`,
  },
  {
    name: "Anil Kumar",
    rating: 4,
    text: `Smart planning, great amenities, and courteous staff. The handover process was smooth. Loved the experience! I would definitely recommend them to others. The entire journey from inquiry to possession was seamless, and the team made sure every detail was taken care of with professionalism and warmth.`,
  },
  {
    name: "Sai",
    rating: 5,
    text: `Choosing Aniva was one of the best decisions we made. From the very first site visit to the final handover, the team was incredibly professional, transparent, and supportive. The quality of construction exceeded our expectations, and every commitment made was delivered on time. We truly feel at home with Aniva!`,
  },
];

function renderStars(count: number) {
  return "★".repeat(count) + "☆".repeat(5 - count);
}

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>What Our Clients Say</h2>
          <p>
            Real experiences from customers who trusted Aniva Group.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>

              {/* USER TOP */}
              <div className={styles.userTop}>
                <div className={styles.avatar}>
                  {item.name.charAt(0)}
                </div>
                <h4>{item.name}</h4>
              </div>

              {/* TEXT */}
              <p className={styles.text}>
                “{item.text}”
              </p>

              {/* STARS BOTTOM */}
              <div className={styles.rating}>
                {renderStars(item.rating)}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}