import { ILocation, ITag, IUrls } from './common';
import { IPhotoUser } from './photo-user';
import { IRelatedPhotoCollection } from './related-photo-collection';

export interface IPhotoSingleData {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: IUrls;
  likes: number;
  sponsorship: IPhotoUser | null;
  user: IPhotoUser;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  location: ILocation;
  tags: ITag[];
  tags_preview: ITag[];
  views: number;
  downloads: number;
  related_collections: {
    total: number;
    type: string;
    results: IRelatedPhotoCollection[];
  };
}
