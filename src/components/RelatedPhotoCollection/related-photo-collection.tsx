import Image from 'next/image';
import { Tags } from '../Tags';
import styles from './related-photo-collection.module.scss';

import { RelatedPhotoCollectionProps } from './related-photo-collection.type';

export default function RelatedPhotoCollection({
  preview_photos,
  title,
  total_photos,
  tags,
  user,
}: RelatedPhotoCollectionProps) {
  const previewPhotos = preview_photos.splice(0, 3);
  return (
    <div className={styles['related-photo-collection']}>
      <div className={styles['related-photo-collection__images']}>
        {previewPhotos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.slug}
            width={300}
            height={200}
            priority
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
          />
        ))}
      </div>
      <div className={styles['related-photo-collection__body']}>
        <h3 className={styles['related-photo-collection__heading']}>{title}</h3>
        <ul className={styles['related-photo-collection__info-list']}>
          <li>
            {total_photos} {total_photos === 1 ? 'photo' : 'photos'}
          </li>
          <li>Curated by {user.name}</li>
        </ul>
        <Tags tags={tags} />
      </div>
    </div>
  );
}
