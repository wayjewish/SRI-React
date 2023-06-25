import { useAppDispatch } from '@/store/hooks';
import Input from '../ui/input/input';
import Select from '../ui/select/select';
import styles from './sidebar.module.css';
import {
  setFilterCinema,
  setFilterGenre,
  setFilterTitle,
} from '@/store/features/filtersSlice';

export default function Sidebar() {
  const dispatch = useAppDispatch();

  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Фильтр поиска</p>

      <div className={styles.filters}>
        <div className={styles.filter}>
          <p className={styles.filterTitle}>Название</p>
          <Input
            placeholder="Введите название"
            onChange={(value: string) =>
              dispatch(setFilterTitle(value ? value : null))
            }
          />
        </div>

        <div className={styles.filter}>
          <p className={styles.filterTitle}>Жанр</p>
          <Select
            placeholder="Выберите жанр"
            onChange={(value: string) =>
              dispatch(setFilterGenre(value ? value : null))
            }
          />
        </div>

        <div className={styles.filter}>
          <p className={styles.filterTitle}>Кинотеатр</p>
          <Select
            placeholder="Выберите кинотеатр"
            onChange={(value: string) =>
              dispatch(setFilterCinema(value ? value : null))
            }
          />
        </div>
      </div>
    </aside>
  );
}
