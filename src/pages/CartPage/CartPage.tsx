import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem.tsx';
import { ButtonBack } from '../../components/ButtonBack';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout.tsx';
import { useAppSelector } from '../../app/hooks.ts';
import { useTranslation } from 'react-i18next';

import Cart from '../../../public/img/icons/cart.svg';

export const CartPage = () => {
  const cards = useAppSelector(({ cart }) => cart.items);
  const { t } = useTranslation();

  const totalPrice = cards.reduce(
    (acc, card) => acc + card.price * card.quantity,
    0,
  );

  return (
    <>
      <div className={styles.container_back}>
        <ButtonBack />
      </div>
      <h1>{t('cart.title')}</h1>

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
          <p className={styles.countOfProducts}>
            {t('cart.items', { count: cards.length })}
          </p>
          <p className={styles.empty}>{t('cart.empty')}</p>
          <p className={styles.countOfProducts}>{cards.length} items</p>
          <div className={styles.container}>
            <div className={styles.icon}>
              <img
                src={Cart}
                alt="Rights icon"
                className={styles.emptyCart}
              />
            </div>
            <div className={styles.text}>
              <p className={styles.empty}>{t('cart.empty')}</p>
            </div>
          </div>
        </>
      }
    </>
  );
};
