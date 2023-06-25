import List, { IFilmItem } from '@/components/films/list/list';
import Box from '@/components/ui/box/box';
import styles from './page.module.css';

const list: IFilmItem[] = [
  { id: '1', name: 'item1', genre: 'Фэнтези', count: 0 },
  { id: '2', name: 'item2', genre: 'Фэнтези', count: 0 },
  { id: '3', name: 'item3', genre: 'Фэнтези', count: 0 },
  { id: '4', name: 'item4', genre: 'Фэнтези', count: 0 },
  { id: '5', name: 'item5', genre: 'Фэнтези', count: 0 },
];

export default function Basket() {
  return (
    <main className={styles.main}>
      <List list={list} abDelete={true} />
      <Box className={styles.mainBox}>
        <p>Итого билетов:</p>
        <p>7</p>
      </Box>
    </main>
  );
}
