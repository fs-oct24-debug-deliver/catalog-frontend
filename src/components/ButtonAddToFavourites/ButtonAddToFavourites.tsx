import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Card } from '../../types/Card';
import styles from './ButtonAddToFavourites.module.scss';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';
import { HeartIcon } from './HeartIcon/HeartIcon';
import { motion } from 'motion/react';

type ButtonAddToFavouritesProps = {
  card: Card;
};

export const ButtonAddToFavourites = ({ card }: ButtonAddToFavouritesProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state: RootState) => state.favorites.items || [],
  );
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  const isFavorite = favorites.some((item) => item?.id === card.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(card.id));
    } else {
      dispatch(addFavorite(card));
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${styles.buttonOfHeart} ${isFavorite ? styles.active : ''} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}
      onClick={handleClick}
    >
      <HeartIcon
        isFavorite={isFavorite}
        theme={theme}
      />
    </motion.button>
  );
};
