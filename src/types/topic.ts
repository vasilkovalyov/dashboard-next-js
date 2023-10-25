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
  preview_photos: ITopicPreviewPhoto[];
}

interface ITopicPreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}
