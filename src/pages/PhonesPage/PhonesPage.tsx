import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getProductsByCategory('phones')
      .then(setPhones)
      .catch(() => setErrorMessage('Looks like something went Wrong!'))
      .finally();
  }, []);

  return (
    <TemplatePage
      title={'Mobile phones'}
      products={phones}
      errorMessage={errorMessage}
    />
  );
};
