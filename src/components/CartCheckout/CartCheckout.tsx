import toast from 'react-hot-toast';
import { useAppDispatch } from '../../app/hooks';
import { clearCart } from '../../features/cartSlice';
import { ButtonAddToCard } from '../ButtonAddToCard/ButtonAddToCard';
import checkoutStyles from './CartCheckout.module.scss';

interface Props {
  totalPrice: number;
  count: number;
}

export const CartCheckout: React.FC<Props> = ({ totalPrice, count }) => {
  const dispatch = useAppDispatch();

  const hadleCheckoutClick = () => {
    dispatch(clearCart());
    toast('Thank you for your order!', {
      icon: '🐱‍👤',
      style: {
        borderRadius: '10px',
        background: '#323542',
        color: '#F1F2F9',
      },
    });
  };

  return (
    <div className={checkoutStyles.container}>
      <h2 className={checkoutStyles.total}>${totalPrice}</h2>
      <p className={`${checkoutStyles.text} defaultSmallTextStyles`}>
        Total for {count} items
      </p>
      <div className={checkoutStyles.separator}></div>

      <ButtonAddToCard
        title="Checkout"
        onClick={hadleCheckoutClick}
      />
    </div>
  );
};
