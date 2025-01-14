import { HomePageSwiper } from './components/HomePageSwiper';
import { Category } from './components/Category';
import { SwiperComponent } from '../../components/Swiper/Swiper';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../servises/getAllData';
import { Card } from '../../types/Card';

export const HomePage = () => {
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
      <h1>Welcome to Nice Gadgets store!</h1>
      <section>
        <HomePageSwiper />
      </section>
      {!isLoadingNewModelsProducts && newModelsProducts?.length && (
        <SwiperComponent
          cards={newModelsProducts}
          title="Brand new models"
        />
      )}

      <Category />
      {!isLoadingHotPriceProducts && hotPriceProducts?.length && (
        <SwiperComponent
          cards={hotPriceProducts}
          title="Hot price"
        />
      )}
    </div>
  );
};
