import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../../types/Card';
import templateStyles from './TemplatePage.module.scss';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import { Loader } from '../../components/Loader';
import { TemplatePagePagination } from './components/templatePagePagination';
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

  const [searchParams, setSearchParams] = useSearchParams();
  const valueSelectSort = searchParams.get('sort') || 'all';
  const valueSelectItems = searchParams.get('perPage') || 'all';
  const currentPage = Number(searchParams.get('page') || '1');
  const searchInput = searchParams.get('query') || '';

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    setSearchParams(params);
  };

  const filteredAndSortedProducts = [...products]
    .filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    .sort((a, b) => {
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

  const countOnPage =
    valueSelectItems === 'all' ?
      filteredAndSortedProducts.length
    : Number(valueSelectItems);

  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * Number(countOnPage),
    currentPage * Number(countOnPage),
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
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            )
          }
          {!products.length ?
            <p className={templateStyles.emptyState}>No models available.</p>
          : <>
              <GridAdaptive products={paginatedProducts} />

              {valueSelectItems !== 'all' && filteredAndSortedProducts.length ?
                <TemplatePagePagination
                  count={products.length}
                  countOnPages={countOnPage}
                  handleChange={handleChange}
                  currentPage={currentPage}
                />
              : <p className={templateStyles.not_found}>Not found products</p>}
            </>
          }
        </div>
      }
    </>
  );
};
