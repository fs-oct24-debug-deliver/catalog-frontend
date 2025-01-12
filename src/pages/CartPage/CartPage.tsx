import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem.tsx';
import { ButtonBack } from '../../components/ButtonBack';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout.tsx';
// import { useAppSelector } from '../../app/hooks.ts';

export const CartPage = () => {
  // const cards = useAppSelector(({ cart }) => cart.items);
  const cards = [
    {
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
      quantity: 4,
    },
    {
      id: 2,
      category: 'phones',
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.webp',
      quantity: 3,
    },
    {
      id: 3,
      category: 'phones',
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.webp',
      quantity: 1,
    },
  ];

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
      : <h4 className={styles.empty}>
          Your cart is empty. You can receive our product on the site.
        </h4>
      }
    </>
  );
};
