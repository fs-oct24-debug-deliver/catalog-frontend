import styles from './RightsPage.module.scss';
import { useTranslation } from 'react-i18next';

import Protection from './protection.svg';

export const RightsPage = () => {
  const { t } = useTranslation();

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
        <p className={styles.text}>{t('rights.right')}</p>
      </div>
    </>
  );
};
