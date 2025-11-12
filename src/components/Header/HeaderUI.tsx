import React from 'react';
import styles from './HeaderUI.module.scss';
import Search from './Search/Search';
import MobileNavUI from './MobileNav/MobileNavUI';
import NavItemUI from "../Navigation/NavItemUI";

interface HeaderUIProps {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const HeaderUI = ({ query, setQuery, handleSubmit }: HeaderUIProps) => {
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
          <Search
              query={query}
              setQuery={setQuery}
              handleSubmit={handleSubmit}
          />
          <div className={styles.desktopNav}>
            <NavItemUI type="collections" className={styles.desktopNavItem} />
            <NavItemUI type="mix" className={styles.desktopNavItem} />
          </div>
        </nav>
      </header>
      <MobileNavUI />
    </>
  );
};
