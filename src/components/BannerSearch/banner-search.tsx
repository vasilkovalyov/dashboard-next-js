'use client';

import { useRouter } from 'next/navigation';
import cn from 'classnames';

import styles from './banner-search.module.scss';
import { BannerSearchProps } from './banner-search.type';
import { Search } from '../Search';
import { Pages } from '@/constnts/routes';

function convertToSearchValue(search: string) {
  return search.replace(/[\s!@#$%^&*()_+=[\]{}|;:'",.<>?\\/\-]+/g, '-');
}

export default function BannerSearch({
  heading,
  description,
  useSearch = true,
}: BannerSearchProps) {
  const router = useRouter();

  function onSubmit(value: string) {
    router.push(`${Pages.PHOTOS}/${convertToSearchValue(value)}`);
  }

  return (
    <div className={styles['banner-search']}>
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
