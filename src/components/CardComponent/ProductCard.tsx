import React from 'react';
import { Card } from '../../types/Card';
import { ButtonAddToCard } from '../ButtonAddToCard/ButtonAddToCard';
import { ButtonAddToFavourites } from '../ButtonAddToFavourites/ButtonAddToFavourites';
import cardStyles from './ProductCard.module.scss';
import { useAppSelector } from '../../app/hooks';

type Props = {
  card: Card;
};

export const ProductCard: React.FC<Props> = ({ card }) => {
  const { image, name, fullPrice, price, screen, capacity, ram } = card;

  const isInCart = useAppSelector(({ cart }) =>
    cart.items.some((item) => item.id === card.id),
  );

  return (
    <section className={cardStyles.card}>
      <a
        href="#"
        className={cardStyles.imgLink}
      >
        <img
          src={image}
          alt="Photo phone"
          className={cardStyles.photo}
        />
      </a>

      <h4 className={cardStyles.title}>{name}</h4>

      <div className={cardStyles.price}>
        <div className={cardStyles.price__actual}>${fullPrice - price}</div>
        <div className={cardStyles.price__old}>${fullPrice}</div>
      </div>

      <div className={cardStyles.separator}></div>

      <ul className={cardStyles.details}>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>Screen</p>
          <p className={cardStyles.itemValue}>{screen}</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>Capacity</p>
          <p className={cardStyles.itemValue}>{capacity}</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>RAM</p>
          <p className={cardStyles.itemValue}>{ram}</p>
        </li>
      </ul>

      <div className={cardStyles.buttons}>
        <ButtonAddToCard
          title={isInCart ? 'Added to cart' : 'Add to cart'}
          card={card}
        />
        <ButtonAddToFavourites />
      </div>
    </section>
  );
};
