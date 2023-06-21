import styles from './header.module.css';
import Logo from '../../assets/icons/basket.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Билетопоиск</div>
      <div className={styles.basket}>
        <Logo className={styles.basket__icon} />
      </div>
    </header>
  );
}
