import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import WhosWho from "../components/whoswho";
import Gallery from "../components/gallery";
import Bands from "../components/bands";
import Tickets from "../components/tickets";
import Footer from "../components/footer";

//import styles from "../styles/main.module.css";

function Main() {

  const slides = [
    "https://placehold.co/300",
    "https://placehold.co/300",
    "https://placehold.co/300",
    "https://placehold.co/300",
  ];

  return (
    <>
      {/* <div className={styles.overlayWrapper}>
        <img
          src="/images/Jungle-Border.png"
          alt="Overlay"
          className={styles.overlay}
        />
      </div> */}
      <Hero />
      <Tickets />
      <About />
      <Bands />
      <WhosWho />
      <Gallery images={slides} />
      <Footer />
    </>
  );
}

export default Main;
