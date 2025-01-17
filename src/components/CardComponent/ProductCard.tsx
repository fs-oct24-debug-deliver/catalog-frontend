import React from 'react';
import { Card } from '../../types/Card';
import { ButtonAddToCard } from '../ButtonAddToCard/ButtonAddToCard';
import { ButtonAddToFavourites } from '../ButtonAddToFavourites/ButtonAddToFavourites';
import cardStyles from './ProductCard.module.scss';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
  card: Card;
  notScale?: boolean;
};

export const ProductCard: React.FC<Props> = ({ card, notScale }) => {
  const {
    itemId,
    category,
    image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = card;
  const { t } = useTranslation();

  const isInCart = useAppSelector(({ cart }) =>
    cart.items.some((item) => item.id === card.id),
  );

  return (
    <section
      className={`${cardStyles.card} ${!notScale ? cardStyles.scale : ''}`}
    >
      <Link
        to={`/${category}/${itemId}`}
        className={cardStyles.imgLink}
      >
        <img
          src={`/${image}`}
          alt={`Photo ${category}`}
          className={cardStyles.photo}
        />
      </Link>

      <Link
        to={`/${category}/${itemId}`}
        className={cardStyles.titleLink}
      >
        <h4 className={cardStyles.title}>{name}</h4>
      </Link>

      <div className={cardStyles.price}>
        <div className={cardStyles.price__actual}>${price}</div>
        <div className={cardStyles.price__old}>${fullPrice}</div>
      </div>

      <div className={cardStyles.separator}></div>

      <ul className={cardStyles.details}>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>{t('details.screen')}</p>
          <p className={cardStyles.itemValue}>{screen}</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>{t('details.capacity')}</p>
          <p className={cardStyles.itemValue}>{capacity}</p>
        </li>
        <li className={cardStyles.item}>
          <p className={cardStyles.itemName}>{t('details.built_in_memory')}</p>

          <p className={cardStyles.itemValue}>{ram}</p>
        </li>
      </ul>

      <div className={cardStyles.buttons}>
        <ButtonAddToCard
          title={isInCart ? 'Added to cart' : 'Add to cart'}
          card={card}
        />
        <ButtonAddToFavourites card={card} />
      </div>
    </section>
  );
};
