import React from 'react';
import styles from './SkeletonProduct.module.scss';
import Skeleton from 'react-loading-skeleton';

export const SkeletonProduct: React.FC = () => {
  return (
    <section className={styles.card}>
      <div className={styles.imgLink}>
        <div className={styles.photo}>
          <Skeleton style={{ height: '100%' }} />
        </div>
      </div>
      <div className={styles.titleLink}>
        <h4 className={styles.title}>
          <Skeleton style={{ height: '100%' }} />
        </h4>
      </div>
      <div className={styles.price}>
        <span className={styles.price__actual}>
          <Skeleton style={{ height: '100%' }} />
        </span>
        <span className={styles.price__old}>
          <Skeleton style={{ height: '100%' }} />
        </span>
      </div>

      <div className={styles.separator}></div>

      <ul className={styles.details}>
        <li className={styles.item}>
          <p className={styles.itemName}>
            <Skeleton style={{ height: '100%' }} />
          </p>
          <p className={styles.itemValue}>
            <Skeleton style={{ height: '100%' }} />
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemName}>
            <Skeleton style={{ height: '100%' }} />
          </p>
          <p className={styles.itemValue}>
            <Skeleton style={{ height: '100%' }} />
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.itemName}>
            <Skeleton style={{ height: '100%' }} />
          </p>
          <p className={styles.itemValue}>
            <Skeleton style={{ height: '100%' }} />
          </p>
        </li>
      </ul>

      <div className={styles.buttons}>
        <div className={styles.button1}>
          <Skeleton height={'100%'} />
        </div>
        <div className={styles.button2}>
          <Skeleton height={'100%'} />
        </div>
      </div>
    </section>
  );
};
