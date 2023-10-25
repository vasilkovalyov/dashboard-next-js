import Link from 'next/link';
import type { Metadata } from 'next';

import styles from './page.module.scss';
import { Button } from '@/components';

import { Pages } from '@/constnts/routes';

// import Image from 'next/image';

{
  /* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100}
  height={24}
  priority
/>; */
}

export const metadata: Metadata = {
  title: 'Dashboard Home',
  description: 'Dashboard Home description',
};

export default function Home() {
  return (
    <section className={styles['section-home']}>
      <div className="container">
        <h1>
          Unsplash API -{' '}
          <Link href="https://api.unsplash.com">https://api.unsplash.com</Link>
        </h1>
        <Button href={Pages.POSTS}>Summary page</Button>
      </div>
    </section>
  );
}
