'use client';
import { usePathname } from 'next/navigation';

import cn from 'classnames';
import Link from 'next/link';
import styles from './navbar.module.scss';

import { NavbarProps } from './navbar.type';

export default function Navbar({ menu }: NavbarProps) {
  const pathname = usePathname();

  const isActivePage = (path: string) =>
    pathname === path ? styles['navbar__link--active'] : '';

  return (
    <nav className={styles['navbar']}>
      <ul className={styles['navbar__list']}>
        {menu.map((link) => (
          <li key={link.id} className={styles['navbar__item']}>
            <Link
              href={link.path}
              className={cn((styles['navbar__link'], isActivePage(link.path)))}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
