import React from 'react';
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import {
  addQuantity,
  CartProduct,
  decrementQuantity,
  removeCart,
} from '../../features/cartSlice';

interface Props {
  card: CartProduct;
}

export const CartItem: React.FC<Props> = ({ card }) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(addQuantity(card.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decrementQuantity(card.id));
  };

  const handleRemoveCart = () => {
    dispatch(removeCart(card.id));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.first}>
        <button onClick={handleRemoveCart}>
          <img
            src="./img/icons/cart-item-close.svg"
            alt="Cart item close icon"
          />
        </button>
        <div className={styles.image_container}>
          <img
            src={card.image}
            alt="product image"
          />
        </div>
        <Link to={`/${card.category}/${card.itemId}`}>{card.name}</Link>
      </div>
      <div className={styles.second}>
        <div className={styles.second_right}>
          <button
            className={styles.button}
            onClick={handleDecreaseQuantity}
          >
            <img
              src="./img/icons/minus-cart.svg"
              alt="Plus icon"
            />
          </button>
          <span>{card.quantity}</span>
          <button
            className={`${styles.button} ${styles.button_plus}`}
            onClick={handleIncreaseQuantity}
          >
            <img
              src="./img/icons/plus-cart.svg"
              alt="Minus icon"
            />
          </button>
        </div>
        <div className={styles.second_left}>
          <h3 className={styles.price}>${card.price * card.quantity}</h3>
        </div>
      </div>
    </div>
  );
};
