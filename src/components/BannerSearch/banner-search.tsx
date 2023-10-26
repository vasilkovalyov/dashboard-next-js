'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

import Image from 'next/image';
import styles from './banner-search.module.scss';
import { BannerSearchProps } from './banner-search.type';
import { Search } from '../Search';
import { Pages } from '@/constnts/routes';

import UnsplashService from '@/services/unsplash';
import { IPhoto } from '@/types/photo';

function convertToSearchValue(search: string) {
  return search.replace(/[\s!@#$%^&*()_+=[\]{}|;:'",.<>?\\/\-]+/g, '-');
}

const service = new UnsplashService();

export default function BannerSearch({
  heading,
  description,
  src,
  useSearch = true,
}: BannerSearchProps) {
  const router = useRouter();
  const [banner, setBanner] = useState<IPhoto | null>(null);

  function onSubmit(value: string) {
    router.push(`${Pages.PHOTOS}/${convertToSearchValue(value)}`);
  }

  async function loadBanner() {
    try {
      const response = await service.getRandomPhoto();
      setBanner(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadBanner();
  }, []);

  return (
    <div className={styles['banner-search']}>
      {banner ? (
        <div className={styles['banner-search__image']}>
          <Image
            src={banner.urls.regular}
            alt={banner.alt_description}
            fill={true}
          />
        </div>
      ) : null}
      <div className={cn(styles['banner-search__container'], 'container')}>
        <h1>{heading}</h1>
        {description ? (
          <p className="banner-search__description">{description}</p>
        ) : null}
        {useSearch ? <Search onSubmit={(value) => onSubmit(value)} /> : null}
      </div>
    </div>
  );
}
