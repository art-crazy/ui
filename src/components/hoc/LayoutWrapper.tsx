import styles from './LayoutWrapper.module.scss';
import { ReactNode, ComponentType } from 'react';
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
    children: ReactNode;
    HeaderChild: ComponentType;
}

export const LayoutWrapper = ({ children, HeaderChild }: LayoutProps) => (
    <>
        <HeaderChild />
        <main className={styles.main}>{children}</main>
        <Footer />
    </>
);
