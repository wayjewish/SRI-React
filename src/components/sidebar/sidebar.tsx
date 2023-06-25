import { useAppDispatch } from '@/store/hooks';
import Input from '../ui/input/input';
import Select from '../ui/select/select';
import styles from './sidebar.module.css';
import {
  setFilterCinema,
  setFilterGenre,
  setFilterTitle,
} from '@/store/features/filtersSlice';
import {
  useGetCinemasQuery,
  useGetMoviesQuery,
} from '@/store/services/movieApi';

export default function Sidebar() {
  const moviesQuery = useGetMoviesQuery(undefined);
  const cinemasQuery = useGetCinemasQuery();
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
            obj={moviesQuery.data?.reduce(
              (obj, item) => ({ ...obj, [item.genre]: item.genre }),
              {},
            )}
            placeholder="Выберите жанр"
            onChange={(value) => dispatch(setFilterGenre(value))}
          />
        </div>

        <div className={styles.filter}>
          <p className={styles.filterTitle}>Кинотеатр</p>
          <Select
            obj={cinemasQuery.data?.reduce(
              (obj, cinema) => ({ ...obj, [cinema.id]: cinema.name }),
              {},
            )}
            placeholder="Выберите кинотеатр"
            onChange={(value) => dispatch(setFilterCinema(value))}
          />
        </div>
      </div>
    </aside>
  );
}
