import { IPhotoUser } from './photo-user';

export type OrderByType =
  | 'latest'
  | 'oldest'
  | 'popular'
  | 'views'
  | 'downloads';

export interface IUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface IProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface ILocation {
  city: string | null;
  country: string | null;
  name: string | null;
}

export interface ITag {
  title: string;
  type: string;
}

export interface IPreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: IUrls;
}

export interface ICoverPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: IUrls;
  likes: number;
  current_user_collections: [];
  sponsorship: IPhotoUser | null;
  topic_submissions: {
    [key: string]: {
      status: string;
      approved_on: string;
    };
  };
  user: IPhotoUser;
}
