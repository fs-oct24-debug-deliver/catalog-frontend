import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';
import Coding from '/img/icons/coding.svg';

export const NotFoundPage: React.FC = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img
            src={Coding}
            alt="Coding icon"
            className="not-found__icon"
          />
        </div>
        <div>
          <p className={styles.number}>{t('error404.title')}</p>
          <p className={styles.text}>{t('error404.message')}</p>
        </div>
      </div>
    </>
  );
};
