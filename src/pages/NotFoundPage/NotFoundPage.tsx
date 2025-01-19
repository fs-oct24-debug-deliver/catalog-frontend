import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

import styles from './NotFoundPage.module.scss';
import Coding from '../../../public/img/icons/coding.svg';

export const NotFoundPage: React.FC = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

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
          <p className={styles.number}>404</p>
          <p className={styles.text}>Page not found</p>
        </div>
      </div>
    </>
  );
};
