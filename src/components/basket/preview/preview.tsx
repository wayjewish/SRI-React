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
import PortalModal from '@/components/ui/portal/portalModal';
import Modal from '../modal/modal';
import { useState } from 'react';

interface IProps {
  item: IMovie;
}

export default function BacketPreview({ item }: IProps) {
  const count: number | undefined = useAppSelector(
    (state) => state.basket[item.id],
  );
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleRemove = () => {
    dispatch(removeBasket(item.id));
    setIsOpenModal(false);
  };

  const handleMinus = () => {
    if (count > 1) {
      dispatch(removeOneBasket(item.id));
    } else {
      setIsOpenModal(true);
    }
  };

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
        handlerMinus={handleMinus}
        handlerPlus={() => dispatch(addOneBasket(item.id))}
      />

      <DeleteIcon
        className={styles.deleteIcon}
        onClick={() => setIsOpenModal(true)}
      />

      {isOpenModal && (
        <PortalModal>
          <Modal
            onClickYes={handleRemove}
            onClickNo={() => setIsOpenModal(false)}
            onClickClose={() => setIsOpenModal(false)}
          />
        </PortalModal>
      )}
    </Box>
  );
}
