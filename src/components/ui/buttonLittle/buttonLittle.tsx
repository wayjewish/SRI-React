'use client';

import { useState } from 'react';
import styles from './input.module.css';

export default function ButtonLittle() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <input className={styles.input} type="text" />
    </div>
  );
}
