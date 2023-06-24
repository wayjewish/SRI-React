import styles from './page.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import Box from '@/components/ui/box/box';
import List from '@/components/films/list/list';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Sidebar />
      </Box>
      <List />
    </main>
  );
}
