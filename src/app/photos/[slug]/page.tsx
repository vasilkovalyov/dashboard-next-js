'use client';

import Pagination from 'react-js-pagination';
import { PhotoCardList } from '@/components';
import styles from './page.module.scss';

import { useLoadSearchPhotos } from '@/hooks/useLoadSearchPhotos';
import { useEffect } from 'react';

function convertToString(search: string) {
  return search.replace(/-/g, ' ');
}

export default function Topic(props: { params: { slug: string } }) {
  const {
    photos,
    currentPage,
    loadingPhotos,
    pagesPaginationInfo,
    setCurrentPage,
    loadSearchPhotos,
  } = useLoadSearchPhotos();
  const { params } = props;
  const paginationSizePages = 4;
  const perPage = 10;

  useEffect(() => {
    loadSearchPhotos(params.slug, currentPage);
  }, [currentPage]);

  return (
    <section className={styles['section-photo']}>
      <div className="container">
        <h1>{convertToString(params.slug)}</h1>
        {loadingPhotos ? (
          <div>Loading...</div>
        ) : (
          <>
            {photos.length ? (
              <>
                <PhotoCardList photos={photos} />
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={perPage}
                  totalItemsCount={pagesPaginationInfo.total}
                  pageRangeDisplayed={paginationSizePages}
                  onChange={(pageNumber) => setCurrentPage(pageNumber)}
                />
              </>
            ) : (
              <div>No photos</div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
