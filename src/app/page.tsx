'use client';
import styles from './page.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import MoviesList from '@/components/movies/list/list';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <MoviesList />
    </main>
  );
}
