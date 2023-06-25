import Box from '../../ui/box/box';
import styles from './review.module.css';
import PhotoIcon from '@/assets/icons/photo.svg';
import { IReview } from '@/store/services/movieApi';

interface IProps {
  item: IReview;
}

export default function Review({ item }: IProps) {
  return (
    <Box className={styles.review}>
      <div className={styles.reviewImage}>
        <PhotoIcon className={styles.reviewImageIcon} />
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <p>
            <b>{item.name}</b>
          </p>
          <p>
            Оценка: <b>{item.rating}</b>
          </p>
        </div>
        <p>{item.text}</p>
      </div>
    </Box>
  );
}
