import imgHeart from './imagesOfHeart/unSelectedHeart.svg';
import buttonStyles from './ButtonAddToFavourites.module.scss';

export const ButtonAddToFavourites = () => {
  return (
    <button className={buttonStyles.buttonOfHeart}>
      <img
        src={imgHeart}
        alt="unselected heart"
      />
    </button>
  );
};
