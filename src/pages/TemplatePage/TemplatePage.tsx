import { useSearchParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '../../types/Card';
import templateStyles from './TemplatePage.module.scss';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import '../../styles/index.scss';
import { TemplatePagePagination } from './components/templatePagePagination';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { SortSelectAndDropdowns } from '../../components/SortSelectAndDropdowns/SortSelectAndDropdowns';
import { SkeletonProduct } from '../../components/SkeletonProduct/SkeletonProduct';

type Props = {
  products: Card[];
  errorMessage?: string;
  isLoading: boolean;
};

export const TemplatePage: React.FC<Props> = ({
  products,
  errorMessage,
  isLoading,
}) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const valueSelectSort = searchParams.get('sort') || 'all';
  const valueSelectItems = searchParams.get('perPage') || 'all';
  const currentPage = Number(searchParams.get('page') || '1');
  const searchInput = searchParams.get('query') || '';

  const getPageTitle = () => {
    const path = location.pathname;

    if (path.includes('/phones')) {
      return t('pages.phonesPage');
    }
    if (path.includes('/tablets')) {
      return t('pages.tabletsPage');
    }
    if (path.includes('/accessories')) {
      return t('pages.accessoriesPage');
    }

    return t('pages.phonesPage');
  };

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
        <h1 className={templateStyles.title}>
          {t('errorMessage', { errorMessage })}
        </h1>
      : <div>
          <h1 className={templateStyles.title}>{getPageTitle()}</h1>
          <p className={templateStyles.countOfModels}>
            {' '}
            {t('productsCount', { count: products.length })}
          </p>
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
          : !products ?
            <p className={templateStyles.emptyState}>
              {' '}
              {t('noModelsAvailable')}
            </p>
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
