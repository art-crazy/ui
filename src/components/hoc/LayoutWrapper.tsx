import {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

const LayoutWrapper  = ({ children }: LayoutProps) => (
    <>
        <main className={styles.main}>{children}</main>
    </>
);

export default LayoutWrapper;