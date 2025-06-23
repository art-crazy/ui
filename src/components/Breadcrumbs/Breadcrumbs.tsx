import React from 'react';
import {ChevronRight, Home} from 'lucide-react';
import styles from './Breadcrumbs.module.scss';

interface Path {
    title: string;
    url: string;
}

interface BreadcrumbsProps {
    title: string;
    paths: Path[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, paths }) => {
    return (
        <div className={styles.breadcrumbs}>
            <nav aria-label="Хлебные крошки">
                <ol className={styles.paths}>
                    <li>
                        <a href="/" className={styles.homeLink}>
                            <Home size={16} />
                        </a>
                    </li>
                    {paths.map((path, index) => (
                        <React.Fragment key={`${path.url}_${index}`}>
                            <li className={styles.titleWrapper}>
                                <ChevronRight className={styles.separator} size={16} />
                                <a href={path.url} className={styles.path}>
                                    {path.title}
                                </a>
                            </li>
                        </React.Fragment>
                    ))}
                </ol>
            </nav>
            <div className={styles.titleWrapper}>
                <ChevronRight className={styles.separator} size={16} />
                <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    );
};
