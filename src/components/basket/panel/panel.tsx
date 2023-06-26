'use client';
import Box from '@/components/ui/box/box';
import styles from './panel.module.css';
import { useAppSelector } from '@/store/hooks';

export default function Panel() {
  const basket = useAppSelector((state) => state.basket);

  return (
    <Box className={styles.box}>
      <p>Итого билетов:</p>
      <p>{Object.values(basket).reduce((sum, num) => sum + num, 0)}</p>
    </Box>
  );
}
