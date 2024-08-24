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
  const [group2MarginTop, setGroup2MarginTop] = useState('-700px');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const threshold = windowHeight * 0.3;

      if (scrollPosition > threshold) {
        setGroup2MarginTop('0');
      } else {
        setGroup2MarginTop(`-${700 - Math.min(scrollPosition, 700)}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.light}>
      <div className={styles.header}>
        <TextBlock textKeys={[T.LIGHT]} className={styles.title} />
        <TextBlock textKeys={[T.LIGHT_DESCRIPTION]} className={styles.description} />
      </div>
      <div className={styles.group1}>
        {imagesGroup1.map((src, index) => (
          <Image
            key={index}
            src={src}
            className={`${styles.image}}`}
            alt={`image example light category ${index}`}
          />
        ))}
      </div>
      <div className={styles.containerFeatures}>
        <div className={styles.card}>
          <TextBlock textKeys={[T.LIGHT_FEATURES]} className={styles.sectionHeader} />
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
      <div className={styles.containerFor}>
        <div className={`${styles.card} ${styles.cardFor}`}>
          <TextBlock textKeys={[T.LIGHT_FOR]} className={styles.sectionHeader} />
          <div className={styles.for}>
            <TextBlock textKeys={[T.LIGHT_FOR_LIST]} className={styles.list} />
          </div>
          <div className={styles.for}>
            <TextBlock textKeys={[T.LIGHT_FOR_CONCLUSION]} className={styles.conclusion} />
          </div>
        </div>
      </div>
      <div className={styles.examples}>
        <TextBlock textKeys={[T.LIGHT_THEME_EXAMPLES]} className={styles.sectionHeader} />
        <div className={styles.examplesList}>
          <TextBlock textKeys={[T.LIGHT_THEME_EXAMPLES_LIST]} />
        </div>
      </div>
      <div className={styles.group2} style={{ marginTop: group2MarginTop }}>
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
