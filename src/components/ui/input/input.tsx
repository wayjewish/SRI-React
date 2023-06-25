'use client';

import { useState } from 'react';
import styles from './input.module.css';
import cn from 'classnames';

interface IProps {
  placeholder?: string;
}

export default function Input({ placeholder }: IProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={cn(styles.wrap, {
        [styles.wrapFocus]: focused,
      })}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
