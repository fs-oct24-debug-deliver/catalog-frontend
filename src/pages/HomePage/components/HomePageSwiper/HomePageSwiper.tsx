import React from 'react';
// import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import styles from './HomePageSwiper.module.scss';
import './HomePageSwiperBullets.css';

import bannerAccessories from './img/bannerAccessories.png';
import bannerPhones from './img/bannerPhones.png';
import bannerTablets from './img/bannerTablets.png';

export const HomePageSwiper: React.FC = () => {
  return (
    <>
      <div className={styles.swiperWrapper}>
        <button className={styles.swiperButtonPrev}>{'<'}</button>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1200}
          style={{ width: '100%' }}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          pagination={{ clickable: true, el: `.${styles.swiperPagination}` }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <img
                src={bannerAccessories}
                alt="banner accessories"
                className={styles.bannerImage}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <img
                src={bannerPhones}
                alt="banner phones"
                className={styles.bannerImage}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <img
                src={bannerTablets}
                alt="banner tablets"
                className={styles.bannerImage}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button className={styles.swiperButtonNext}>{'>'}</button>
      </div>
      <div className={styles.swiperPagination}></div>
    </>
  );
};
