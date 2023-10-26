'use client';

import { useState, useEffect } from 'react';
import UnsplashService from '@/services/unsplash';
import { IPhoto } from '@/types/photo';

export function useLoadPhotos() {
  const service = new UnsplashService();
  const [loadingPhotos, setLoadingPhotos] = useState<boolean>(false);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    if (page !== 1) {
      loadPhotos(page);
    }
  }, [page]);

  function nextPage() {
    setPage((prevState) => prevState + 1);
  }

  function resetPage() {
    setPage(1);
  }

  async function loadPhotos(page: number = 1) {
    try {
      setLoadingPhotos(true);
      let photosArray: IPhoto[] = [];
      if (activeTopic) {
        const response = await service.getPhotosByTopic(activeTopic, page);
        photosArray = response.data;
      } else {
        const response = await service.getPhotos(page);
        photosArray = response.data;
      }

      if (photosArray.length) {
        setPhotos((prevState) => [...prevState, ...photosArray]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  return {
    page,
    photos,
    loadingPhotos,
    resetPage,
    setLoadingPhotos,
    setPhotos,
    nextPage,
    setActiveTopic,
  };
}
