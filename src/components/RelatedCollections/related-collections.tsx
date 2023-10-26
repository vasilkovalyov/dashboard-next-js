import { RelatedPhotoCollection } from '../RelatedPhotoCollection';
import styles from './related-collections.module.scss';
import { RelatedCollectionsType } from './related-collections.type';

export default function RelatedCollections({
  collections,
}: RelatedCollectionsType) {
  return (
    <div className={styles['related-collections']}>
      {collections.map((collection) => (
        <div key={collection.id} className={styles['related-collections__col']}>
          <RelatedPhotoCollection {...collection} />
        </div>
      ))}
    </div>
  );
}
