'use client';
import styles from './sidebar.module.css';
import Box from '../ui/box/box';
import Filters from '../filters/filters';

export default function Sidebar() {
  return (
    <Box>
      <aside className={styles.sidebar}>
        <Filters />
      </aside>
    </Box>
  );
}
