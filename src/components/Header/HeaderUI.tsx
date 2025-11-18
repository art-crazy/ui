import React from 'react';
import styles from './HeaderUI.module.scss';
import Search from './Search/Search';
import MobileNavUI from './MobileNav/MobileNavUI';
import NavItemUI from "../Navigation/NavItemUI";

interface HeaderUIProps {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  logoIcon: string;
  logoText: string;
  currentPath?: string;
}

export const HeaderUI = ({ query, setQuery, handleSubmit, logoIcon, logoText, currentPath }: HeaderUIProps) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo} onClick={handleLogoClick}>
          <span role="img" aria-label="Логотип">{logoIcon}</span> {logoText}
        </a>
        <nav className={styles.headerRight} aria-label="Основная навигация">
          <Search
              query={query}
              setQuery={setQuery}
              handleSubmit={handleSubmit}
          />
          <div className={styles.desktopNav}>
            <NavItemUI type="collections" className={styles.desktopNavItem} currentPath={currentPath} />
            <NavItemUI type="mix" className={styles.desktopNavItem} currentPath={currentPath} />
          </div>
        </nav>
      </header>
      <MobileNavUI currentPath={currentPath} />
    </>
  );
};
