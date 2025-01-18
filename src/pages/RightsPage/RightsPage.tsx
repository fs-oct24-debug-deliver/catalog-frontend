import styles from './RightsPage.module.scss';

import Protection from '../../../public/img/icons/protection.svg';

export const RightsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img
            src={Protection}
            alt="Rights icon"
            className="rights__icon"
          />
        </div>
        <div className={styles.text}>
          <p>
            All rights belong to the Debug&Deliver team and are protected. Our
            code is our compass for innovation and progress. Every line of code
            represents a stride toward our mission to craft technology that is
            intuitive, impactful, and empowers everyone to achieve more.
          </p>
        </div>
      </div>
    </>
  );
};
