// 'use client';

import Image from 'next/image';
import dayjs from 'dayjs';
import { AiFillLike } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import { BsFillCalendarCheckFill, BsFillImageFill } from 'react-icons/bs';
import { BiSolidDownload } from 'react-icons/bi';

import { RelatedCollections, Tags, UserLabelDescription } from '@/components';
import styles from './page.module.scss';

import UnsplashService from '@/services/unsplash';

const service = new UnsplashService();

async function getData(slug: string) {
  try {
    const response = await service.getPhotoById(slug);
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch data');
  }
}

export default async function PhotoSingle(props: { params: { id: string } }) {
  const { params } = props;
  const {
    urls,
    alt_description,
    tags,
    created_at,
    description,
    location,
    views,
    downloads,
    likes,
    user,
    related_collections,
  } = await getData(params.id);

  return (
    <section className={styles['section-photo-single']}>
      <div className="container">
        <div className={styles['section-photo-single__head']}>
          <UserLabelDescription
            src={user.profile_image.medium}
            size="medium"
            userName={user.name}
          />
        </div>
        <div className={styles['section-photo-single__image']}>
          <Image
            width={500}
            height={500}
            src={urls.regular}
            alt={alt_description}
          />
        </div>
        <div className={styles['section-photo-single__counters']}>
          <div className={styles['section-photo-single__counter-item']}>
            <p className={styles['section-photo-single__counter-heading']}>
              <BsFillImageFill size={20} />
              <span>views</span>
            </p>
            <p className={styles['section-photo-single__counter-value']}>
              {views}
            </p>
          </div>
          <div className={styles['section-photo-single__counter-item']}>
            <p className={styles['section-photo-single__counter-heading']}>
              <BiSolidDownload size={20} />
              <span>downloads</span>
            </p>
            <p className={styles['section-photo-single__counter-value']}>
              {downloads}
            </p>
          </div>
          <div className={styles['section-photo-single__counter-item']}>
            <p className={styles['section-photo-single__counter-heading']}>
              <AiFillLike size={20} />
              <span>likes</span>
            </p>
            <p className={styles['section-photo-single__counter-value']}>
              {likes}
            </p>
          </div>
        </div>
        <p className={styles['section-photo-single__published']}>
          <BsFillCalendarCheckFill size={18} />
          <span>Published on {dayjs(created_at).format('MMMM DD, YYYY')}</span>
        </p>
        {location.name ? (
          <p className={styles['section-photo-single__location']}>
            <IoLocation size={20} />
            <span>{location.name}</span>
          </p>
        ) : null}
        <p className={styles['section-photo-single__description']}>
          {description}
        </p>
        {tags.length ? <Tags tags={tags} /> : null}
        <h3>Related collections</h3>
        {related_collections.results.length ? (
          <RelatedCollections collections={related_collections.results} />
        ) : null}
      </div>
    </section>
  );
}
