import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import { textKeys as T } from 'components/text'
import TextBlock from 'components/text/textBlock/TextBlock';
import Image from 'components/media/image';

const imagesGroup1 = [
  'resources/media/images/light/0.jpg',
  'resources/media/images/light/1.jpg',
  'resources/media/images/light/2.jpg',
];

const imagesGroup2 = [
  'resources/media/images/light/3.jpg',
  'resources/media/images/light/4.jpg',
  'resources/media/images/light/5.jpg',
];

const CategoryLight = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getImageClass = (group: number) => {
    if (scrollPosition > 100) { // Example threshold, adjust as needed
      return group === 1 ? styles.shrinkUp : styles.shrinkDown;
    }
    return group === 1 ? styles.group1 : styles.group2;
  };

  return (
    <div className={styles.light}>
      <div className={styles.header}>
        <TextBlock textKeys={[T.LIGHT]} className={styles.title} />
        <TextBlock textKeys={[T.LIGHT_DESCRIPTION]} className={styles.description} />
      </div>
      <div className={getImageClass(1)}>
        {imagesGroup1.map((src, index) => (
          <Image
            key={index}
            src={src}
            className={`${styles.image}}`}
            alt={`image example light category ${index}`}
          />
        ))}
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <TextBlock textKeys={[T.LIGHT_FEATURES]} />
          <div className={styles.features}>
            <div className={styles.feature}>
              <TextBlock textKeys={[T.LIGHT_FEATURES_BLOOD, T.SYMBOL_COLON]} className={styles.title} />
              <TextBlock textKeys={[T.LIGHT_FEATURES_BLOOD_DESCRIPTION]} className={styles.description} />
            </div>
            <div className={styles.feature}>
              <TextBlock textKeys={[T.LIGHT_FEATURES_DECORATION, T.SYMBOL_COLON]} className={styles.title} />
              <TextBlock textKeys={[T.LIGHT_FEATURES_DECORATION_DESCRIPTION]} className={styles.description} />
            </div>
            <div className={styles.feature}>
              <TextBlock textKeys={[T.LIGHT_FEATURES_PAINT, T.SYMBOL_COLON]} className={styles.title} />
              <TextBlock textKeys={[T.LIGHT_FEATURES_PAINT_DESCRIPTION]} className={styles.description} />
            </div>
          </div>
        </div>
      </div>
      <div className={getImageClass(2)}>
        {imagesGroup2.map((src, index) => (
          <Image
            key={index + 3}
            src={src}
            className={`${styles.image}`}
            alt={`image example light category ${index + imagesGroup1.length}`}
          />
        ))}
      </div>
    </div >
  );
};

export default CategoryLight;
