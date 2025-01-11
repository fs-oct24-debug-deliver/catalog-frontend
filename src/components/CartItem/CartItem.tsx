import React from 'react';
import styles from './CartItem.module.scss';
import { Card } from '../../types/Card';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addQuantity,
  decrementQuantity,
  removeCart,
} from '../../features/cartSlice';

const product: Card = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.webp',
};

export const CartItem: React.FC = () => {
  const dispatch = useAppDispatch();

  const productCart = useAppSelector((state) =>
    state.cart.items.find((item) => item.id === product.id),
  );

  const handleIncreaseQuantity = () => {
    if (productCart) {
      dispatch(addQuantity(productCart.id));
    }
  };

  const handleDecreaseQuantity = () => {
    if (productCart) {
      dispatch(decrementQuantity(productCart.id));
    }
  };

  const handleRemoveCart = () => {
    if (productCart) {
      dispatch(removeCart(productCart.id));
    }
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
        <img
          className={styles.image}
          src="img/phones/apple-iphone-7/black/00.webp"
          alt="product image"
        />
        <Link to={`products/${product.itemId}`}>{product.name}</Link>
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
          <span>{productCart ? productCart.quantity : 0}</span>
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
          <h3 className={styles.price}>
            {productCart ?
              `$${productCart.price * productCart.quantity}`
            : `$0`}
          </h3>
        </div>
      </div>
    </div>
  );
};
