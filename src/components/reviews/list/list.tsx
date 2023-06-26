'use client';
import Review from '../review/review';
import styles from './list.module.css';
import { useGetReviewsQuery } from '@/store/services/movieApi';

interface IProps {
  movieId: string;
}

export default function ReviewsList({ movieId }: IProps) {
  const { data, isLoading, error } = useGetReviewsQuery(movieId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <div className={styles.list}>
      {data.map((item) => (
        <Review key={item.id} item={item} />
      ))}
    </div>
  );
}
