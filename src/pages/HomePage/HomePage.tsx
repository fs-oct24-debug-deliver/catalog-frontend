import { HomePageSwiper } from './components/HomePageSwiper';
import { Category } from './components/Category';
import { SwiperComponent } from '../../components/Swiper/Swiper';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../servises/getAllData';
import { Card } from '../../types/Card';
import { motion } from 'motion/react';
import styles from './components/HomePage.module.scss';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  const [hotPriceProducts, setHotPriceProducts] = useState<Card[]>();
  const [newModelsProducts, setNewModelsProducts] = useState<Card[]>();
  const [isLoadingHotPriceProducts, setIsLoadingHotPriceProducts] =
    useState(true);
  const [isLoadingNewModelsProducts, setIsLoadingNewModelsProducts] =
    useState(true);

  useEffect(() => {
    getAllProducts
      .then((products) => {
        setNewModelsProducts(
          products.sort((a, b) => b.year - a.year).slice(0, 8),
        );

        setHotPriceProducts(
          products
            .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
            .slice(0, 8),
        );
      })
      .catch(() => console.warn('Error to load '))
      .finally(() => {
        setIsLoadingHotPriceProducts(false);
        setIsLoadingNewModelsProducts(false);
      });
  }, []);
  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1 }}
        className={styles.margins}
      >
        {t('homePage.mainTitle')}
      </motion.h1>
      <section className={styles.section}>
        <HomePageSwiper />
      </section>
      <section className={styles.section}>
        {!isLoadingNewModelsProducts && newModelsProducts?.length && (
          <SwiperComponent
            cards={newModelsProducts}
            title={t('homePage.newModelsTitle')}
          />
        )}
      </section>

      <section className={styles.section}>
        <Category />
      </section>
      <section className={styles.section}>
        {!isLoadingHotPriceProducts && hotPriceProducts?.length && (
          <SwiperComponent
            cards={hotPriceProducts}
            title={t('homePage.hotPricesTitle')}
          />
        )}
      </section>
    </div>
  );
};
