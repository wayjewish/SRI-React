'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Input from '../ui/input/input';
import styles from './filters.module.css';
import { setFilterTitle } from '@/store/features/filtersSlice';
import debounce from '@/utils/debounce';

export default function FilterTitle() {
  const filter = useAppSelector((state) => state.filters.title);
  const dispatch = useAppDispatch();

  const onChange = (value: string) =>
    dispatch(setFilterTitle(value ? value : null));
  const debouncedFunction = debounce(onChange, 1000);

  return (
    <div className={styles.filter}>
      <p className={styles.filterTitle}>Название</p>
      <Input
        value={filter !== null ? filter : ''}
        placeholder="Введите название"
        onChange={debouncedFunction}
      />
    </div>
  );
}
