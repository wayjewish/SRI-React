'use client';
import BacketList from '@/components/basket/list/list';
import Panel from '@/components/basket/panel/panel';
import styles from './page.module.css';

export default function Basket() {
  return (
    <main className={styles.main}>
      <BacketList />
      <Panel />
    </main>
  );
}
