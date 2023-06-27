'use client';
import styles from './counter.module.css';
import ButtonLittle from '@/components/ui/buttonLittle/buttonLittle';
import MinusIcon from '@/assets/icons/minus.svg';
import PlusIcon from '@/assets/icons/plus.svg';

interface IProps {
  count: number;
  handlerMinus?: () => void;
  handlerPlus?: () => void;
}

export default function Counter({ count, handlerMinus, handlerPlus }: IProps) {
  return (
    <div className={styles.counter}>
      <ButtonLittle isDisabled={count <= 0} onClick={handlerMinus}>
        <MinusIcon className={styles.counterIcon} />
      </ButtonLittle>
      <p className={styles.counterText}>{count}</p>
      <ButtonLittle isDisabled={count >= 30} onClick={handlerPlus}>
        <PlusIcon className={styles.counterIcon} />
      </ButtonLittle>
    </div>
  );
}
