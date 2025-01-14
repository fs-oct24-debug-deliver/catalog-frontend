import React from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from './FavoritesPage.module.scss';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { GridAdaptive } from '../../components/GridAdaptive/GridAdaptive';

type Props = {
  isLoading: boolean;
};

export const FavoritesPage: React.FC<Props> = ({ isLoading }) => {
  const favorites = useAppSelector((state) => state.favorites.items);

  return (
    <>
      {isLoading && <Loader />}

      <div className={styles.favorites}>
        <Breadcrumbs />

        <h1 className={styles.title}>Favorites</h1>

        <p className={styles.countOfModels}>
          {favorites.length} item{favorites.length !== 1 && 's'}
        </p>

        {favorites.length === 0 ?
          <p className={styles.emptyState}>No items in your favorites.</p>
        : <GridAdaptive products={favorites} />}
      </div>
    </>
  );
};
