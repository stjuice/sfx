import React from 'react';
import styles from './Category.module.scss';
import { textKeys as T } from 'components/text'
import TextBlock from 'components/text/textBlock/TextBlock';

const CategoryLight = () => {
  return (
    <div className={styles.light}>
      <div className={styles.header}>
        <TextBlock textKeys={[T.LIGHT]} className={styles.title} />
      </div>
      <p>This is the Category Light page.</p>
    </div>
  );
};

export default CategoryLight;
