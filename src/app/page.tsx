'use client';
import styles from './page.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import List from '@/components/movies/list/list';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <List />
    </main>
  );
}
