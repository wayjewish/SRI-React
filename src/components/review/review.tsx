import Image from 'next/image';
import Box from '../ui/box/box';
import styles from './review.module.css';

interface IReviewItem {
  image?: string;
  name: string;
  text: string;
  rating: number;
}

interface IProps {
  item: IReviewItem;
}

export default function Review({ item }: IProps) {
  return (
    <Box className={styles.review}>
      <Image
        className={styles.reviewImage}
        src="/test.jpg"
        width={400}
        height={500}
        alt={item.name}
      />
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <p>
            <b>Роман</b>
          </p>
          <p>
            Оценка: <b>8</b>
          </p>
        </div>
        <p>
          По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу.
          Это было около четырех лет назад, но тот момент я вспоминаю и по сей
          день. До него я не был фанатом Джона Толкина, как впрочем, и всего
          фентези в целом, однако стоило мне посмотреть первые десять минут
          фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в
          необычайный мир, где добро борется со злом, где зеленые рощи
          перемежаются с поросшими мхом статуями и древними развалинами, в мир,
          где пробираясь лесною тропой можно встретить остроухих неувядающих
          эльфов или мерзких орков – кому как повезет...
        </p>
      </div>
    </Box>
  );
}
