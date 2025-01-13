import { Link, NavLink } from 'react-router-dom';
import footerStyles from './Footer.module.scss';
import ArrowUp from './img/arrow-up.svg?react';
import Logo from './img/logo.svg?react';

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
            <Logo />
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
            {' '}
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
