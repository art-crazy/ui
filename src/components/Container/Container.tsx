import styles from "./Container.module.scss";
import {ReactNode} from "react";

export const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}
