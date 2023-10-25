'use client';
import styles from './theme-toggler.module.scss';
import { useTheme } from 'next-themes';

import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  function onToggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  }

  return (
    <button className={styles['theme-toggler']} onClick={onToggleTheme}>
      {theme === 'dark' ? <BsSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
}
