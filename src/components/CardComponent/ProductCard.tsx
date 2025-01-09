import imagePhone from './imagePhone.png';
import cardStyles from './ProductCard.module.scss';

export const ProductCard = () => {
  return (
    <div className={cardStyles.card}>
      <img
        src={imagePhone}
        alt="Photo phone"
        className={cardStyles.photo}
      />

      <h4 className={cardStyles.title}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h4>

      <div className={cardStyles.price}>
        <div className={cardStyles.price__actual}>$799</div>
        <div className={cardStyles.price__old}>$899</div>
      </div>

      <div className={cardStyles.separator}></div>

      <ul className={cardStyles.details}>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>Screen</p>
          <p className={cardStyles.itemValue}>5.8” OLED</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>Capacity</p>
          <p className={cardStyles.itemValue}>64 GB</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>RAM</p>
          <p className={cardStyles.itemValue}>4 GB</p>
        </li>
      </ul>
    </div>
  );
};
