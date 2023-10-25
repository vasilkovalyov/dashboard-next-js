'use client';

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import styles from './banner-search.module.scss';
import { BannerSearchProps } from './banner-search.type';
import { Search } from '../Search';
import { Pages } from '@/constnts/routes';

export default function BannerSearch({
  heading,
  description,
  src,
  useSearch = true,
}: BannerSearchProps) {
  const router = useRouter();

  function onSubmit(value: string) {
    console.log(value);
    router.push(`${Pages.PHOTOS}/${value}`);
  }

  return (
    <div className={styles['banner-search']}>
      {src ? (
        <Image
          src={src}
          alt={heading}
          fill={true}
          className={styles['banner-search__image']}
        />
      ) : null}
      <div className="container">
        <h1>{heading}</h1>
        {description ? (
          <p className="banner-search__description">{description}</p>
        ) : null}
        {useSearch ? <Search onSubmit={(value) => onSubmit(value)} /> : null}
      </div>
    </div>
  );
}
