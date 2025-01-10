import React from 'react';
import styles from './BurgerMenu.module.scss';
import { navLinks } from '../Links';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/index.scss';
import { getNavLinkClass } from '../../../utils';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({ open, setOpen }) => {
  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <div className={`${styles.menu__layout} ${open ? styles.open : ''}`}>
      <div className={styles.menu__top}>
        <Link
          to={'/'}
          onClick={handleCloseMenu}
          className={styles.menu__logo}
        >
          <img
            src="./img/icons/page-logo-sm.svg"
            alt="Logo icon"
          />
        </Link>

        <button
          onClick={handleCloseMenu}
          className={`${styles.menu__topLink}`}
        >
          <img
            src="./img/icons/burger-close.svg"
            alt="Burger close icon"
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
                {link.title}
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
            <div className={styles.menu__counter}>
              <span className={styles.menu__counter_number}>4</span>
            </div>
            <img
              src="./img/icons/favorites-hart.svg"
              alt="Favorites hart icon"
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
            <div className={styles.menu__counter}>
              <span className={styles.menu__counter_number}>13</span>
            </div>
            <img
              src="./img/icons/shopping-cart.svg"
              alt="Cart icon"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
