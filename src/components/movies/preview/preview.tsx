'use client';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@/components/ui/box/box';
import Counter from '../counter/counter';
import DeleteIcon from '@/assets/icons/close.svg';
import styles from './preview.module.css';
import { IMovie } from '@/store/services/movieApi';

interface IProps {
  item: IMovie;
  abDelete?: boolean;
}

export default function Preview({ item, abDelete }: IProps) {
  const handlerDelete = () => console.log(item.id);

  return (
    <Link href={`/movie/${item.id}`}>
      <Box className={styles.preview}>
        <Image
          className={styles.previewImage}
          src={item.posterUrl}
          width={100}
          height={120}
          alt={item.title}
        />
        <div className={styles.previewText}>
          <p className={styles.previewName}>{item.title}</p>
          <p className={styles.previewGenre}>{item.genre}</p>
        </div>
        <Counter count={0} />
        {abDelete && (
          <DeleteIcon className={styles.deleteIcon} onClick={handlerDelete} />
        )}
      </Box>
    </Link>
  );
}
