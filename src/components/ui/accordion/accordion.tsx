'use client';
import { useState } from 'react';
import ArrowIcon from '@/assets/icons/arrow.svg';
import styles from './accordion.module.css';
import Box from '../box/box';
import cn from 'classnames';

interface IProps {
  renderTop: () => JSX.Element;
  renderBot: () => JSX.Element;
}

export default function Accordion({ renderTop, renderBot }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      className={cn(styles.accordion, {
        [styles.accordion_open]: isOpen,
      })}
    >
      <div className={styles.accordionTop}>
        {renderTop()}
        <ArrowIcon
          className={styles.accordionIcon}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && <div className={styles.accordionBot}>{renderBot()}</div>}
    </Box>
  );
}
