'use client';
import styles from './filters.module.css';
import FilterTitle from './filterTitle';
import FilterGenre from './filterGenre';
import FilterCinema from './filterCinema';

export default function Filters() {
  return (
    <div className={styles.filters}>
      <p className={styles.title}>Фильтр поиска</p>

      <div className={styles.list}>
        <FilterTitle />
        <FilterGenre />
        <FilterCinema />
      </div>
    </div>
  );
}
