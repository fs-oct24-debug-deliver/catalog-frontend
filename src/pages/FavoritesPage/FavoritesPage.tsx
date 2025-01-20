import { useAppSelector } from '../../app/hooks';
import styles from './FavoritesPage.module.scss';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';
import { useTranslation } from 'react-i18next';

import Charity from '../../../public/img/icons/charity.svg';

type Props = {
  isLoading?: boolean;
};

export const FavoritesPage: React.FC<Props> = ({ isLoading = false }) => {
  const favorites = useAppSelector((state) => state.favorites.items);
  const { t } = useTranslation();

  return (
    <>
      {isLoading && <Loader />}

      <div className={styles.favorites}>
        <Breadcrumbs />

        <h1>{t('favorites.title')}</h1>

        <p className={styles.countOfModels}>
          {t('favorites.items', { count: favorites.length })}
        </p>

        {favorites.length === 0 ?
          <p className={styles.emptyState}>{t('favorites.empty')}</p>
        : <GridAdaptive products={favorites} />}
      </div>
    </>
  );
};
