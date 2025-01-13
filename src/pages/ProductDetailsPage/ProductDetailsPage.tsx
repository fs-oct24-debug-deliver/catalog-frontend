// import detailStyle from './ProductDetailsPage.module.scss';
import { useEffect, useState } from 'react';
import { ButtonBack } from '../../components/ButtonBack';
// import { Gallery } from '../../components/Gallery';
// import { Characteristics } from '../../components/Characteristics';
import { AboutSection } from './components/AboutSection/AboutSection';
import {
  getProductById,
  getProductsByCategory,
} from '../../servises/productFunctions';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader';
import { Card } from '../../types/Card';
import { SwiperComponent } from '../../components/Swiper/Swiper';
// import { TechSpecs } from './components/AboutSection/AboutSection';

// type Props = {
//   id: string;
//   category: string;
// };

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
  return (
    <>
      {errorMessage ?
        <h1>{errorMessage}</h1>
      : <div>
          <h1>ProductDetailsPage</h1>
          <ButtonBack />
          {isLoading && <Loader />}
          <p>{product?.name}</p>
          {/* <Gallery />
          <Characteristics /> */}
          <AboutSection />
          {/* <TechSpecs /> */}
          {!isLoadingRecomendedProducts && recomendedProducts?.length && (
            <SwiperComponent
              cards={recomendedProducts}
              title="You may also like"
            />
          )}
        </div>
      }
    </>
  );
};
