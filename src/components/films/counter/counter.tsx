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
      <ButtonLittle isDisabled={count <= 0}>
        <MinusIcon className={styles.counterIcon} onClick={handlerMinus} />
      </ButtonLittle>
      <p className={styles.counterText}>{count}</p>
      <ButtonLittle>
        <PlusIcon className={styles.counterIcon} onClick={handlerPlus} />
      </ButtonLittle>
    </div>
  );
}
