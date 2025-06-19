'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './Header.module.scss';
import Search from './Search/Search';
import MobileNav from './MobileNav/MobileNav';
import NavItem from "../Navigation/NavItem";

const Header = () => {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          <span role="img" aria-label="Логотип">🍴</span> Что приготовить
        </Link>
        <nav className={styles.headerRight} aria-label="Основная навигация">
          <Search />
          <div className={styles.desktopNav}>
            <NavItem type="collections" className={styles.desktopNavItem} />
            <NavItem type="recipes" className={styles.desktopNavItem} />
          </div>
        </nav>
      </header>
      <MobileNav />
    </>
  );
};

export default Header;
