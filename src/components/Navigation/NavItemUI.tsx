import React from 'react';
import styles from './NavItemUI.module.scss';
import RecipesIcon from "../icons/RecipesIcon";
import CollectionsIcon from "../icons/CollectionsIcon";

interface NavItemProps {
  type: 'mix' | 'collections';
  className?: string;
  iconClassName?: string;
}

const NavItemUI: React.FC<NavItemProps> = ({ type, className, iconClassName }) => {
  // const pathname = usePathname();

  const config = {
    mix: {
      href: '/recepty',
      label: 'Все рецепты',
      icon: RecipesIcon,
      activePath: '/recepty'
    },
    collections: {
      href: '/',
      label: 'Подборки',
      icon: CollectionsIcon,
      activePath: '/'
    }
  };

  // @ts-ignore
  const { href, label, icon: Icon, activePath } = config[type];
  // const isActive = pathname === activePath;

  return (
      <a
          href={href}
          className={`${styles.navItem}
          // %{isActive ? styles.active : ''}
       ${className || ''}`}
          aria-label={label}
          // aria-current={isActive ? 'page' : undefined}
      >
        <Icon className={`${styles.icon} ${iconClassName || ''}`} aria-hidden="true" />
        <span>{label}</span>
      </a>
  );
};

export default NavItemUI;
