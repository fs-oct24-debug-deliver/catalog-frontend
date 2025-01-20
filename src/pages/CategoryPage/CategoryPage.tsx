import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';
import { useLocation } from 'react-router-dom';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const CategoryPage: React.FC = () => {
  const [products, setProducts] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    setErrorMessage('');

    const category =
      location.pathname.includes('phones') ? 'phones'
      : location.pathname.includes('tablets') ? 'tablets'
      : 'accessories';

    delay(300)
      .then(() => getProductsByCategory(category))
      .then(setProducts)
      .catch(() =>
        setErrorMessage(`Failed to load ${category}. Please try again later.`),
      )
      .finally(() => setIsLoading(false));
  }, [location.pathname]);

  return (
    <TemplatePage
      products={products}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
};
