import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../../types/Card';
import templateStyles from './TemplatePage.module.scss';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import '../../styles/index.scss';
import { TemplatePagePagination } from './components/templatePagePagination';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { SortSelectAndDropdowns } from '../../components/SortSelectAndDropdowns/SortSelectAndDropdowns';
import { SkeletonProduct } from '../../components/SkeletonProduct/SkeletonProduct';

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

  const countOnPage =
    valueSelectItems === 'all' ?
      sortedProducts.length
    : Number(valueSelectItems);

  const paginatedProducts = sortedProducts.slice(
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
          <SortSelectAndDropdowns
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          {isLoading ?
            <div className="grid_container">
              {Array.from({ length: 10 }).map((_, i) => (
                <SkeletonProduct key={i} />
              ))}
            </div>
          : !products.length ?
            <p className={templateStyles.emptyState}>No models available.</p>
          : <>
              <GridAdaptive products={paginatedProducts} />

              {valueSelectItems !== 'all' && (
                <TemplatePagePagination
                  count={products.length}
                  countOnPages={countOnPage}
                  handleChange={handleChange}
                  currentPage={currentPage}
                />
              )}
            </>
          }
        </div>
      }
    </>
  );
};
