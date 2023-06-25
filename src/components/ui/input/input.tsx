'use client';

import { useState } from 'react';
import styles from './input.module.css';
import cn from 'classnames';

interface IProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function Input({ placeholder, onChange }: IProps) {
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.currentTarget.value);
  };

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
        onChange={handleChange}
      />
    </div>
  );
}
