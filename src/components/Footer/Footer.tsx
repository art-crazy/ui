import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="О нас">
        <b>О нас</b>
        <Link href="/istoriya">Наша история</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/faq">Вопросы и ответы</Link>
      </nav>
      <nav className={styles.section} aria-label="Помощь">
        <b>Помощь</b>
        <a href="#">Контакты</a>
        <a href="#">Условия</a>
      </nav>
      <div className={styles.copyright}>
        © 2025 «Что приготовить». Все права защищены.
      </div>
    </footer>
  );
}
