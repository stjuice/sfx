import React from 'react';
import styles from './Category.module.scss';
import { textKeys as T } from 'components/text'
import TextBlock from 'components/text/textBlock/TextBlock';
import Image from 'components/media/image';

const CategoryLight = () => {
  const images = [
    'resources/media/images/light/0.jpg',
    'resources/media/images/light/1.jpg',
    'resources/media/images/light/2.jpg',
    'resources/media/images/light/3.jpg',
    'resources/media/images/light/4.jpg',
    'resources/media/images/light/5.jpg',
  ];

  return (
    <div className={styles.light}>
      <div className={styles.header}>
        <TextBlock textKeys={[T.LIGHT]} className={styles.title} />
        <TextBlock textKeys={[T.LIGHT_DESCRIPTION]} className={styles.description} />
      </div>
      <div className={styles.images}>
        {images.map((image) => (
          <Image src={image} alt='imgage axample light category' />
        ))}
      </div>
    </div>
  );
};

export default CategoryLight;
