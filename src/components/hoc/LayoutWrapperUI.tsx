import styles from './LayoutWrapper.moduleUI.scss';
import {ComponentType, ReactNode} from 'react';
import FooterUI from "@/components/Footer/FooterUI";

interface LayoutProps {
    children: ReactNode;
    HeaderChild: ComponentType;
}

export const LayoutWrapperUI = ({ children, HeaderChild }: LayoutProps) => (
    <>
        <HeaderChild />
        <main className={styles.main}>{children}</main>
        <FooterUI />
    </>
);
