'use client';
import { useAppSelector } from '@/store/hooks';
import Preview from '../preview/preview';
import styles from './list.module.css';
import { useGetMoviesQuery } from '@/store/services/movieApi';

export default function List() {
  const basket = useAppSelector((state) => state.basket);
  const { data, isLoading, error } = useGetMoviesQuery(null);

  console.log(basket);

  if (!(Object.keys(basket).length > 0)) {
    return <span>Корзина пуста</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <div className={styles.list}>
      {data
        .filter((movie) => basket[movie.id] !== undefined)
        .map((item) => (
          <Preview key={item.id} item={item} />
        ))}
    </div>
  );
}
