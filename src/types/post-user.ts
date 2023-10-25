import { IProfileImage } from './common';

export interface IPostUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  profile_image: IProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email: string | null;
  };
}
