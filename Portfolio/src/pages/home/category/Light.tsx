import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import { textKeys as T } from 'components/text'
import TextBlock from 'components/text/textBlock/TextBlock';
import Image from 'components/media/image';
import LightTemplate from './LightTemplate';

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
  const lightKeys = {
    category: T.LIGHT,
    categoryDscr: T.LIGHT_DESCRIPTION,
    features: T.LIGHT_FEATURES,
    featuresBlood: T.LIGHT_FEATURES_BLOOD,
    featuresBloodDscr: T.LIGHT_FEATURES_BLOOD_DESCRIPTION,
    featuresDecoration: T.LIGHT_FEATURES_DECORATION,
    featuresDecorationDscr: T.LIGHT_FEATURES_DECORATION_DESCRIPTION,
    featuresPaint: T.LIGHT_FEATURES_PAINT,
    featuresPaintDscr: T.LIGHT_FEATURES_PAINT_DESCRIPTION,
    for: T.LIGHT_FOR,
    forList: T.LIGHT_FOR_LIST,
    forConclusion: T.LIGHT_FOR_CONCLUSION,
    themeEx: T.LIGHT_THEME_EXAMPLES,
    themeExList: T.LIGHT_THEME_EXAMPLES_LIST,
  };

  return (
    <LightTemplate imagesGroup1={imagesGroup1} imagesGroup2={imagesGroup2} textKeys={lightKeys} className={styles.light} />
  );
};

export default CategoryLight;
