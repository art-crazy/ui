import React from 'react';
import styles from './HeaderUI.module.scss';
import Search from './Search/Search';
import MobileNavUI from './MobileNav/MobileNavUI';
import NavItem from "../Navigation/NavItem";

export const HeaderUI = () => {
  // const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    // if (pathname === '/') {
      e.preventDefault();
      window.location.reload();
    // }
  };

  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo} onClick={handleLogoClick}>
          <span role="img" aria-label="Логотип">🍴</span> Что приготовить
        </a>
        <nav className={styles.headerRight} aria-label="Основная навигация">
          <Search />
          <div className={styles.desktopNav}>
            <NavItem type="collections" className={styles.desktopNavItem} />
            <NavItem type="recipes" className={styles.desktopNavItem} />
          </div>
        </nav>
      </header>
      <MobileNavUI />
    </>
  );
};
