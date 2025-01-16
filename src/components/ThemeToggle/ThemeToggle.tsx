import styles from './ThemeToggle.module.scss';
import { useEffect } from 'react';
import { toggleTheme } from '../../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

export const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <label className={`${styles.switch} `}>
      <input
        className={styles.input}
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
