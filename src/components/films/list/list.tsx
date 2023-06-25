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
  abDelete?: boolean;
}

export default function List({ list, abDelete }: IProps) {
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <Preview key={item.id} item={item} abDelete={abDelete} />
      ))}
    </div>
  );
}
