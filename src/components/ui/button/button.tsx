'use client';
import styles from './button.module.css';
import cn from 'classnames';

interface IProps {
  children: React.ReactNode;
  type: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({ children, type, onClick }: IProps) {
  return (
    <button
      className={cn(styles.button, {
        [styles.buttonPrimary]: type === 'primary',
        [styles.buttonSecondary]: type === 'secondary',
      })}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
