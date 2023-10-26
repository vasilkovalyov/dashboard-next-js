import { IRelatedPhotoCollection } from '@/types/related-photo-collection';

export type RelatedPhotoCollectionProps = Pick<
  IRelatedPhotoCollection,
  | 'id'
  | 'tags'
  | 'title'
  | 'user'
  | 'preview_photos'
  | 'cover_photo'
  | 'total_photos'
  | 'last_collected_at'
  | 'user'
>;
