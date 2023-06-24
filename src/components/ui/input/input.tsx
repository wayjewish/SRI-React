'use client';

import { useState } from 'react';
import styles from './input.module.css';
import cn from 'classnames';

export default function Input() {
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
