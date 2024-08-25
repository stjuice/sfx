import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import { textKeys as T } from 'components/text'
import TextBlock from 'components/text/textBlock/TextBlock';
import Image from 'components/media/image';

type TextKeys = {
  category: string;
  categoryDscr: string;
  features: string;
  featuresBlood: string;
  featuresBloodDscr: string;
  featuresDecoration: string;
  featuresDecorationDscr: string;
  featuresPaint: string;
  featuresPaintDscr: string;
  for: string;
  forList: string;
  forConclusion: string;
  themeEx: string;
  themeExList: string;
}

type TemplateProps = {
  imagesGroup1: string[];
  imagesGroup2: string[];
  textKeys: TextKeys;
  className: string;
}

const LightTemplate = ({ imagesGroup1, imagesGroup2, textKeys, className }: TemplateProps) => {
  const [group2MarginTop, setGroup2MarginTop] = useState('-700px');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const threshold = windowHeight * 0.3;

      if (scrollPosition > threshold) {
        setGroup2MarginTop('0');
      } else {
        setGroup2MarginTop('-700px');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={className}>
      <div className={styles.header}>
        <TextBlock textKeys={[textKeys.category]} className={styles.title} />
        <TextBlock textKeys={[textKeys.categoryDscr]} className={styles.description} />
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
        <TextBlock textKeys={[textKeys.features]} className={styles.sectionHeader} />
        <div className={styles.card}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <TextBlock textKeys={[textKeys.featuresBlood, T.SYMBOL_COLON]} className={styles.title} />
              <TextBlock textKeys={[textKeys.featuresBloodDscr]} className={styles.description} />
            </div>
            <div className={styles.feature}>
              <TextBlock textKeys={[textKeys.featuresDecoration, T.SYMBOL_COLON]} className={styles.title} />
              <TextBlock textKeys={[textKeys.featuresDecorationDscr]} className={styles.description} />
            </div>
            <div className={styles.feature}>
              <TextBlock textKeys={[textKeys.featuresPaint, T.SYMBOL_COLON]} className={styles.title} />
              <TextBlock textKeys={[textKeys.featuresPaintDscr]} className={styles.description} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerFor}>
        <TextBlock textKeys={[textKeys.for]} className={styles.sectionHeader} />
        <div className={`${styles.card} ${styles.cardFor}`}>
          <div className={styles.for}>
            <TextBlock textKeys={[textKeys.forList]} className={styles.list} />
          </div>
          <div className={styles.for}>
            <TextBlock textKeys={[textKeys.forConclusion]} className={styles.conclusion} />
          </div>
        </div>
      </div>
      <div className={styles.examples}>
        <TextBlock textKeys={[textKeys.themeEx]} className={styles.sectionHeader} />
        <div className={styles.examplesList}>
          <TextBlock textKeys={[textKeys.themeExList]} />
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

export default LightTemplate;
