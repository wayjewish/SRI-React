'use client';
import styles from './page.module.css';
import Detail from '@/components/movies/detail/detail';
import List from '@/components/reviews/list/list';

interface IProps {
  params: { id: string };
}

export default function Film({ params }: IProps) {
  return (
    <main className={styles.main}>
      <Detail id={params.id} />
      <List movieId={params.id} />
    </main>
  );
}
