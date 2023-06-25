import Image from 'next/image';
import { IFilmItem } from '../list/list';
import Box from '@/components/ui/box/box';
import ButtonLittle from '@/components/ui/buttonLittle/buttonLittle';
import MinusIcon from '@/assets/icons/minus.svg';
import PlusIcon from '@/assets/icons/plus.svg';
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
      <div className={styles.previewCounter}>
        <ButtonLittle isDisabled={count <= 0}>
          <MinusIcon className={styles.previewCounterIcon} />
        </ButtonLittle>
        <p className={styles.previewCounterText}>{count}</p>
        <ButtonLittle>
          <PlusIcon className={styles.previewCounterIcon} />
        </ButtonLittle>
      </div>
    </Box>
  );
}
