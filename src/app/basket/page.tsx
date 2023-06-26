import List from '@/components/basket/list/list';
import Panel from '@/components/basket/panel/panel';
import styles from './page.module.css';

export default function Basket() {
  return (
    <main className={styles.main}>
      <List />
      <Panel />
    </main>
  );
}
