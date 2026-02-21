import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from "../styles/bands25.module.css";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function BandSwiper() {
  return (
    <section id="bands25" className={styles.container}>
        <h1 className={styles.title}>2025 Bands</h1>
      <Swiper navigation={true} pagination={true} autoplay={{ delay: 5000 }} modules={[Navigation, Pagination, Autoplay]} loop={true} className={styles.swiper}>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/NewTheory.jpeg"} alt="New Theory" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>New Theory</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Fairweather25.jpeg"} alt="Fairweather" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Fairweather</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Pulse.jpeg"} alt="Pulse" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Pulse</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Munvader.jpeg"} alt="Munvader" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Munvader</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/TheDiversion.jpeg"} alt="The Diversion" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>The Diversion</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/Cangrejo25.jpeg"} alt="Cangrejo" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Cangrejo</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.slide}>
                <img src={process.env.PUBLIC_URL + "/images/ChasingLeaves.jpeg"} alt="Chasing Leaves" className={styles.bandImage} />
                <div className={styles.bandInfo}>
                    <h2 className={styles.bandName}>Chasing Leaves</h2>
                    <p className={styles.bandDescription}></p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BandSwiper;
