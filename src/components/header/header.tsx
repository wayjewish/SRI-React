import Link from 'next/link';
import styles from './header.module.css';
import BasketIcon from '@/assets/icons/basket.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>Билетопоиск</div>
      </Link>
      <div className={styles.basket}>
        <BasketIcon className={styles.basket__icon} />
      </div>
    </header>
  );
}
