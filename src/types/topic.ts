import { IPreviewPhoto } from './common';

export interface ITopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: string | null;
  only_submissions_after: string;
  visibility: string;
  featured: boolean;
  total_photos: number;
  current_user_contributions: [];
  total_current_user_submissions: null;
  preview_photos: IPreviewPhoto[];
}
