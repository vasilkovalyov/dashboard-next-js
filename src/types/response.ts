export type PostsWithPaginationInfo<T> = {
  total: number;
  total_pages: number;
  results: T[];
};
