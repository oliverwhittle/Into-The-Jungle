import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import WhosWho from "../components/whoswho";
import Gallery from "../components/gallery";
import Bands25 from "../components/2025bands";
import Bands26 from "../components/2026bands";
import Tickets from "../components/tickets";
import Footer from "../components/footer";

import styles from "../styles/main.module.css";

function Main() {

  const slides = [
    "https://placehold.co/300",
    "https://placehold.co/300",
    "https://placehold.co/300",
    "https://placehold.co/300",
  ];

  return (
    <>
      <Hero />
      <Tickets />
      <hr className={styles.divider} />
      <About />
      <hr className={styles.divider} />
      <Bands26 />
      <hr className={styles.divider} />
      <WhosWho />
      <hr className={styles.divider} />
      <Gallery images={slides} />
      <hr className={styles.divider} />
      <Bands25 />
      <Footer />
    </>
  );
}

export default Main;
