import toast from 'react-hot-toast';
import { useAppDispatch } from '../../app/hooks';
import { clearCart } from '../../features/cartSlice';
import { ButtonAddToCard } from '../ButtonAddToCard/ButtonAddToCard';
import checkoutStyles from './CartCheckout.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface Props {
  totalPrice: number;
  count: number;
}

export const CartCheckout: React.FC<Props> = ({ totalPrice, count }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [buttonTitle, setButtonTitle] = useState(t('buttons.checkout'));

  useEffect(() => {
    setButtonTitle(t('buttons.checkout'));
  }, [t]);

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
        {t('actions.total_for_items', { count })}
      </p>

      <div className={checkoutStyles.separator}></div>

      <ButtonAddToCard
        title={buttonTitle}
        onClick={hadleCheckoutClick}
      />
    </div>
  );
};
