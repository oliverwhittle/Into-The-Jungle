import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import WhosWho from "../components/whoswho";
import Gallery from "../components/gallery";
import Bands from "../components/bands";
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
      <Bands />
      <hr className={styles.divider} />
      <WhosWho />
      <hr className={styles.divider} />
      <Gallery images={slides} />
      <Footer />
    </>
  );
}

export default Main;
