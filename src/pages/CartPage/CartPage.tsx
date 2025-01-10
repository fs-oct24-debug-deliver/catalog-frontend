import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem.tsx';

export const CartPage = () => {
  return (
    <>
      <div className={styles.container_back}>
        <button className={styles.button}>
          <img
            src="../public/img/icons/arrow-back.svg"
            alt="aroow back icon"
          />
        </button>
        <span>Back</span>
      </div>
      <h1>Cart</h1>
      <div className={styles.wrapper}>
        <div className={styles.card_wrapper}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.checkout}>CHECKOUT</div>
      </div>
    </>
  );
};
