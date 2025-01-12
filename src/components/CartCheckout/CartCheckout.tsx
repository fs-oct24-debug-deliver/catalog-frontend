import { ButtonAddToCard } from '../ButtonAddToCard/ButtonAddToCard';
import checkoutStyles from './CartCheckout.module.scss';

export const CartCheckout = () => {
  return (
    <div className={checkoutStyles.container}>
      <h2 className={checkoutStyles.total}>$2657</h2>
      <p className={`${checkoutStyles.text} defaultSmallTextStyles`}>
        Total for 3 items
      </p>
      <div className={checkoutStyles.separator}></div>

      <ButtonAddToCard title="Checkout" />
    </div>
  );
};
