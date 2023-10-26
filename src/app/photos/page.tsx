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
  Button,
} from '@/components';
import { useLoadPhotos } from '@/hooks/useLoadPhotos';

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
  const {
    photos,
    loadingPhotos,
    resetPage,
    setLoadingPhotos,
    setPhotos,
    nextPage,
    setActiveTopic,
  } = useLoadPhotos();
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

  async function onChooseTopic(topic: string) {
    try {
      setLoadingPhotos(true);
      resetPage();
      setActiveTopic(topic);
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
          <TopicsList topics={topicts} onChange={onChooseTopic} />
          {loadingPhotos ? (
            <div>Loading...</div>
          ) : (
            <>
              {photos.length ? (
                <>
                  <PhotoCardList photos={photos} />
                  <Button size="middle" variant="outlined" onClick={nextPage}>
                    {loadingPhotos ? 'Loading...' : 'Load more'}
                  </Button>
                </>
              ) : (
                <div>No photos</div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
