'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import cn from 'classnames';
import ArrowIcon from '@/assets/icons/arrow.svg';
import Portal from '../portal/portal';

interface IProps {
  obj?: {
    [index: string]: string;
  };
  placeholder?: string;
  onChange?: (value: string | null) => void;
}

export default function Select({ obj, placeholder, onChange }: IProps) {
  const refWrap = useRef<HTMLDivElement>(null);
  const refList = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [stylesList, setStylesList] = useState<{
    top: number;
    left: number;
    width: string;
  }>({
    top: 0,
    left: 0,
    width: '100%',
  });

  const handleScroll = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!refWrap.current || !refList.current) return;
    if (
      !refWrap.current.contains(e.target as Node) &&
      !refList.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClickOnListItem = (newValue: string, key?: string) => {
    setValue(newValue);
    setIsOpen(false);
    if (onChange) onChange(key ? key : null);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.dir(refWrap.current);

    if (!refWrap.current) return;

    const rect = refWrap.current.getBoundingClientRect();
    console.log(rect);

    setStylesList({
      top: rect.top + rect.height,
      left: rect.left,
      width: `${rect.width}px`,
    });
  }, []);

  return (
    <div className={styles.select}>
      <div
        ref={refWrap}
        className={cn(styles.wrap, {
          [styles.wrapOpen]: isOpen,
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input
          className={styles.input}
          type="text"
          value={value}
          readOnly
          placeholder={placeholder}
        />
        <ArrowIcon className={styles.icon} />
      </div>

      {obj && isOpen && (
        <Portal>
          <ul ref={refList} style={stylesList} className={styles.list}>
            <li
              className={styles.item}
              onClick={() => handleClickOnListItem('')}
            >
              Не выбран
            </li>
            {Object.entries(obj).map(([key, value]) => (
              <li
                key={key}
                className={styles.item}
                onClick={() => handleClickOnListItem(obj[key], key)}
              >
                {value}
              </li>
            ))}
          </ul>
        </Portal>
      )}
    </div>
  );
}
