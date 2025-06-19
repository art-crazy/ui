'use client';

import React from 'react';
import styles from './MobileNav.module.scss';
import NavItem from '@/components/Navigation/NavItem';

const MobileNav: React.FC = () => {
  return (
    <nav className={styles.mobileNav}>
        <NavItem type="collections" className={styles.mobileNavItem} />
        <NavItem type="recipes" className={styles.mobileNavItem} />
    </nav>
  );
};

export default MobileNav;
