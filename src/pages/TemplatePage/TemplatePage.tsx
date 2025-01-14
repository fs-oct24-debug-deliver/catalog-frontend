import React, { useState } from 'react';
import { Card } from '../../types/Card';
import templateStyles from './TemplatePage.module.scss';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import { Loader } from '../../components/Loader';
import { TemplatePagePagination } from './components/templatePagePagination';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

type Props = {
  title: string;
  products: Card[];
  errorMessage?: string;
  isLoading: boolean;
};

export const TemplatePage: React.FC<Props> = (props) => {
  const { title, products, errorMessage, isLoading } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const NUMBER_OF_PRODUCTS_ON_PAGE = 16;

  const paginatedProducts = products.slice(
    (currentPage - 1) * NUMBER_OF_PRODUCTS_ON_PAGE,
    currentPage * NUMBER_OF_PRODUCTS_ON_PAGE,
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

          {isLoading && <Loader />}

          {!products.length ?
            <p className={templateStyles.emptyState}>No models available.</p>
          : <>
              <GridAdaptive products={paginatedProducts} />

              <TemplatePagePagination
                count={products.length}
                countOnPages={16}
                handleChange={handleChange}
                currentPage={currentPage}
              />
            </>
          }
        </div>
      }
    </>
  );
};
