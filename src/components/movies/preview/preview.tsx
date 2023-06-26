'use client';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@/components/ui/box/box';
import Counter from '../counter/counter';
import DeleteIcon from '@/assets/icons/close.svg';
import styles from './preview.module.css';
import { IMovie } from '@/store/services/movieApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addOneBasket, removeOneBasket } from '@/store/features/basketSlice';

interface IProps {
  item: IMovie;
  abDelete?: boolean;
}

export default function Preview({ item, abDelete }: IProps) {
  const count: number | undefined = useAppSelector(
    (state) => state.basket[item.id],
  );
  const dispatch = useAppDispatch();
  const handlerDelete = () => console.log(item.id);

  return (
    <Box className={styles.preview}>
      <Image
        className={styles.previewImage}
        src={item.posterUrl}
        width={100}
        height={120}
        alt={item.title}
        priority={true}
      />
      <div className={styles.previewText}>
        <Link href={`/movie/${item.id}`}>
          <p className={styles.previewName}>{item.title}</p>
        </Link>
        <p className={styles.previewGenre}>{item.genre}</p>
      </div>
      <Counter
        count={count ? count : 0}
        handlerMinus={() => dispatch(removeOneBasket(item.id))}
        handlerPlus={() => dispatch(addOneBasket(item.id))}
      />

      {abDelete && (
        <DeleteIcon className={styles.deleteIcon} onClick={handlerDelete} />
      )}
    </Box>
  );
}
