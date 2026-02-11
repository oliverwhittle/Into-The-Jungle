import React from "react";
import styles from "../styles/hero.module.css";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.videoContainer}>
                    <video autoPlay loop muted className={styles.video}>
                        <source src={process.env.PUBLIC_URL + "/images/ITJ-main-video.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className={styles.title}>INTO THE JUNGLE</h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;
