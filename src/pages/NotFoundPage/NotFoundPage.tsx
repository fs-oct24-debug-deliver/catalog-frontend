import { useEffect } from 'react';
import './NotFoundPage.scss';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

export const NotFoundPage: React.FC = () => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="not-found">
      <p className="not-found__404">404</p>
      <p className="not-found__text">
        We couldn’t find the page you were looking for
      </p>
    </div>
  );
};
