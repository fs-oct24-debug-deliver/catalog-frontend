// import detailStyle from './ProductDetailsPage.module.scss';
import React, { useEffect, useState } from 'react';
import { ButtonBack } from '../../components/ButtonBack';
// import { Gallery } from '../../components/Gallery';
// import { Characteristics } from '../../components/Characteristics';
import { AboutSection } from './components/AboutSection/AboutSection';
import { getProductById } from '../../servises/productFunctions';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader';
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

  useEffect(() => {
    setIsLoading(true);
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
        </div>
      }
    </>
  );
};
