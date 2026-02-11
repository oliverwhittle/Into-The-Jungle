import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from "../styles/bands.module.css";

import { Navigation } from 'swiper/modules';

function BandSwiper() {
  return (
    <section id="bands" className={styles.container}>
        <h1 className={styles.title}>2026 Bands</h1>
      <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src="../images/Lyme.jpeg" alt="Lyme" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Lyme</h2>
                    <p className={styles.bandDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at ligula a enim efficitur tincidunt.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src="../images/Cangrejo.jpeg" alt="Cangrejo" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Cangrejo</h2>
                    <p className={styles.bandDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at ligula a enim efficitur tincidunt.</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BandSwiper;
