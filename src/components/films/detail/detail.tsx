import Image from 'next/image';
import Box from '@/components/ui/box/box';
import { IFilmItem } from '../list/list';
import Counter from '../counter/counter';
import styles from './detail.module.css';

interface IProps {
  item: IFilmItem;
}

export default function Detail({ item }: IProps) {
  return (
    <Box className={styles.detail}>
      <Image
        className={styles.detailImage}
        src="/test.jpg"
        width={400}
        height={500}
        alt={item.name}
      />

      <div className={styles.detailContent}>
        <div className={styles.detailContentTop}>
          <div className={styles.detailHeader}>
            <h1 className={styles.detailTitle}>
              Властелин колец: Братство кольца
            </h1>
            <Counter count={item.count} />
          </div>

          <div className={styles.detailParams}>
            <p>
              <span className={styles.detailParamsName}>Жанр:</span> Фэнтези
            </p>
            <p>
              <span className={styles.detailParamsName}>Год выпуска:</span> 2001
            </p>
            <p>
              <span className={styles.detailParamsName}>Рейтинг:</span> 8
            </p>
            <p>
              <span className={styles.detailParamsName}>Режиссер:</span> Питер
              Джексон
            </p>
          </div>
        </div>

        <div className={styles.detailContentBot}>
          <p className={styles.detailSubtitle}>Описание</p>
          <p>
            Сказания о Средиземье — это хроника Великой войны за Кольцо,
            длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал
            неограниченную власть, но был обязан служить злу. Тихая деревня, где
            живут хоббиты. Придя на 111-й день рождения к своему старому другу
            Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о
            кольце, которое Бильбо нашел много лет назад. Это кольцо
            принадлежало когда-то темному властителю Средиземья Саурону, и оно
            дает большую власть своему обладателю. Теперь Саурон хочет вернуть
            себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо,
            чтобы тот отнёс его к Роковой Горе и уничтожил.
          </p>
        </div>
      </div>
    </Box>
  );
}
