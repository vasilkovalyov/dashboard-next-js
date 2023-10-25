import { TopicsListProps } from './topics-list.type';
import { Button } from '../Button';
import styles from './topics-list.module.scss';

export default function TopicsList({ topics, onChange }: TopicsListProps) {
  return (
    <ul className={styles['topics-list']}>
      {topics.map((topic) => (
        <li key={topic.id} className={styles['topics-list__item']}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => onChange && onChange(topic.slug)}
          >
            {topic.title}
          </Button>
        </li>
      ))}
    </ul>
  );
}
