import Link from 'next/link';
import type { Metadata } from 'next';

import styles from './page.module.scss';
import { Button } from '@/components';

import { Pages } from '@/constnts/routes';

export const metadata: Metadata = {
  title: 'Dashboard Home',
  description: 'Dashboard Home description',
};

export default function Home() {
  return (
    <section className={styles['section-home']}>
      <div className="container">
        <h1 className={styles['section-home__heading']}>
          Unsplash API -{' '}
          <Link href="https://api.unsplash.com">https://api.unsplash.com</Link>
        </h1>
        <Button href={Pages.POSTS} size="large">
          Summary page
        </Button>
      </div>
    </section>
  );
}
