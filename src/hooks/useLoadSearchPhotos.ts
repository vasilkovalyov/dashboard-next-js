'use client';

import { useState } from 'react';
import UnsplashService from '@/services/unsplash';
import { IPhoto } from '@/types/photo';

export function useLoadSearchPhotos(page: number = 1) {
  const service = new UnsplashService();
  const [loadingPhotos, setLoadingPhotos] = useState<boolean>(false);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [pagesPaginationInfo, setPagesPaginationInfo] = useState<{
    total: number;
    total_pages: number;
  }>({
    total: 0,
    total_pages: 0,
  });

  async function loadSearchPhotos(search: string, page: number = 1) {
    try {
      setLoadingPhotos(true);
      const response = await service.searchPhoto(search, page);
      const { results, total, total_pages } = response.data;
      if (results.length) {
        setPagesPaginationInfo({
          total,
          total_pages,
        });
        setPhotos(results);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingPhotos(false);
    }
  }

  return {
    photos,
    currentPage,
    loadingPhotos,
    pagesPaginationInfo,
    setCurrentPage,
    loadSearchPhotos,
  };
}
