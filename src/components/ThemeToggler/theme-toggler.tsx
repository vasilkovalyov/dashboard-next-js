'use client';
import { useEffect, useState } from 'react';
import styles from './theme-toggler.module.scss';
import { useTheme } from 'next-themes';

import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';

export default function ThemeToggler() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function onToggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  }

  if (!mounted) {
    return null;
  }

  return (
    <button className={styles['theme-toggler']} onClick={onToggleTheme}>
      {theme === 'dark' ? <BsSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
}
