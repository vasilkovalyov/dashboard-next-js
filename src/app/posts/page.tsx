'use client';

import { useEffect, useState } from 'react';

import styles from './page.module.scss';

import UnsplashService from '@/services/unsplash';
import { ITopic } from '@/types/topic';
import { TopicItemProps, TopicsList, PhotoCardList } from '@/components';

const service = new UnsplashService();

const convertTopicsForComponent = (topics: ITopic[]): TopicItemProps[] => {
  return topics.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      total_photos: item.total_photos,
    };
  });
};

export default function Posts() {
  const [topicts, setTopics] = useState<TopicItemProps[]>([]);
  const [photos, setPhotos] = useState<any[]>([]);

  async function loadTopics() {
    try {
      const response = await service.getListTopics();
      setTopics(convertTopicsForComponent(response.data));
    } catch (e) {
      console.log(e);
    }
  }

  async function loadPhotos() {
    try {
      const response = await service.getPhotos(1);
      console.log('response', response);
      setPhotos(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadTopics();
    loadPhotos();
  }, []);

  function onChooseTopic(value: string) {
    console.log(value);
  }

  return (
    <section className={styles['section-posts']}>
      <div className="container">
        <h1>Posts</h1>
        <div className={styles['section-posts__body']}>
          <TopicsList topics={topicts} onChange={onChooseTopic} />
          <PhotoCardList posts={photos} />
        </div>
      </div>
    </section>
  );
}
