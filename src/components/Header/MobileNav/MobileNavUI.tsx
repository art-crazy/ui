import React from 'react';
import styles from './MobileNavUI.module.scss';
import NavItemUI from '@/components/Navigation/NavItemUI';

const MobileNavUI: React.FC = () => {
    return (
        <nav className={styles.mobileNav}>
            <NavItemUI type="collections" className={styles.mobileNavItem} />
            <NavItemUI type="mix" className={styles.mobileNavItem} />
        </nav>
    );
};

export default MobileNavUI;
