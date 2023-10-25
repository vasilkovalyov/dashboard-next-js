import { ITopic } from '@/types/topic';

export type TopicsListProps = {
  topics: TopicItemProps[];
  onChange?: (value: string) => void;
};

export type TopicItemProps = Pick<ITopic, 'id' | 'title' | 'slug'>;
