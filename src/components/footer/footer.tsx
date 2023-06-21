import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} href="/faq">
        Вопросы-ответы
      </Link>
      <Link className={styles.link} href="/about">
        О нас
      </Link>
    </footer>
  );
}
