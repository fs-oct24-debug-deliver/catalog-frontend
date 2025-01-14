import React from 'react';
import { Card } from '../../types/Card';
import templateStyles from './TemplatePage.module.scss';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

type Props = {
  title: string;
  products: Card[];
  errorMessage?: string;
  isLoading: boolean;
};

export const TemplatePage: React.FC<Props> = (props) => {
  const { title, products, errorMessage, isLoading } = props;
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

          {isLoading && <Loader />}

          {!products.length ?
            <p className={templateStyles.emptyState}>No models available.</p>
          : <GridAdaptive products={products} />}
        </div>
      }
    </>
  );
};
