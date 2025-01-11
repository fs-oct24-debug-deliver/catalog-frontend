import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getProductsByCategory('tablets')
      .then(setTablets)
      .catch(() => setErrorMessage('Looks like something went Wrong!'))
      .finally();
  }, []);

  return (
    <TemplatePage
      title={'Tablets'}
      products={tablets}
      errorMessage={errorMessage}
    />
  );
};
