'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import cn from 'classnames';
import ArrowIcon from '@/assets/icons/arrow.svg';
import Portal from '../portal/portal';

export interface ISelectItem {
  id: string;
  name: string;
}

interface IProps {
  placeholder?: string;
}

const list: ISelectItem[] = [
  { id: '1', name: 'item1' },
  { id: '2', name: 'item2' },
  { id: '3', name: 'item3' },
  { id: '4', name: 'item4' },
  { id: '5', name: 'item5' },
];

export default function Select({ placeholder }: IProps) {
  const refWrap = useRef<HTMLDivElement>(null);
  const refList = useRef<HTMLUListElement>(null);
  const [isActive, setIsActive] = useState(false);
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
    setIsActive(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!refWrap.current || !refList.current) return;
    if (
      !refWrap.current.contains(e.target as Node) &&
      !refList.current.contains(e.target as Node)
    ) {
      setIsActive(false);
    }
  };

  const handleClickOnListItem = (newValue: string) => {
    setValue(newValue);
    setIsActive(false);
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
          [styles.wrapFocus]: isActive,
        })}
        onClick={() => setIsActive((prev) => !prev)}
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

      {isActive && (
        <Portal>
          <ul ref={refList} style={stylesList} className={styles.list}>
            {list.map((item) => (
              <li
                key={item.id}
                className={styles.item}
                onClick={() => handleClickOnListItem(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Portal>
      )}
    </div>
  );
}
