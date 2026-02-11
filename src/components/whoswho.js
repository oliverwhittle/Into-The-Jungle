import React from "react";

import styles from "../styles/whoswho.module.css";

function WhosWho() {
  return (
    <div id="team">
      <div className={styles.container}>
        <h1 className={styles.title}>Meet the Team</h1>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img src={process.env.PUBLIC_URL + "/images/George.jpeg"} alt="George" />
              <h2 className={styles.name}>George</h2>
              <p className={styles.description}>Test</p>
            </div>
            <div className={styles.card}>
              <img src={process.env.PUBLIC_URL + "/images/Samuel.jpeg"} alt="Sam" />
              <h2 className={styles.name}>Sam</h2>
              <p className={styles.description}>Test</p>
            </div>
              <div className={styles.card}>
              <img src={process.env.PUBLIC_URL + "/images/Celi.jpeg"} alt="Celi" />
              <h2 className={styles.name}>Celi</h2>
              <p className={styles.description}>Test</p>
            </div>
              <div className={styles.card}>
              <img src={process.env.PUBLIC_URL + "/images/Leon.jpeg"} alt="Leon" />
              <h2 className={styles.name}>Leon</h2>
              <p className={styles.description}>Test</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default WhosWho;
