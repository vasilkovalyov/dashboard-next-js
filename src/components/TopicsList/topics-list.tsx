import { TopicsListProps } from './topics-list.type';
import { Button } from '../Button';
import styles from './topics-list.module.scss';

export default function TopicsList({ topics, onChange }: TopicsListProps) {
  return (
    <ul className={styles['topics-list']}>
      {topics.map((topic) => (
        <li key={topic.id} className={styles['topics-list__item']}>
          <Button
            variant="text"
            size="small"
            fullwidth={true}
            onClick={() => onChange && onChange(topic.slug)}
            className={styles['topics-list__link']}
          >
            {topic.title}
          </Button>
        </li>
      ))}
    </ul>
  );
}
