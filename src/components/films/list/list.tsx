import Preview from '../preview/preview';
import styles from './list.module.css';

export interface IFilmItem {
  id: string;
  name: string;
  genre: string;
  count: number;
}

interface IProps {
  list: IFilmItem[];
}

const list: IFilmItem[] = [
  { id: '1', name: 'item1', genre: 'Фэнтези', count: 0 },
  { id: '2', name: 'item2', genre: 'Фэнтези', count: 0 },
  { id: '3', name: 'item3', genre: 'Фэнтези', count: 0 },
  { id: '4', name: 'item4', genre: 'Фэнтези', count: 0 },
  { id: '5', name: 'item5', genre: 'Фэнтези', count: 0 },
];

export default function List() {
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <Preview key={item.id} {...item} />
      ))}
    </div>
  );
}
