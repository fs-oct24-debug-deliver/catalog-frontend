import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getProductById,
  getProductsByCategory,
} from '../../servises/productFunctions';
import { ButtonBack } from '../../components/ButtonBack';
import { AboutSection } from './components/AboutSection';
import productDetailsStyles from './ProductDetailsPage.module.scss';
import { Gallery } from './components/Gallery';
import { Product } from '../../types/Product.ts';
import { Loader } from '../../components/Loader/Loader.tsx';
import { SwiperComponent } from '../../components/Swiper/Swiper.tsx';
import { Card } from '../../types/Card.ts';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx';

export const ProductDetailsPage = () => {
  // const { id, category } = props;
  const [product, setProduct] = useState<Product | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [recomendedProducts, setRecomendedProducts] = useState<Card[]>();
  const [isLoadingRecomendedProducts, setIsLoadingRecomendedProducts] =
    useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    setIsLoading(true);

    getProductsByCategory('phones')
      .then((products) => setRecomendedProducts(products.slice(0, 8)))
      .catch(() => console.warn('Error to load '))
      .finally(() => setIsLoadingRecomendedProducts(false));

    getProductById('apple-iphone-11-128gb-green', 'phones')
      .then(setProduct)
      .catch(() =>
        setErrorMessage('Failed to load this product. Please try again later.'),
      )
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getProductsByCategory('phones')
      .then((products) => setRecomendedProducts(products.slice(0, 8)))
      .catch(() => console.warn('Error to load '))
      .finally(() => setIsLoadingRecomendedProducts(false));

    getProductById('apple-iphone-11-128gb-green', 'phones')
      .then(setProduct)
      .catch(() =>
        setErrorMessage('Failed to load this product. Please try again later.'),
      )
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <Breadcrumbs />
      <ButtonBack />
      <h1 className={productDetailsStyles.title}>{product.name}</h1>
      <Gallery images={product.images} />
      <AboutSection
        description={product.description}
        specs={{
          screen: product.screen,
          resolution: product.resolution,
          processor: product.processor,
          ram: product.ram,
          camera: product.camera,
          zoom: product.zoom,
          cell: product.cell,
        }}
      />
      {!isLoadingRecomendedProducts && recomendedProducts?.length && (
        <SwiperComponent
          cards={recomendedProducts}
          title="You may also like"
        />
      )}
    </div>
  );
};
