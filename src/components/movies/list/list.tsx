'use client';
import { useAppSelector } from '@/store/hooks';
import Preview from '../preview/preview';
import styles from './list.module.css';
import { IMovie, useGetMoviesQuery } from '@/store/services/movieApi';
import { useEffect, useState } from 'react';

export default function List() {
  const filters = useAppSelector((state) => state.filters);
  const { data, isLoading, isFetching, error } = useGetMoviesQuery(
    filters.cinema,
  );
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    let newData: IMovie[] = [];
    if (data) newData = data;

    if (filters.title !== null) {
      newData = newData.filter((movie) =>
        movie.title
          .toLocaleLowerCase()
          .includes((filters.title as string).toLocaleLowerCase()),
      );
    }

    if (filters.genre !== null) {
      console.log(filters.genre);
      newData = newData.filter((movie) =>
        movie.genre
          .toLocaleLowerCase()
          .includes((filters.genre as string).toLocaleLowerCase()),
      );
    }

    setCurrentData(newData);
  }, [data, filters.title, filters.genre, filters.cinema]);

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (!data || !currentData || error) {
    return <span>NotFound</span>;
  }

  return (
    <div className={styles.list}>
      {currentData.map((item) => (
        <Preview key={item.id} item={item} />
      ))}
    </div>
  );
}
