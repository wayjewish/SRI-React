import styles from './page.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import Box from '@/components/ui/box/box';
import List, { IFilmItem } from '@/components/films/list/list';

const list: IFilmItem[] = [
  { id: '1', name: 'item1', genre: 'Фэнтези', count: 0 },
  { id: '2', name: 'item2', genre: 'Фэнтези', count: 0 },
  { id: '3', name: 'item3', genre: 'Фэнтези', count: 0 },
  { id: '4', name: 'item4', genre: 'Фэнтези', count: 0 },
  { id: '5', name: 'item5', genre: 'Фэнтези', count: 0 },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Sidebar />
      </Box>
      <List list={list} />
    </main>
  );
}
