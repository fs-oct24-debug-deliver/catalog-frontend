import React, { useState } from 'react';
import '../../styles/index.scss';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from './Links';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { getNavLinkClass } from '../../utils';
import { useAppSelector } from '../../app/hooks';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../../i18n/components/LanguageSelector';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = useState(false);

  const cartCount = useAppSelector(({ cart }) => cart.items).length;
  const favoritesCount = useAppSelector(
    ({ favorites }) => favorites.items,
  ).length;

  const theme = useAppSelector((state) => state.theme.theme);

  const logo =
    theme === 'dark' ?
      '/img/icons/page-logo-bg.svg'
    : '/img/icons/light-logo.svg';

  const favoritesIcon =
    theme === 'dark' ?
      '/img/icons/favorites-hart.svg'
    : '/img/icons/light-like.svg';

  const cartIcon =
    theme === 'dark' ?
      '/img/icons/shopping-cart.svg'
    : '/img/icons/light-cart.svg';

  const openIcon =
    theme === 'dark' ? '/img/icons/burger.svg' : '/img/icons/light-open.svg';

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header__right}>
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to={'/'}
          >
            <img
              src={logo}
              alt="Nice gadgets icon"
              className={styles.header__iconDesktop}
            />
            <img
              src={
                theme === 'dark' ?
                  '/img/icons/page-logo-sm.svg'
                : '/img/icons/light-logo.svg'
              }
              alt="Nice gadgets icon"
              className={styles.header__icon}
            />
          </Link>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`defaultUppercaseStyles ${styles.header__item}`}
                >
                  <NavLink
                    onClick={() => window.scrollTo({ top: 0 })}
                    className={({ isActive }) =>
                      getNavLinkClass(
                        isActive,
                        styles.header__link_active,
                        styles.header__link,
                      )
                    }
                    to={link.link}
                  >
                    {t(`header.${link.title}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.header__left}>
          <LanguageSelector />

          <div className={styles.header__themeToggle}>
            <ThemeToggle />
          </div>
          <div className={styles.header__left_links}>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to={'/favorites'}
              className={({ isActive }) =>
                `${getNavLinkClass(
                  isActive,
                  styles.header__link_active,
                  styles.header__link,
                )} ${styles.header__iconLeft_link}`
              }
            >
              <div className={styles.header__link_block}>
                {favoritesCount > 0 && (
                  <div className={styles.header__counter}>
                    <span className={styles.header__counter_number}>
                      {favoritesCount}
                    </span>
                  </div>
                )}
                <img
                  src={favoritesIcon}
                  alt="Favorites hart icon"
                />
              </div>
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to={'/cart'}
              className={({ isActive }) =>
                `${getNavLinkClass(
                  isActive,
                  styles.header__link_active,
                  styles.header__link,
                )} ${styles.header__iconLeft_link}`
              }
            >
              <div className={styles.header__link_block}>
                {cartCount > 0 && (
                  <div className={styles.header__counter}>
                    <span className={styles.header__counter_number}>
                      {cartCount}
                    </span>
                  </div>
                )}
                <img
                  src={cartIcon}
                  alt="Shopping cart icon"
                />
              </div>
            </NavLink>
          </div>
          <button
            className={`${styles.header__iconLeft_link} ${styles.header__burger}`}
            onClick={() => setOpenMenu(true)}
          >
            <img
              src={openIcon}
              alt="Burger icon"
            />
          </button>
        </div>
      </div>
      <BurgerMenu
        open={openMenu}
        setOpen={setOpenMenu}
        favoritesCount={favoritesCount}
        cartCount={cartCount}
      />
    </header>
  );
};
