'use client';
import Link from 'next/link';
import styles from './header.module.css';
import BasketIcon from '@/assets/icons/basket.svg';
import { useAppSelector } from '@/store/hooks';

export default function Header() {
  const basket = useAppSelector((state) => state.basket);

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>Билетопоиск</div>
      </Link>
      <Link className={styles.link} href="/basket">
        <div className={styles.basket}>
          <div className={styles.basketNum}>
            {Object.values(basket).reduce((sum, num) => sum + num, 0)}
          </div>
          <BasketIcon className={styles.basketIcon} />
        </div>
      </Link>
    </header>
  );
}
