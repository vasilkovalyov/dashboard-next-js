import { ICoverPhoto, IPreviewPhoto, ITag } from './common';
import { IPhotoUser } from './photo-user';

export interface IRelatedPhotoCollection {
  id: string;
  title: string;
  description: string | null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  featured: boolean;
  total_photos: number;
  private: boolean;
  tags: ITag[];
  user: IPhotoUser;
  cover_photo: ICoverPhoto;
  preview_photos: IPreviewPhoto[];
}
