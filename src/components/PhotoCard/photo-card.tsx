import Link from 'next/link';
import Image from 'next/image';
import { AiFillLike } from 'react-icons/ai';

import styles from './photo-card.module.scss';
import { PhotoCardProps } from './photo-card.type';
import { UserLabelDescription } from '../UserLabelDescription';

export default function PhotoCard({
  path,
  urls,
  alt_description,
  likes,
  user,
}: PhotoCardProps) {
  const { profile_image, name } = user;
  return (
    <div className={styles['photo-card']}>
      {path ? (
        <Link href={path} className={styles['photo-card__link']}></Link>
      ) : null}
      <div className={styles['photo-card__image']}>
        <Image
          src={urls.regular}
          width={500}
          height={500}
          priority
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          alt={alt_description}
          sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
        />
      </div>
      <div className={styles['photo-card__body']}>
        <div className={styles['photo-card__bottom']}>
          <UserLabelDescription src={profile_image.medium} userName={name} />
          {likes ? (
            <div className={styles['photo-card__like']}>
              <AiFillLike className={styles['photo-card__like-icon']} />
              <p className={styles['photo-card__like-number']}>{likes}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
