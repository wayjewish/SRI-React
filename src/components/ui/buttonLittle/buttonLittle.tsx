'use client';
import styles from './buttonLittle.module.css';

interface IProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function ButtonLittle({
  children,
  isDisabled,
  onClick,
}: IProps) {
  return (
    <button
      className={styles.button}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
