import { Link, NavLink } from 'react-router-dom';
import footerStyles from './Footer.module.scss';
import ArrowUp from './img/arrow-up.svg?react';
import Logo from './img/logo.svg?react';
import LightLogo from './img/light-logo.svg?react';
import { useAppSelector } from '../../app/hooks';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { t } = useTranslation();

  const theme = useAppSelector((state) => state.theme.theme);
  const logo = theme === 'dark' ? <Logo /> : <LightLogo />;

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.logo}>
          <NavLink to="/">{logo}</NavLink>
        </div>

        <div className={footerStyles.links}>
          <Link
            to="https://github.com/fs-oct24-debug-deliver/catalog-frontend"
            target="_blank"
            className={`${footerStyles.link} defaultUppercaseStyles`}
          >
            {t('footer.github')}
          </Link>

          <NavLink
            to={'/contacts'}
            className={`${footerStyles.link} defaultUppercaseStyles`}
          >
            {t('footer.contacts')}
          </NavLink>

          <NavLink
            to={'/rights'}
            className={`${footerStyles.link} defaultUppercaseStyles`}
          >
            {t('footer.rights')}
          </NavLink>
        </div>

        <div className={footerStyles.to_top}>
          <span className={`${footerStyles.label} defaultSmallTextStyles`}>
            {t('footer.back_to_top')}
          </span>
          <button
            className={footerStyles.button}
            onClick={scrollToTop}
          >
            {' '}
            <div style={{ color: 'var(--text)' }}>
              <ArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
