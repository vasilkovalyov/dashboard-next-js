import { IUrls } from './common';
import { IPostUser } from './post-user';

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
  user: IPostUser;
}

interface ISponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: IPostUser;
}
