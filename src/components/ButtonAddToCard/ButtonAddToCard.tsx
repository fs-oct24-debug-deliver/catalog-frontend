import React, { useEffect, useState } from 'react';
import buttonStyle from './ButtonAddToCard.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCart, removeCart } from '../../features/cartSlice';
import { Card } from '../../types/Card';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

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
  const [title, setTitle] = useState(initialTitle);
  const isInCart = useAppSelector(({ cart }) => cart.items).some(
    (c) => c.itemId === card?.itemId,
  );

  if (card) {
    useEffect(() => {
      setTitle(isInCart ? 'Added to cart' : 'Add to cart');
    }, [isInCart]);
  }

  const dispatch = useAppDispatch();

  const handleClick = () => {
    toast.dismiss();
    setTitle((prevTitle) => {
      if (prevTitle === 'Add to cart') {
        if (card) {
          dispatch(addCart({ ...card, quantity: 1 }));
          toast('Added to cart', {
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
          toast.error('Something went wrong');
          console.warn('No card provided for adding to cart.');
        }

        return 'Added to cart';
      } else {
        if (card) {
          dispatch(removeCart(card.id));
          toast.error('Removed from cart', {
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
          toast.error('Something went wrong');
        }

        return 'Add to cart';
      }
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${buttonStyle.addCard} ${
        title === 'Added to cart' ? buttonStyle.addedCard : ''
      }`}
      onClick={onClick || handleClick}
    >
      {title}
    </motion.button>
  );
};
