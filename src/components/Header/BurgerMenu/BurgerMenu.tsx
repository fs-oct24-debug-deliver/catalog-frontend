import React from 'react';
import styles from './BurgerMenu.module.scss';
import { navLinks } from '../Links';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/index.scss';
import { getNavLinkClass } from '../../../utils';
import { useAppSelector } from '../../../app/hooks';
import { ThemeToggle } from '../../ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  favoritesCount: number;
  cartCount: number;
}

export const BurgerMenu: React.FC<Props> = ({
  open,
  setOpen,
  favoritesCount,
  cartCount,
}) => {
  const handleCloseMenu = () => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  };
  const { t } = useTranslation();

  const theme = useAppSelector((state) => state.theme.theme);

  const logo =
    theme === 'dark' ?
      '/img/icons/page-logo-sm.svg'
    : '/img/icons/light-logo-sm.svg';

  const favoritesIcon =
    theme === 'dark' ?
      '/img/icons/favorites-hart.svg'
    : '/img/icons/light-like.svg';

  const cartIcon =
    theme === 'dark' ?
      '/img/icons/shopping-cart.svg'
    : '/img/icons/light-cart.svg';

  const closeIcon =
    theme === 'dark' ?
      '/img/icons/burger-close.svg'
    : '/img/icons/light-close.svg';

  return (
    <div className={`${styles.menu__layout} ${open ? styles.open : ''}`}>
      <div className={styles.menu__top}>
        <div></div>
        <Link
          to={'/'}
          onClick={handleCloseMenu}
          className={styles.menu__logo}
        >
          <img
            src={logo}
            alt="Logo icon"
          />
        </Link>

        <div className={styles.theme}>
          <ThemeToggle />
        </div>

        <button
          onClick={handleCloseMenu}
          className={styles.menu__topLink}
        >
          <img
            src={closeIcon}
            alt="Burger close icon"
            className="menu-icon"
          />
        </button>
      </div>

      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`defaultUppercaseStyles ${styles.menu__item}`}
            >
              <NavLink
                to={link.link}
                onClick={handleCloseMenu}
                className={({ isActive }) =>
                  getNavLinkClass(
                    isActive,
                    styles.menu__link_active,
                    styles.menu__link,
                  )
                }
              >
                {t(`header.${link.title}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.menu__bottom}>
        <NavLink
          to={'/favorites'}
          onClick={handleCloseMenu}
          className={({ isActive }) =>
            `${getNavLinkClass(
              isActive,
              `${styles.menu__bottom_link} ${styles.active}`,
              styles.menu__bottom_link,
            )} ${styles.border}`
          }
        >
          <div className={styles.menu__link_block}>
            {favoritesCount > 0 && (
              <div className={styles.menu__counter}>
                <span className={styles.menu__counter_number}>
                  {favoritesCount}
                </span>
              </div>
            )}

            <img
              src={favoritesIcon}
              alt="Favorites hart icon"
              className="menu-icon"
            />
          </div>
        </NavLink>
        <NavLink
          to={'/cart'}
          onClick={handleCloseMenu}
          className={({ isActive }) =>
            `${getNavLinkClass(
              isActive,
              `${styles.menu__bottom_link} ${styles.active}`,
              styles.menu__bottom_link,
            )} ${styles.border}`
          }
        >
          <div className={styles.menu__link_block}>
            {cartCount > 0 && (
              <div className={styles.menu__counter}>
                <span className={styles.menu__counter_number}>{cartCount}</span>
              </div>
            )}

            <img
              src={cartIcon}
              alt="Cart icon"
              className="menu-icon"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
