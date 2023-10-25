import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles['navbar']}>
      <ul className={styles['navbar__list']}>
        <li className={styles['navbar__item']}>
          <Link href="/" className={styles['navbar__link']}>
            Link
          </Link>
        </li>
        <li className={styles['navbar__item']}>
          <Link href="/" className={styles['navbar__link']}>
            Link
          </Link>
        </li>
        <li className={styles['navbar__item']}>
          <Link href="/" className={styles['navbar__link']}>
            Link
          </Link>
        </li>
      </ul>
    </nav>
  );
}
