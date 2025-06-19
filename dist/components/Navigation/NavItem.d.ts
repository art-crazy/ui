import { default as React } from 'react';
interface NavItemProps {
    type: 'recipes' | 'collections';
    className?: string;
    iconClassName?: string;
}
declare const NavItem: React.FC<NavItemProps>;
export default NavItem;
