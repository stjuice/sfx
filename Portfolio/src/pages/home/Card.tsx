import React from 'react';
import TextBlock from 'components/text/textBlock/TextBlock';
import styles from './Home.module.scss';

type CardProps = {
  titleKey: string;
  contentKeys: string;
};

const Card = ({ titleKey, contentKeys }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <TextBlock textKeys={[titleKey]} />
      </h3>
      <div className={styles.cardContent}>
        <TextBlock textKeys={[contentKeys]} />
      </div>
    </div>
  );
};

export default Card;
