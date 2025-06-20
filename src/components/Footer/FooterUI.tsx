import React from 'react';
import styles from './Footer.module.scss';

export default function FooterUI() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.section} aria-label="О нас">
        <b>О нас</b>
        <a href="/istoriya">Наша история</a>
        <a href="/blog">Блог</a>
        <a href="/faq">Вопросы и ответы</a>
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
