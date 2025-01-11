import React, { useState } from 'react';
import '../../styles/index.scss';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from './Links';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { getNavLinkClass } from '../../utils';

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header__right}>
          <Link to={'/'}>
            <img
              src={'./img/icons/page-logo-bg.svg'}
              alt="Nice gadgets icon"
              className={styles.header__iconDesktop}
            />
            <img
              src={'./img/icons/page-logo-sm.svg'}
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
                    className={({ isActive }) =>
                      getNavLinkClass(
                        isActive,
                        styles.header__link_active,
                        styles.header__link,
                      )
                    }
                    to={link.link}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.header__left}>
          <div className={styles.header__left_links}>
            <NavLink
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
                <div className={styles.header__counter}>
                  <span className={styles.header__counter_number}>13</span>
                </div>
                <img
                  src="./img/icons/favorites-hart.svg"
                  alt="Favorites hart icon"
                />
              </div>
            </NavLink>
            <NavLink
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
                <div className={styles.header__counter}>
                  <span className={styles.header__counter_number}>4</span>
                </div>
                <img
                  src="./img/icons/shopping-cart.svg"
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
              src="./img/icons/burger.svg"
              alt="Burger icon"
            />
          </button>
        </div>
      </div>
      <BurgerMenu
        open={openMenu}
        setOpen={setOpenMenu}
      />
    </header>
  );
};
