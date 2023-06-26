'use client';

import { useState } from 'react';
import styles from './input.module.css';
import cn from 'classnames';

interface IProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function Input({
  value: valueProp,
  placeholder,
  onChange,
}: IProps) {
  const [value, setValue] = useState(valueProp);
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
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
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
}
