import styles from './CartPage.module.scss';

export const CartPage = () => {
  return (
    <>
      <div className={styles.container_back}>
        <button className={styles.button}>
          <img src="../public/img/icons/arrow-back.svg"></img>
        </button>
        <span>Back</span>
      </div>
      <h1 className={`h1`}>Cart</h1>
      <div className={styles.wrapper}>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>PhoneCard</div>
          <div className={styles.card}>PhoneCard</div>
          <div className={styles.card}>PhoneCard</div>
        </div>
        <div className={styles.checkout}>CHECKOUT</div>
      </div>
    </>
  );
};
