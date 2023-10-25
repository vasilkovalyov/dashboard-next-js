'use client';

import { useEffect, useState } from 'react';

import styles from './page.module.scss';

import UnsplashService from '@/services/unsplash';
import { ITopic } from '@/types/topic';
import {
  TopicItemProps,
  TopicsList,
  PhotoCardList,
  BannerSearch,
} from '@/components';

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

export default function Photos() {
  const [loadingPhotos, setLoadingPhotos] = useState<boolean>(false);
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
      setLoadingPhotos(true);
      const response = await service.getPhotos(1);
      setPhotos(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  useEffect(() => {
    loadTopics();
    loadPhotos();
  }, []);

  async function onChooseTopic(topic: string) {
    try {
      setLoadingPhotos(true);
      setPhotos([]);
      const response = await service.getPhotosByTopic(topic);
      setPhotos(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  return (
    <>
      <BannerSearch
        heading="Unsplash"
        description="The internet’s source for visuals.
Powered by creators everywhere."
      />
      <section className={styles['section-photos']}>
        <div className="container">
          <h1>Photos</h1>
          <div className={styles['section-photos__body']}>
            <TopicsList topics={topicts} onChange={onChooseTopic} />
            {loadingPhotos ? (
              <div>Loading...</div>
            ) : (
              <>
                {photos.length ? (
                  <PhotoCardList photos={photos} />
                ) : (
                  <div>No photos</div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
