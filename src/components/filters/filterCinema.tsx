'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Select from '../ui/select/select';
import styles from './filters.module.css';
import { setFilterCinema } from '@/store/features/filtersSlice';
import { useGetCinemasQuery } from '@/store/services/movieApi';

export default function FilterCinema() {
  const { data, isLoading, error } = useGetCinemasQuery();
  const filter = useAppSelector((state) => state.filters.cinema);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  const objFilterCinema: {
    [index: string]: string;
  } = data.reduce((obj, cinema) => ({ ...obj, [cinema.id]: cinema.name }), {});
  const valueSelectCinema = filter ? objFilterCinema[filter] : '';

  return (
    <div className={styles.filter}>
      <p className={styles.filterTitle}>Кинотеатр</p>
      <Select
        value={valueSelectCinema}
        obj={objFilterCinema ? objFilterCinema : {}}
        placeholder="Выберите кинотеатр"
        onChange={(key) => dispatch(setFilterCinema(key ? key : null))}
      />
    </div>
  );
}
