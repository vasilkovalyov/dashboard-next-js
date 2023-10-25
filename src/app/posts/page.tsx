'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
// import type { Metadata } from 'next';

import styles from './page.module.scss';

import UnsplashService from '@/services/unsplash';
import { ITopic } from '@/types/topic';
import { TopicItemProps, TopicsList } from '@/components';

const service = new UnsplashService();

// export const metadata: Metadata = {
//   title: 'Posts',
//   description: 'Posts',
// };

const convertTopicsForComponent = (topics: ITopic[]): TopicItemProps[] => {
  return topics.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
    };
  });
};

export default function Posts() {
  const [topicts, setTopics] = useState<TopicItemProps[]>([]);

  async function loadTopics() {
    try {
      const response = await service.getListTopics();
      setTopics(convertTopicsForComponent(response.data));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadTopics();
  }, []);

  function onChooseTopic(value: string) {
    console.log(value);
  }

  return (
    <section className={styles['section-posts']}>
      <div className="container">
        <h1>Posts</h1>
        <TopicsList topics={topicts} onChange={onChooseTopic} />
      </div>
    </section>
  );
}
