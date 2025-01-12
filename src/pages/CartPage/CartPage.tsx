import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem.tsx';
import { ButtonBack } from '../../components/ButtonBack';

export const CartPage = () => {
  return (
    <>
      <div className={styles.container_back}>
        <ButtonBack />
      </div>
      <h1>Cart</h1>
      <div className={styles.wrapper}>
        <div className={styles.card_wrapper}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.checkout}>Checkout</div>
      </div>
    </>
  );
};
