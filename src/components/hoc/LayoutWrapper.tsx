import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './LayoutWrapper.module.scss';
import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

const LayoutWrapper  = ({ children }: LayoutProps) => (
    <>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </>
);

export default LayoutWrapper;
