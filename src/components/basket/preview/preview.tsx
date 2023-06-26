'use client';
import Image from 'next/image';
import Box from '@/components/ui/box/box';
import DeleteIcon from '@/assets/icons/close.svg';
import styles from './preview.module.css';
import { IMovie } from '@/store/services/movieApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addOneBasket,
  removeBasket,
  removeOneBasket,
} from '@/store/features/basketSlice';
import Counter from '@/components/movies/counter/counter';

interface IProps {
  item: IMovie;
}

export default function Preview({ item }: IProps) {
  const count: number | undefined = useAppSelector(
    (state) => state.basket[item.id],
  );
  const dispatch = useAppDispatch();

  return (
    <Box className={styles.preview}>
      <Image
        className={styles.previewImage}
        src={item.posterUrl}
        width={100}
        height={120}
        alt={item.title}
        loading="lazy"
      />

      <div className={styles.previewText}>
        <p className={styles.previewName}>{item.title}</p>
        <p className={styles.previewGenre}>{item.genre}</p>
      </div>

      <Counter
        count={count ? count : 0}
        handlerMinus={() => dispatch(removeOneBasket(item.id))}
        handlerPlus={() => dispatch(addOneBasket(item.id))}
      />

      <DeleteIcon
        className={styles.deleteIcon}
        onClick={() => dispatch(removeBasket(item.id))}
      />
    </Box>
  );
}
