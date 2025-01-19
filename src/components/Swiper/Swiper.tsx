import React, { useState } from 'react';
import styles from './Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '../CardComponent/ProductCard';
import { Card } from '../../types/Card';
import { motion } from 'motion/react';
import 'swiper/swiper-bundle.css';

interface Props {
  cards: Card[];
  title: string;
}

export const SwiperComponent: React.FC<Props> = ({ cards, title }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const uniqueId = `swiper-${Math.random().toString(36).slice(2, 11)}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSwiperUpdate = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const leftAnimation = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (custom = 0.3) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom, duration: 0.5, type: 'spring' },
    }),
  };

  const rightAnimation = {
    hidden: {
      x: 30,
      opacity: 0,
    },
    visible: (custom = 0.3) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom, duration: 0.5, type: 'spring' },
    }),
  };

  return (
    <section>
      <div className={styles.top}>
        <h2>{title}</h2>
        <div className={styles.navigation}>
          <button
            id={`prev-${uniqueId}`}
            className={`${styles.swiperButtonPrev} ${
              isBeginning ? styles.disabled : ''
            }`}
          >
            {'<'}
          </button>
          <button
            id={`next-${uniqueId}`}
            className={`${styles.swiperButtonNext} ${
              isEnd ? styles.disabled : ''
            }`}
          >
            {'>'}
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: `#next-${uniqueId}`,
          prevEl: `#prev-${uniqueId}`,
        }}
        autoHeight={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1150: { slidesPerView: 4 },
        }}
        onSlideChange={(swiper) => handleSwiperUpdate(swiper)}
        onInit={(swiper) => handleSwiperUpdate(swiper)}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={card.id}>
            {i < 4 ?
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={leftAnimation}
                custom={0.1 * i}
              >
                <ProductCard
                  card={card}
                  notScale={true}
                />
              </motion.div>
            : <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={rightAnimation}
                custom={0}
              >
                <ProductCard
                  card={card}
                  notScale={true}
                />
              </motion.div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
