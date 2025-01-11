import { useEffect, useState } from 'react';
import { Card } from '../../types/Card';
import { getProductsByCategory } from '../../servises/productFunctions';
import { TemplatePage } from '../TemplatePage';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsByCategory('tablets')
      .then(setTablets)
      .catch(() => setErrorMessage('Looks like something went Wrong!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <TemplatePage
      title={'Tablets'}
      products={tablets}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  );
};
