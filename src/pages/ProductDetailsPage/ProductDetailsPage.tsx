// import detailStyle from './ProductDetailsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../servises/productFunctions';
import { ButtonBack } from '../../components/ButtonBack';
import { AboutSection } from './components/AboutSection';
import productDetailsStyles from './ProductDetailsPage.module.scss';
import { Gallery } from './components/Gallery';
import { Product } from '../../types/Product.ts';
import { Loader } from '../../components/Loader/Loader.tsx';

export const ProductDetailsPage = () => {
  const { itemId } = useParams();
  const category = 'phones';
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!itemId) return;

    setIsLoading(true);
    getProductById(itemId, category)
      .then(setProduct)
      .catch(() =>
        setErrorMessage('Failed to load product details. Please try again.'),
      )
      .finally(() => setIsLoading(false));
  }, [itemId, category]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  if (!product) {
    return (
      <>
        <ButtonBack />
        <h1>Product not found! {product}</h1>
      </>
    );
  }

  return (
    <div>
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
    </div>
  );
};
