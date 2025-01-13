import React from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from './FavoritesPage.module.scss';
import { ProductCard } from '../../components/CardComponent/ProductCard';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

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

        <p className={styles.countOfModels}>{`${favorites.length} items`}</p>

        {!favorites.length ?
          <p className={styles.emptyState}>No items in your favorites.</p>
        : <div className={styles.list}>
            {favorites.map((favorite) => (
              <ProductCard
                key={favorite.id}
                card={favorite}
              />
            ))}
          </div>
        }
      </div>
    </>
  );
};
