import Link from 'next/link';
import cn from 'classnames';
import styles from './header.module.scss';

import { Navbar } from '../Navbar';
import { Pages } from '@/constnts/routes';
import { ThemeToggler } from '../ThemeToggler';

import { headerMenu } from './header.data';

export default function Header() {
  return (
    <div className={styles['header']}>
      <div className={cn(styles['header__container'], 'container')}>
        <div className={styles['header__logo']}>
          <Link href={Pages.HOME}>
            <h2>Dashboard</h2>
          </Link>
        </div>
        <div className={styles['header__navigation']}>
          <Navbar menu={headerMenu} />
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
