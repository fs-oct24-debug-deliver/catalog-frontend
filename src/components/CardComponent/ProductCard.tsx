import React from 'react';
import { Card } from '../../types/Card';
import { ButtonAddToCard } from '../ButtonAddToCard/ButtonAddToCard';
import { ButtonAddToFavourites } from '../ButtonAddToFavourites/ButtonAddToFavourites';
import cardStyles from './ProductCard.module.scss';

type Props = {
  card: Card;
};

export const ProductCard: React.FC<Props> = ({ card }) => {
  return (
    <div className={cardStyles.card}>
      <a
        href="#"
        className={cardStyles.imgLink}
      >
        <img
          src={card.image}
          alt="Photo phone"
          className={cardStyles.photo}
        />
      </a>

      <h4 className={cardStyles.title}>{card.name}</h4>

      <div className={cardStyles.price}>
        <div className={cardStyles.price__actual}>
          ${card.fullPrice - card.price}
        </div>
        <div className={cardStyles.price__old}>${card.fullPrice}</div>
      </div>

      <div className={cardStyles.separator}></div>

      <ul className={cardStyles.details}>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>Screen</p>
          <p className={cardStyles.itemValue}>{card.screen}</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>Capacity</p>
          <p className={cardStyles.itemValue}>{card.capacity}</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>RAM</p>
          <p className={cardStyles.itemValue}>{card.ram}</p>
        </li>
      </ul>

      <div className={cardStyles.buttons}>
        <ButtonAddToCard title="Add to cart" />
        <ButtonAddToFavourites />
      </div>
    </div>
  );
};
