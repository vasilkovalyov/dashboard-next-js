import { PhotoCardListProps } from './photo-card-list.type';

import { PhotoCard } from '../PhotoCard';

import styles from './photo-card-list.module.scss';
import { Pages } from '@/constnts/routes';

export default function PhotoCardList({ posts }: PhotoCardListProps) {
  return (
    <div className={styles['photo-card-list']}>
      {posts.map((photo) => (
        <div key={photo.id} className={styles['photo-card-list__col']}>
          <PhotoCard path={`${Pages.POSTS}/${photo.id}`} {...photo} />
        </div>
      ))}
    </div>
  );
}
