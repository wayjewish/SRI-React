'use client';
import Image from 'next/image';
import Box from '@/components/ui/box/box';
import Counter from '../counter/counter';
import styles from './detail.module.css';
import { useGetMovieQuery } from '@/store/services/movieApi';

interface IProps {
  id: string;
}

export default function Detail({ id }: IProps) {
  const { data, isLoading, error } = useGetMovieQuery(id);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <Box className={styles.detail}>
      <Image
        className={styles.detailImage}
        src={data.posterUrl}
        width={400}
        height={500}
        alt={data.title}
      />

      <div className={styles.detailContent}>
        <div className={styles.detailContentTop}>
          <div className={styles.detailHeader}>
            <h1 className={styles.detailTitle}>{data.title}</h1>
            <Counter count={0} />
          </div>

          <div className={styles.detailParams}>
            <p>
              <span className={styles.detailParamsName}>Жанр:</span>{' '}
              {data.genre}
            </p>
            <p>
              <span className={styles.detailParamsName}>Год выпуска:</span>{' '}
              {data.releaseYear}
            </p>
            <p>
              <span className={styles.detailParamsName}>Рейтинг:</span>{' '}
              {data.rating}
            </p>
            <p>
              <span className={styles.detailParamsName}>Режиссер:</span>{' '}
              {data.director}
            </p>
          </div>
        </div>

        <div className={styles.detailContentBot}>
          <p className={styles.detailSubtitle}>Описание</p>
          <p>{data.description}</p>
        </div>
      </div>
    </Box>
  );
}
