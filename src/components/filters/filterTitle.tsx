'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Input from '../ui/input/input';
import styles from './filters.module.css';
import { setFilterTitle } from '@/store/features/filtersSlice';

export default function FilterTitle() {
  const filter = useAppSelector((state) => state.filters.title);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filter}>
      <p className={styles.filterTitle}>Название</p>
      <Input
        value={filter !== null ? filter : ''}
        placeholder="Введите название"
        onChange={(value) => dispatch(setFilterTitle(value ? value : null))}
      />
    </div>
  );
}
