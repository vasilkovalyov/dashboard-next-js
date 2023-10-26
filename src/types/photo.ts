import { ILocation, ITag, IUrls } from './common';
import { IPhotoUser } from './photo-user';

export interface IPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  description: string;
  alt_description: string;
  urls: IUrls;
  likes: number;
  current_user_collections: [];
  sponsorship: ISponsorship;
  user: IPhotoUser;
}

interface ISponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: IPhotoUser;
}

export interface IPhotoPostSingle extends IPhoto {
  downloads: string;
  tags: ITag[];
  tags_preview: ITag[];
  location: ILocation;
}
