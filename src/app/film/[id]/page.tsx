import { IFilmItem } from '@/components/films/list/list';
import styles from './page.module.css';
import Detail from '@/components/films/detail/detail';
import Review from '@/components/review/review';

const item: IFilmItem = { id: '1', name: 'item1', genre: 'Фэнтези', count: 0 };

export default function Film() {
  return (
    <main className={styles.main}>
      <Detail item={item} />

      <Review item={{ name: '', text: 'string', rating: 123 }} />
      <Review item={{ name: '', text: 'string', rating: 123 }} />
    </main>
  );
}
