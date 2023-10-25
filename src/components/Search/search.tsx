'use client';
import { useRef } from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import styles from './search.module.scss';

import { SearchProps } from './search.type';

export default function Search({ className, onSubmit, ...rest }: SearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      onSubmitField();
    }
  };

  function onSubmitField() {
    if (inputRef.current?.value) {
      onSubmit(inputRef.current?.value);
    }
  }

  return (
    <div className={cn(styles['search'], className)}>
      <div className={styles['search__box']}>
        <Button
          variant="text"
          size="small"
          className={styles['search__button']}
          onClick={() => onSubmitField()}
        >
          <FaSearch size={24} />
        </Button>
        <input
          ref={inputRef}
          type="search"
          className={styles['search__input']}
          onKeyPress={handleKeyPress}
          {...rest}
        />
      </div>
    </div>
  );
}
