import React from "react";
import Button from "../components/button.js";
import styles from "../styles/tickets.module.css";

function Tickets() {
    return (
        <section id="tickets" className={styles.container}>
            <div className={styles.tickets}>
                <h2 className={styles.title}>Buy tickets now!</h2>
                <p className={styles.description}>
                    Tickets are now available for Into The Jungle 2026! <br></br>
                    22nd March 2026, 5pm - 10pm <br></br> @ Canvas, Bournemouth
                </p>
                <Button />
            </div>
        </section>
    );
}

export default Tickets;