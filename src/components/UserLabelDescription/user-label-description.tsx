import Image from 'next/image';
import cn from 'classnames';
import { UserLabelDescriptionProps } from './user-label-description.type';
import styles from './user-label-description.module.scss';

export default function UserLabelDescription({
  size = 'small',
  userName,
  src,
  className,
}: UserLabelDescriptionProps) {
  const sizeCn = cn({
    [styles['user-label-description__image--small']]: size === 'small',
    [styles['user-label-description__image--medium']]: size === 'medium',
  });
  return (
    <div className={cn(styles['user-label-description'], className)}>
      <div className={cn(styles['user-label-description__image'], sizeCn)}>
        <Image
          width={50}
          height={50}
          priority
          src={src}
          alt={userName}
          placeholder="blur"
          blurDataURL="/avatar-placeholder.jpg"
        />
      </div>
      <p className={styles['user-label-description__username']}>{userName}</p>
    </div>
  );
}
