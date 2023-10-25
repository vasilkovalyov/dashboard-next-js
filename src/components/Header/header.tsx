import cn from 'classnames';
import styles from './header.module.scss';

import { Navbar } from '../Navbar';
import { ThemeToggler } from '../ThemeToggler';

export default function Header() {
  return (
    <div className={styles['header']}>
      <div className={cn(styles['header__container'], 'container')}>
        <div className={styles['header__logo']}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles['header__navigation']}>
          <Navbar />
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
