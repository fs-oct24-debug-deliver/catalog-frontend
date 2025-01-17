import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem.tsx';
import { ButtonBack } from '../../components/ButtonBack';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout.tsx';
import { useAppSelector } from '../../app/hooks.ts';

export const CartPage = () => {
  const cards = useAppSelector(({ cart }) => cart.items);

  const totalPrice = cards.reduce(
    (acc, card) => acc + card.price * card.quantity,
    0,
  );

  return (
    <>
      <div className={styles.container_back}>
        <ButtonBack />
      </div>
      <h1>Cart</h1>
      {cards.length ?
        <div className={styles.wrapper}>
          <div className={styles.card_wrapper}>
            {cards.map((card) => (
              <CartItem
                key={card.id}
                card={card}
              />
            ))}
          </div>
          <div className={styles.checkout}>
            <CartCheckout
              totalPrice={totalPrice}
              count={cards.length}
            />
          </div>
        </div>
      : <>
          <p className={styles.countOfProducts}>{cards.length} items</p>
          <p className={styles.empty}>
            Your cart is empty. You can receive our product on the site.
          </p>
        </>
      }
    </>
  );
};
