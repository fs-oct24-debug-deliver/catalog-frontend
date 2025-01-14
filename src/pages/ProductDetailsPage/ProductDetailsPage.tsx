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
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader';
import { Card } from '../../types/Card';
import { SwiperComponent } from '../../components/Swiper/Swiper';

export const ProductDetailsPage = () => {
  const { itemId } = useParams();
  const location = useLocation();

  const getCategoryFromPath = (): string => {
    if (location.pathname.includes('phones')) return 'phones';
    if (location.pathname.includes('tablets')) return 'tablets';
    if (location.pathname.includes('accessories')) return 'accessories';
    return 'phones';
  };

  const category = getCategoryFromPath();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [recomendedProducts, setRecomendedProducts] = useState<Card[]>();
  const [isLoadingRecomendedProducts, setIsLoadingRecomendedProducts] =
    useState(true);

  useEffect(() => {
    if (!itemId) return;

    setIsLoading(true);

    getProductsByCategory('phones')
      .then((products) => setRecomendedProducts(products.slice(0, 8)))
      .catch(() => console.warn('Error to load '))
      .finally(() => setIsLoadingRecomendedProducts(false));

    getProductById(itemId, category)
      .then((data) => {
        setProduct(data);
      })
      .catch(() =>
        setErrorMessage('Failed to load product details. Please try again.'),
      )
      .finally(() => setIsLoading(false));
  }, [itemId, category]);

  if (!product) {
    return (
      <>
        <ButtonBack />
        <h1>Product not found! {product}</h1>
      </>
    );
  }

  return (
    <>
      {errorMessage ?
          <h1>{errorMessage}</h1>
          : <div>
        <ButtonBack />
        {isLoading && <Loader />}
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
