'use client';

import { usePathname, useRouter } from 'next/navigation';
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
  Select,
} from '@/components';
import { useLoadPhotos } from '@/hooks/useLoadPhotos';
import { OrderByType } from '@/types/common';

const service = new UnsplashService();

type PageParamsType = {
  params: { slug: string };
  searchParams: { order_by: OrderByType };
};

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

export default function Photos({ searchParams }: PageParamsType) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    photos,
    loading,
    loadingPhotos,
    activeOrder,
    activeTopic,
    onNextPage,
    loadPhotoByOrder,
    loadPhotoByCategory,
  } = useLoadPhotos({
    order_by: searchParams.order_by,
  });
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

  function onChangeOrderBy(value: OrderByType) {
    router.push(`${pathname}?order_by=${value}`);
    loadPhotoByOrder(value, activeTopic ?? null);
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
          <div className={styles['section-photos__head']}>
            <h1 className={styles['section-photos__heading']}>Photos</h1>
            <Select
              defaultValue={searchParams.order_by}
              onChange={(e) =>
                onChangeOrderBy(e.currentTarget.value as OrderByType)
              }
              options={[
                {
                  name: 'Latest',
                  value: 'latest',
                },
                {
                  name: 'Oldest',
                  value: 'oldest',
                },
                {
                  name: 'Popular',
                  value: 'popular',
                },
                {
                  name: 'Views',
                  value: 'views',
                },
                {
                  name: 'Downloads',
                  value: 'downloads',
                },
              ]}
            />
          </div>

          <TopicsList
            topics={topicts}
            onChange={(value) =>
              loadPhotoByCategory(value as OrderByType, activeOrder)
            }
          />
          <div className={styles['section-photos__grid']}>
            {loadingPhotos ? (
              <div>Loading...</div>
            ) : (
              <>
                {photos.length ? (
                  <>
                    <PhotoCardList photos={photos} />
                    <Button
                      size="middle"
                      variant="outlined"
                      disabled={loading}
                      onClick={onNextPage}
                    >
                      {loading ? 'Loading...' : 'Load more'}
                    </Button>
                  </>
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
