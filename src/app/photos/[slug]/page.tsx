import { PhotoCardList } from '@/components';
import styles from './page.module.scss';

import UnsplashService from '@/services/unsplash';

const service = new UnsplashService();

async function getData(slug: string) {
  try {
    const response = await service.searchPhoto(slug);
    return response.data.results;
  } catch (e) {
    throw new Error('Failed to fetch data');
  }
}

function convertToString(search: string) {
  return search.replace(/-/g, ' ');
}

export default async function Topic(props: { params: { slug: string } }) {
  const { params } = props;
  const photos = await getData(params.slug);

  return (
    <section className={styles['section-photo']}>
      <div className="container">
        <h1>{convertToString(params.slug)}</h1>
        {photos.length ? (
          <PhotoCardList photos={photos} />
        ) : (
          <div>No photos</div>
        )}
      </div>
    </section>
  );
}
