import React from 'react';
import styles from './Characteristics.module.scss';
import { Product } from '../../../../types/Product';
import { colors } from './colors';
import '../../../../styles/index.scss';
import { ButtonAddToCard } from '../../../../components/ButtonAddToCard/ButtonAddToCard';
import { ButtonAddToFavourites } from '../../../../components/ButtonAddToFavourites/ButtonAddToFavourites';
import { Card } from '../../../../types/Card';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
  handleCapacityChange: (capacity: string) => void;
  handleColorChange: (color: string) => void;
  selectedColor: string;
  selectedCapacity: string;
  card: Card;
}

export const Characteristics: React.FC<Props> = (props) => {
  const {
    product,
    handleCapacityChange,
    handleColorChange,
    selectedColor,
    selectedCapacity,
    card,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.selections}>
        <div className={styles.selection_container}>
          <h3 className={`${styles.title} defaultSmallTextStyles`}>
            {t('details.title.color')}
          </h3>
          <div className={styles.selection}>
            {product.colorsAvailable.map((color) => {
              color = color.split(' ').join('');
              return (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={
                    color === selectedColor ?
                      `${styles.colorButton} ${styles.active}`
                    : styles.colorButton
                  }
                >
                  {''}
                  <span
                    className={styles.color}
                    style={{
                      backgroundColor: colors[color as keyof typeof colors],
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.selection_container}>
          <h3 className={`${styles.title} defaultSmallTextStyles`}>
            {t('details.title.capacity')}
          </h3>
          <div className={styles.selection}>
            {product.capacityAvailable.map((capacity) => (
              <button
                key={capacity}
                onClick={() => handleCapacityChange(capacity.toLowerCase())}
                className={
                  capacity.toLowerCase() === selectedCapacity.toLowerCase() ?
                    `${styles.capacity} ${styles.active}`
                  : styles.capacity
                }
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.price}>
          <div className={styles.price__actual}>${product.priceDiscount}</div>
          <div className={styles.price__old}>${product.priceRegular}</div>
        </div>
        <div className={styles.buttons}>
          <ButtonAddToCard card={card} />
          <ButtonAddToFavourites card={card} />
        </div>
      </div>
      <dl className={`defaultSmallTextStyles ${styles.description}`}>
        <dt>{t('details.screen')}</dt>
        <dd>{product.screen}</dd>

        <dt>{t('details.resolution')}</dt>
        <dd>{product.resolution}</dd>

        <dt> {t('details.processor')}</dt>
        <dd>{product.processor}</dd>

        <dt>RAM</dt>
        <dd>{product.ram}</dd>
      </dl>
    </div>
  );
};
