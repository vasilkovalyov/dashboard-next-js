import type { Metadata } from 'next';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Posts',
};

export default function Posts() {
  return (
    <section className={styles['section-posts']}>
      <div className="container">
        <h1>Posts</h1>
      </div>
    </section>
  );
}
