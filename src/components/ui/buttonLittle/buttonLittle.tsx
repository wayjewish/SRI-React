'use client';

import styles from './buttonLittle.module.css';

interface IProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  handlerClick?: () => void;
}

export default function ButtonLittle({
  children,
  isDisabled,
  handlerClick,
}: IProps) {
  return (
    <button
      className={styles.button}
      type="button"
      disabled={isDisabled}
      onClick={handlerClick}
    >
      {children}
    </button>
  );
}
