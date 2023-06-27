'use client';
import Box from '@/components/ui/box/box';
import styles from './modal.module.css';
import DeleteIcon from '@/assets/icons/close.svg';
import Button from '@/components/ui/button/button';
import { useEffect, useRef } from 'react';

interface IProps {
  onClickYes: () => void;
  onClickNo: () => void;
  onClickClose: () => void;
}

export default function Modal({ onClickYes, onClickNo, onClickClose }: IProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!ref.current) return;
    if (!ref.current.contains(e.target as Node)) {
      onClickClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <Box>
        <div ref={ref} className={styles.modal}>
          <div className={styles.content}>
            <div className={styles.top}>
              <p className={styles.title}>Удаление билета</p>
              <DeleteIcon
                className={styles.deleteIcon}
                onClick={onClickClose}
              />
            </div>
            <p className={styles.text}>Вы уверены, что хотите удалить билет?</p>
          </div>
          <div className={styles.buttons}>
            <Button type="primary" onClick={onClickYes}>
              Да
            </Button>
            <Button type="secondary" onClick={onClickNo}>
              Нет
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
