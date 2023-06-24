import styles from './box.module.css';
import cn from 'classnames';

export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(styles.box, {
        [className as string]: className !== undefined,
      })}
    >
      {children}
    </div>
  );
}
