import Image from 'next/image';
import { IFilmItem } from '../list/list';
import Box from '@/components/ui/box/box';
import styles from './preview.module.css';

export default function Preview({ id, name, genre, count }: IFilmItem) {
  return (
    <Box className={styles.preview}>
      <Image
        className={styles.previewImage}
        src="/test.jpg"
        width={100}
        height={120}
        alt={name}
      />
      <div className={styles.previewText}>
        <p className={styles.previewName}>{name}</p>
        <p className={styles.previewGenre}>{genre}</p>
      </div>
    </Box>
  );
}
