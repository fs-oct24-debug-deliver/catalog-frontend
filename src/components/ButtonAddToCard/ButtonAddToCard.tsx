import React, { useEffect, useState } from 'react';
import buttonStyle from './ButtonAddToCard.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCart, removeCart } from '../../features/cartSlice';
import { Card } from '../../types/Card';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type Props = {
  title?: string;
  onClick?: () => void;
  card?: Card;
};

export const ButtonAddToCard: React.FC<Props> = ({
  title: initialTitle,
  onClick,
  card,
}) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState(initialTitle);
  const isInCart = useAppSelector(({ cart }) => cart.items).some(
    (c) => c.itemId === card?.itemId,
  );

  if (card) {
    useEffect(() => {
      setTitle(isInCart ? t('buttons.added') : t('buttons.add_to_cart'));
    }, [isInCart, t]);
  }

  const dispatch = useAppDispatch();

  const handleClick = () => {
    toast.dismiss();
    setTitle((prevTitle) => {
      if (prevTitle === t('buttons.add_to_cart')) {
        if (card) {
          dispatch(addCart({ ...card, quantity: 1 }));
          toast(t('buttons.added'), {
            icon: (
              <div className={buttonStyle.modal}>
                <img
                  className={buttonStyle.modal_image}
                  src="/img/add-to-cart2.png"
                  alt="add to cart icon"
                />
              </div>
            ),
            style: {
              borderRadius: '10px',
              background: '#323542',
              color: '#F1F2F9',
            },
          });
        } else {
          toast.error(t('buttons.something_wrong'));
          console.warn('No card provided for adding to cart.');
        }
        return t('buttons.added');
      } else {
        if (card) {
          dispatch(removeCart(card.id));
          toast.error(t('buttons.removed'), {
            icon: (
              <div className={buttonStyle.modal}>
                <img
                  className={buttonStyle.modal_image}
                  src="/img/remove-from-cart.png"
                  alt="add to cart icon"
                />
              </div>
            ),
            style: {
              borderRadius: '10px',
              background: '#323542',
              color: '#F1F2F9',
            },
          });
        } else {
          toast.error(t('buttons.something_wrong'));
        }
        return t('buttons.add_to_cart');
      }
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${buttonStyle.addCard} ${
        title === t('buttons.added') ? buttonStyle.addedCard : ''
      }`}
      onClick={onClick || handleClick}
    >
      {title}
    </motion.button>
  );
};
