import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsByCategory('phones')
      .then(setPhones)
      .catch(() => setErrorMessage('Looks like something went Wrong!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <TemplatePage
      title={'Mobile phones'}
      products={phones}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
};
