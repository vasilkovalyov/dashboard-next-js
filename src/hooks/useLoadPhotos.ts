'use client';

import { useState, useEffect, RefObject } from 'react';
import UnsplashService from '@/services/unsplash';
import { IPhoto } from '@/types/photo';
import { OrderByType } from '@/types/common';

export function useLoadPhotos({
  containerRef,
  order_by,
}: {
  containerRef?: RefObject<HTMLDivElement | null>;
  order_by?: OrderByType;
}) {
  const service = new UnsplashService();
  const [loadingPhotos, setLoadingPhotos] = useState<boolean>(false);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeOrder, setActiveOrder] = useState<OrderByType>('latest');

  useEffect(() => {
    if (order_by) {
      setActiveOrder(order_by);
    }
    loadPhotos(1, order_by);
  }, []);

  useEffect(() => {
    if (page !== 1) {
      loadPhotos(page, activeOrder);
    }
  }, [page]);

  function nextPage() {
    setPage((prevState) => prevState + 1);
  }

  function resetPage() {
    setPage(1);
  }

  async function loadPhotoByOrder(orderBy: OrderByType) {
    resetPage();
    setPhotos([]);
    setActiveOrder(orderBy);
    loadPhotos(1, orderBy);
  }

  async function loadPhotos(page: number = 1, orderBy?: OrderByType) {
    try {
      setLoadingPhotos(true);
      let photosArray: IPhoto[] = [];
      if (activeTopic) {
        const response = await service.getPhotosByTopic(
          activeTopic,
          page,
          orderBy
        );
        photosArray = response.data;
      } else {
        const response = await service.getPhotos(page, orderBy ?? 'latest');
        photosArray = response.data;
      }

      if (photosArray.length) {
        setPhotos((prevState) => [...prevState, ...photosArray]);
      }
      if (containerRef) {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  return {
    page,
    activeOrder,
    photos,
    loadingPhotos,
    resetPage,
    setLoadingPhotos,
    setPhotos,
    loadPhotos,
    nextPage,
    setActiveTopic,
    setActiveOrder,
    loadPhotoByOrder,
  };
}
