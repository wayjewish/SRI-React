'use client';
import Image from 'next/image';
import { IFilmItem } from '../list/list';
import Box from '@/components/ui/box/box';
import ButtonLittle from '@/components/ui/buttonLittle/buttonLittle';
import MinusIcon from '@/assets/icons/minus.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import DeleteIcon from '@/assets/icons/close.svg';
import styles from './preview.module.css';

interface IProps {
  item: IFilmItem;
  abDelete?: boolean;
}

export default function Preview({ item, abDelete }: IProps) {
  const handlerDelete = () => console.log(item.id);

  return (
    <Box className={styles.preview}>
      <Image
        className={styles.previewImage}
        src="/test.jpg"
        width={100}
        height={120}
        alt={item.name}
      />
      <div className={styles.previewText}>
        <p className={styles.previewName}>{item.name}</p>
        <p className={styles.previewGenre}>{item.genre}</p>
      </div>
      <div className={styles.previewCounter}>
        <ButtonLittle isDisabled={item.count <= 0}>
          <MinusIcon className={styles.previewCounterIcon} />
        </ButtonLittle>
        <p className={styles.previewCounterText}>{item.count}</p>
        <ButtonLittle>
          <PlusIcon className={styles.previewCounterIcon} />
        </ButtonLittle>
      </div>
      {abDelete && (
        <DeleteIcon className={styles.deleteIcon} onClick={handlerDelete} />
      )}
    </Box>
  );
}
