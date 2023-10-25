'use client';

import { useState } from 'react';
import cn from 'classnames';
import { TopicsListProps } from './topics-list.type';
import { Button } from '../Button';
import styles from './topics-list.module.scss';

export default function TopicsList({ topics, onChange }: TopicsListProps) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <ul className={styles['topics-list']}>
      {topics.map((topic) => (
        <li key={topic.id} className={styles['topics-list__item']}>
          <Button
            variant="text"
            size="small"
            onClick={() => {
              onChange && onChange(topic.slug);
              setActiveTopic(topic.slug);
            }}
            className={cn(
              styles['topics-list__link'],
              activeTopic === topic.slug
                ? styles['topics-list__link--active']
                : ''
            )}
          >
            {topic.title}
          </Button>
        </li>
      ))}
    </ul>
  );
}
