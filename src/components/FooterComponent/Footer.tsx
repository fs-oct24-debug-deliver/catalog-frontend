import { Link, NavLink } from 'react-router-dom';
import footerStyles from './Footer.module.scss';
import Favorite from '../../../public/img/icons/arrow-up.svg?react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.logo}>
          <NavLink to="/">
            <img
              src="../public/img/icons/logo.svg"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className={footerStyles.links}>
          <Link
            to="https://github.com/fs-oct24-debug-deliver/catalog-frontend"
            target="_blank"
            className={`${footerStyles.link} defaultUppercaseStyles`}
          >
            github
          </Link>

          <Link
            to="https://github.com/fs-oct24-debug-deliver/catalog-frontend"
            target="_blank"
            className={`${footerStyles.link} defaultUppercaseStyles`}
          >
            contacts
          </Link>

          <Link
            to="https://github.com/fs-oct24-debug-deliver/catalog-frontend"
            target="_blank"
            className={`${footerStyles.link} defaultUppercaseStyles`}
          >
            rights
          </Link>
        </div>

        <div className={footerStyles.to_top}>
          <span className={`${footerStyles.label} defaultSmallTextStyles`}>
            Back to top
          </span>
          <button
            className={footerStyles.button}
            onClick={scrollToTop}
          >
            <Favorite />
          </button>
        </div>
      </div>
    </footer>
  );
};
