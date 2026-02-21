import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from "../styles/bands26.module.css";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function BandSwiper() {
  return (
    <section id="bands26" className={styles.container}>
        <h1 className={styles.title}>2026 Bands</h1>
      <Swiper navigation={true} pagination={true} autoplay={{ delay: 5000 }} modules={[Navigation, Pagination, Autoplay]} loop={true} className={styles.swiper}>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Static.jpeg"} alt="Static" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Static</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Lyme.jpeg"} alt="Lyme" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Lyme</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Cangrejo.jpeg"} alt="Cangrejo" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Cangrejo</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/KoiSource.jpeg"} alt="Koi Source" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Koi Source</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Vesper.jpeg"} alt="Vesper" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Vesper</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Fairweather.jpeg"} alt="Fairweather" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Fairweather</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BandSwiper;
