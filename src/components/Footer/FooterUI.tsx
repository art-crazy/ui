import React from 'react';
import styles from './FooterUI.module.scss';

const LINKS = [
    {
        text: 'Наша история',
        url: "/istoriya",
    },
    {
        text: 'Блог',
        url: "/blog",
    },
    {
        text: 'Вопросы и ответы',
        url: "/faq",
    },
]

interface FooterUIProps {
  siteName: string;
}

export default function FooterUI({ siteName }: FooterUIProps) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="О нас">
        <b>О нас</b>
          {LINKS.map((link, index) => (
              <a key={index} href={link.url}>{link.text}</a>
          ))}
      </nav>
      <div className={styles.copyright}>
        © 2025 «{siteName}». Все права защищены.
      </div>
    </footer>
  );
}
