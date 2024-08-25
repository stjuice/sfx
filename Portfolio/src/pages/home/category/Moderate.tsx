import styles from './Category.module.scss';
import { textKeys as T } from 'components/text'
import LightTemplate from './LightTemplate';

const imagesGroup1 = [
  'resources/media/images/moderate/0.jpg',
  'resources/media/images/moderate/1.jpg',
  'resources/media/images/moderate/2.jpg',
];

const imagesGroup2 = [
  'resources/media/images/moderate/3.jpg',
  'resources/media/images/moderate/4.jpg',
  'resources/media/images/moderate/5.jpg',
];

const CategoryModerate = () => {
  const moderateKeys = {
    category: T.MODERATE,
    categoryDscr: T.MODERATE_DESCRIPTION,
    features: T.MODERATE_FEATURES,
    featuresBlood: T.MODERATE_FEATURES_BLOOD,
    featuresBloodDscr: T.MODERATE_FEATURES_BLOOD_DESCRIPTION,
    featuresDecoration: T.MODERATE_FEATURES_DECORATION,
    featuresDecorationDscr: T.MODERATE_FEATURES_DECORATION_DESCRIPTION,
    featuresPaint: T.MODERATE_FEATURES_PAINT,
    featuresPaintDscr: T.MODERATE_FEATURES_PAINT_DESCRIPTION,
    for: T.MODERATE_FOR,
    forList: T.MODERATE_FOR_LIST,
    forConclusion: T.MODERATE_FOR_CONCLUSION,
    themeEx: T.MODERATE_THEME_EXAMPLES,
    themeExList: T.MODERATE_THEME_EXAMPLES_LIST,
  };

  return (
    <LightTemplate imagesGroup1={imagesGroup1} imagesGroup2={imagesGroup2} textKeys={moderateKeys} className={styles.moderate} />
  );
};

export default CategoryModerate;
