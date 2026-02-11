import React from "react";
import styles from "../styles/tickets.module.css";

function Tickets() {
    return (
        <section id="tickets" className={styles.container}>
            <div className={styles.tickets}>
                <h2 className={styles.title}>Buy tickets now...</h2>
                <p className={styles.description}>
                    Tickets are now available for Into The Jungle 2026!
                </p>
                <a href="https://www.ticketmaster.com" className={styles.link} target="_blank" rel="noopener noreferrer">
                    Buy Tickets
                </a>
            </div>
        </section>
    );
}

export default Tickets;