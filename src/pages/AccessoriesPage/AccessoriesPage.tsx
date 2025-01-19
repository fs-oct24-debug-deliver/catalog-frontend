import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsByCategory('accessories')
      .then(setAccessories)
      .catch(() =>
        setErrorMessage('Failed to load accessories. Please try again later.'),
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <TemplatePage
      products={accessories}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
};
