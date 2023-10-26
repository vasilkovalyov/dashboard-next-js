import { Button } from '../Button';
import { TagsProps } from './tags.type';
import styles from './tags.module.scss';

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={styles['tags']}>
      <ul className={styles['tags__list']}>
        {tags.map((tag) => (
          <li key={tag.title} className={styles['tags__item']}>
            <Button
              variant="outlined"
              size="small"
              disabled
              className={styles['tags__button']}
            >
              {tag.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
