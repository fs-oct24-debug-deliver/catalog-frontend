import React, { useState } from 'react';
import buttonStyle from './ButtonAddToCard.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { addCart, removeCart } from '../../features/cartSlice';
import { Card } from '../../types/Card';
import toast from 'react-hot-toast';

type Props = {
  title: string;
  onClick?: () => void;
  card?: Card;
};

export const ButtonAddToCard: React.FC<Props> = ({
  title: initialTitle,
  onClick,
  card,
}) => {
  const [title, setTitle] = useState(initialTitle);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setTitle((prevTitle) => {
      if (prevTitle === 'Add to cart') {
        if (card) {
          dispatch(addCart({ ...card, quantity: 1 }));
          toast.success('Added to cart');
          // #89939A
        } else {
          toast.error('Something went wrong');
          console.warn('No card provided for adding to cart.');
        }

        return 'Added to cart';
      } else {
        if (card) {
          dispatch(removeCart(card.id));
          toast.error('Removed from cart');
        } else {
          toast.error('Something went wrong');
        }

        return 'Add to cart';
      }
    });
  };

  return (
    <button
      className={`${buttonStyle.addCard} ${
        title === 'Added to cart' ? buttonStyle.addedCard : ''
      }`}
      onClick={onClick || handleClick}
    >
      {title}
    </button>
  );
};
