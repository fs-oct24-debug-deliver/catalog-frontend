// import detailStyle from './ProductDetailsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../servises/productFunctions';
import { ButtonBack } from '../../components/ButtonBack';
// import { Gallery } from '../../pages/ProductDetailsPage/components/Gallery';
// import { Characteristics } from '../../components/Characteristics';
import { AboutSection } from './components/AboutSection';
// import { TechSpecs } from './components/AboutSection/AboutSection';
import productDetailsStyles from './ProductDetailsPage.module.scss';
import { Gallery } from './components/Gallery';
import { Product } from '../../types/Product.ts';

export const ProductDetailsPage = () => {
  const { itemId } = useParams();
  const category = 'phones';
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!itemId) return;

    console.log(`Fetching product with ID: ${itemId}`);
    setIsLoading(true);
    getProductById(itemId, category)
      .then((data) => {
        console.log('Product data:', data);
        setProduct(data);
      })
      .catch(() =>
        setErrorMessage('Failed to load product details. Please try again.'),
      )
      .finally(() => setIsLoading(false));
  }, [itemId, category]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <ButtonBack />
      <h1 className={productDetailsStyles.title}>{product.name}</h1>
      <Gallery images={product.images} />
      {/* <Gallery />
      <Characteristics /> */}
      <AboutSection />
      {/* <TechSpecs /> */}
    </div>
  );
};
