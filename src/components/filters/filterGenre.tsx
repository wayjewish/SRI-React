'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Select from '../ui/select/select';
import styles from './filters.module.css';
import { setFilterGenre } from '@/store/features/filtersSlice';
import { useGetMoviesQuery } from '@/store/services/movieApi';

export default function FilterGenre() {
  const { data, isLoading, error } = useGetMoviesQuery(null);
  const filter = useAppSelector((state) => state.filters.genre);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  const objFilterGenre: {
    [index: string]: string;
  } = data.reduce((obj, item) => ({ ...obj, [item.genre]: item.genre }), {});
  const valueSelectGenre = filter ? objFilterGenre[filter] : '';

  return (
    <div className={styles.filter}>
      <p className={styles.filterTitle}>Жанр</p>
      <Select
        value={valueSelectGenre}
        obj={objFilterGenre}
        placeholder="Выберите жанр"
        onChange={(key) => dispatch(setFilterGenre(key ? key : null))}
      />
    </div>
  );
}
