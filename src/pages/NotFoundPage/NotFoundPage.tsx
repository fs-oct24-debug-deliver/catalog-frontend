import React from 'react';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <p className="not-found__404">404</p>
      <p className="not-found__text">
        We couldn’t find the page you were looking for
      </p>
    </div>
  );
};
