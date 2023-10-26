'use client';

import { useState, useEffect } from 'react';
import UnsplashService from '@/services/unsplash';
import { IPhoto } from '@/types/photo';
import { OrderByType } from '@/types/common';

export function useLoadPhotos({ order_by }: { order_by?: OrderByType }) {
  const service = new UnsplashService();
  const [loadingPhotos, setLoadingPhotos] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
    if (page === 1) return;
    if (activeTopic) {
      loadMoreWithTopic(page, activeTopic, activeOrder);
    } else {
      loadMore(page, activeOrder);
    }
  }, [page]);

  function onNextPage() {
    setPage((prevState) => prevState + 1);
  }

  function resetPage() {
    setPage(1);
  }

  async function loadPhotoByOrder(orderBy: OrderByType, topic?: string | null) {
    resetPage();
    setPhotos([]);
    setActiveOrder(orderBy);
    if (topic) {
      loadPhotoByCategory(topic, orderBy);
    } else {
      loadPhotos(1, orderBy);
    }
  }

  async function loadPhotoByCategory(topic: string, orderBy: OrderByType) {
    try {
      setLoadingPhotos(true);
      resetPage();
      setPhotos([]);
      setActiveTopic(topic);
      const response = await service.getPhotosByTopic(topic, 1, orderBy);
      setPhotos((prevState) => [...prevState, ...response.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  async function loadPhotos(page: number = 1, orderBy?: OrderByType) {
    try {
      setLoadingPhotos(true);
      const response = await service.getPhotos(page, orderBy ?? 'latest');
      setPhotos((prevState) => [...prevState, ...response.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  async function loadMore(page: number = 1, orderBy?: OrderByType) {
    try {
      setLoading(true);
      const response = await service.getPhotos(page, orderBy ?? 'latest');
      setPhotos((prevState) => [...prevState, ...response.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function loadMoreWithTopic(
    page: number = 1,
    topic: string,
    orderBy: OrderByType = 'latest'
  ) {
    try {
      setLoading(true);
      console.log('topic', topic);
      console.log('orderBy', orderBy);
      const response = await service.getPhotosByTopic(topic, page, orderBy);
      setPhotos((prevState) => [...prevState, ...response.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    page,
    activeOrder,
    photos,
    loadingPhotos,
    loading,
    activeTopic,
    resetPage,
    setLoadingPhotos,
    setPhotos,
    loadPhotos,
    onNextPage,
    setActiveTopic,
    setActiveOrder,
    loadPhotoByOrder,
    loadPhotoByCategory,
  };
}
