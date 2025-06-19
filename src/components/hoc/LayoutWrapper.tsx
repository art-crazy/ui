// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import styles from './LayoutWrapper.module.scss';
import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const LayoutWrapper  = ({ children }: LayoutProps) => (
    <div>
        <div>test</div>
        {/*<Header/>*/}
        {/*<main className={styles.main}>{children}</main>*/}
        {/*<Footer/>*/}
    </div>
);
