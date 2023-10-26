'use client';

import { usePathname, useRouter } from 'next/navigation';
import Pagination from 'react-js-pagination';
import { PhotoCardList } from '@/components';
import styles from './page.module.scss';

import { useLoadSearchPhotos } from '@/hooks/useLoadSearchPhotos';
import { useEffect, useRef } from 'react';

function convertToString(search: string) {
  return search.replace(/-/g, ' ');
}

type PageParamsType = {
  params: { slug: string };
  searchParams: { page: number };
};

export default function Topic(props: PageParamsType) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const {
    photos,
    currentPage,
    loadingPhotos,
    pagesPaginationInfo,
    setCurrentPage,
    loadSearchPhotos,
  } = useLoadSearchPhotos({
    page: +props.searchParams.page || 1,
    containerRef,
  });
  const { params } = props;
  const paginationSizePages = 4;
  const perPage = 10;

  useEffect(() => {
    loadSearchPhotos(params.slug, currentPage);
  }, [currentPage]);

  function onChangePage(page: number) {
    router.push(`${pathname}?page=${page}`);
    setCurrentPage(page);
  }

  return (
    <section className={styles['section-photo']}>
      <div className="container">
        <h1>{convertToString(params.slug)}</h1>
        <div className={styles['section-photo__grid']}>
          {loadingPhotos ? (
            <div>Loading...</div>
          ) : (
            <>
              {photos.length ? (
                <>
                  <PhotoCardList photos={photos} />
                  <div ref={containerRef}></div>
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={perPage}
                    totalItemsCount={pagesPaginationInfo.total}
                    pageRangeDisplayed={paginationSizePages}
                    onChange={onChangePage}
                  />
                </>
              ) : (
                <div>No photos</div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
