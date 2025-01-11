import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getProductsByCategory('accessories')
      .then(setAccessories)
      .catch(() => setErrorMessage('Looks like something went Wrong!'))
      .finally();
  }, []);

  return (
    <TemplatePage
      title={'Accessories'}
      products={accessories}
      errorMessage={errorMessage}
    />
  );
};
