import { useAppDispatch, useAppSelector } from '@/store/hooks';
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
import Box from '../ui/box/box';

export default function Sidebar() {
  const moviesQuery = useGetMoviesQuery(null);
  const cinemasQuery = useGetCinemasQuery();
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  if (!moviesQuery.data || !cinemasQuery.data) {
    return null;
  }

  const objFilterGenre: {
    [index: string]: string;
  } = moviesQuery.data?.reduce(
    (obj, item) => ({ ...obj, [item.genre]: item.genre }),
    {},
  );
  const valueSelectGenre = filters.genre ? objFilterGenre[filters.genre] : '';

  const objFilterCinema: {
    [index: string]: string;
  } = cinemasQuery.data?.reduce(
    (obj, cinema) => ({ ...obj, [cinema.id]: cinema.name }),
    {},
  );
  const valueSelectCinema = filters.cinema
    ? objFilterCinema[filters.cinema]
    : '';

  return (
    <Box>
      <aside className={styles.sidebar}>
        <p className={styles.sidebarTitle}>Фильтр поиска</p>

        <div className={styles.filters}>
          <div className={styles.filter}>
            <p className={styles.filterTitle}>Название</p>
            <Input
              value={filters.title !== null ? filters.title : ''}
              placeholder="Введите название"
              onChange={(value) =>
                dispatch(setFilterTitle(value ? value : null))
              }
            />
          </div>

          <div className={styles.filter}>
            <p className={styles.filterTitle}>Жанр</p>
            <Select
              value={valueSelectGenre}
              obj={objFilterGenre}
              placeholder="Выберите жанр"
              onChange={(key) => dispatch(setFilterGenre(key ? key : null))}
            />
          </div>

          <div className={styles.filter}>
            <p className={styles.filterTitle}>Кинотеатр</p>
            <Select
              value={valueSelectCinema}
              obj={objFilterCinema ? objFilterCinema : {}}
              placeholder="Выберите кинотеатр"
              onChange={(key) => dispatch(setFilterCinema(key ? key : null))}
            />
          </div>
        </div>
      </aside>
    </Box>
  );
}
