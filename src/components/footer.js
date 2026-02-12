import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import styles from "../styles/footer.module.css";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Into The Jungle Website. All rights reserved.</p>
        <p className={styles.email}>Contact us at: intothejunglecontact@gmail.com</p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/into.the.jungle_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/oliverwhittle" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;