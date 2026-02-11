import React from "react";

import styles from "../styles/about.module.css";

function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 id="about" className={styles.title}>
            About Us
          </h1>
          <p className={styles.description}>
            We are Into The Jungle, a project dedicated to giving young people
            opportunities to perform live rock music in front of a large, paying
            audience. Founded in 2025 by George Cooper and Samuel Whittle, Into
            the Jungle has only grown since with connections and associated
            bands throughout the BCP area. If you are interested in getting
            involved - whether as a musician, sound technician, graphic designer
            or any other niche you think might come in handy, drop us a message!
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/Group Photo.jpeg"}
          alt="About Us"
          className={styles.image}
        />
      </div>
    </section>
  );
}

export default About;
