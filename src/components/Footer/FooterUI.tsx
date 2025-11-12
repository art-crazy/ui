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

export default function FooterUI() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="О нас">
        <b>О нас</b>
          {LINKS.map((link, index) => (
              <a key={index} href={link.url}>{link.text}</a>
          ))}
      </nav>
      <div className={styles.copyright}>
        © 2025 «Что приготовить». Все права защищены.
      </div>
    </footer>
  );
}
