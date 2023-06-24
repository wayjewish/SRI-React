import Input from '../ui/input/input';
import Select from '../ui/select/select';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Фильтр поиска</p>

      <div className={styles.filters}>
        <div className={styles.filter}>
          <p className={styles.filterTitle}>Название</p>
          <Input />
        </div>

        <div className={styles.filter}>
          <p className={styles.filterTitle}>Жанр</p>
          <Select />
        </div>

        <div className={styles.filter}>
          <p className={styles.filterTitle}>Кинотеатр</p>
          <Select />
        </div>
      </div>
    </aside>
  );
}
