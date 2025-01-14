import imgHeart from './imagesOfHeart/unSelectedHeart.svg';
import imgHeartFilled from './imagesOfHeart/selectedHeart.svg';
import buttonStyles from './ButtonAddToFavourites.module.scss';
import { Card } from '../../types/Card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';

type ButtonAddToFavouritesProps = {
  card: Card;
};

export const ButtonAddToFavourites = ({ card }: ButtonAddToFavouritesProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state: RootState) => state.favorites.items || [],
  );

  const isFavorite = favorites.some((item) => item?.id === card.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(card.id));
    } else {
      dispatch(addFavorite(card));
    }
  };

  return (
    <button
      className={buttonStyles.buttonOfHeart}
      onClick={handleClick}
    >
      <img
        src={isFavorite ? imgHeartFilled : imgHeart}
        alt={isFavorite ? 'selected heart' : 'unselected heart'}
      />
    </button>
  );
};
