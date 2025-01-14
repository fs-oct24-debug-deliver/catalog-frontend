import React, { useState } from 'react';
import { Card } from '../../types/Card';
import templateStyles from './TemplatePage.module.scss';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { SortSelectAndDropdowns } from '../../components/SortSelectAndDropdowns/SortSelectAndDropdowns';

type Props = {
  title: string;
  products: Card[];
  errorMessage?: string;
  isLoading: boolean;
};

export const TemplatePage: React.FC<Props> = (props) => {
  const { title, products, errorMessage, isLoading } = props;
  const [valueSelectSort, setValueSelectSort] = useState<string>('newest');
  const [valueSelectItems, setValueSelectItems] = useState<string>('16');

  const sortedProducts = [...products].sort((a, b) => {
    switch (valueSelectSort) {
      case 'newest':
        return b.year - a.year;

      case 'priceLowToHigh':
        return a.price - b.price;

      case 'priceHighToLow':
        return b.price - a.price;

      case 'all':
        return 0;

      default:
        return 0;
    }
  });

  const itemsOnPageSorted =
    valueSelectItems === 'all' ? sortedProducts : (
      sortedProducts.slice(0, Number(valueSelectItems))
    );

  return (
    <>
      <Breadcrumbs />

      {errorMessage ?
        <h1 className={templateStyles.title}>{errorMessage}</h1>
      : <div>
          <h1 className={templateStyles.title}>{title}</h1>
          <p
            className={templateStyles.countOfModels}
          >{`${products.length} models`}</p>

          {isLoading ?
            <Loader />
          : products.length && (
              <SortSelectAndDropdowns
                valueSelectSort={valueSelectSort}
                setValueSelectSort={setValueSelectSort}
                valueSelectItems={valueSelectItems}
                setValueSelectItems={setValueSelectItems}
              />
            )
          }
          {!products.length ?
            <p className={templateStyles.emptyState}>No models available.</p>
          : <GridAdaptive products={itemsOnPageSorted} />}
        </div>
      }
    </>
  );
};
