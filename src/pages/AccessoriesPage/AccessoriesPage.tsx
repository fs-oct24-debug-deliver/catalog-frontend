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
      .catch(() => setErrorMessage('Looks like something went Wrong!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <TemplatePage
      title={'Accessories'}
      products={accessories}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
};
