'use client';
import Preview from '../preview/preview';
import styles from './list.module.css';
import { useGetMoviesQuery } from '@/store/services/movieApi';

interface IProps {
  abDelete?: boolean;
}

export default function List({ abDelete }: IProps) {
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <div className={styles.list}>
      {data.map((item) => (
        <Preview key={item.id} item={item} abDelete={abDelete} />
      ))}
    </div>
  );
}
