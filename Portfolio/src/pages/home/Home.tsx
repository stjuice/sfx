import React from 'react';
import styles from './Home.module.scss';

import Image from 'components/media/image';
import { GreetingMessage } from 'components/text/greetingMessage';
import Card from './Card';
import { textKeys as T } from 'components/text'
import ImageSlider from './ImageSlider';
import TextBlock from 'components/text/textBlock/TextBlock';
import ImageStack from './ImageStack';
import ContactMe from './ContactMe';

const Home: React.FC = () => {
  const logoSource = 'resources/media/logo/sfx-stjuice_site.svg';
  const mainImageSource = 'resources/media/images/alien-body.jpg';

  return (
    <div className={styles.home}>
      <div className={styles.logo}>
        <Image src={logoSource} alt='logo for special effects website' />
      </div>
      <div className={styles.mainImage}>
        <Image src={mainImageSource} alt='home image' />
      </div>
      <div className={styles.girlImage}>
        <Image src={'resources/media/images/IMG_9108.jpg'} alt='image with girl in horns makeup' />
      </div>
      <div className={styles.content}>
        <GreetingMessage />
      </div>
      <div className={styles.backgroundSection}>
        <div className={styles.cardsContainer}>
          <Card titleKey={T.PERSONALIZED} contentKeys={T.PERSONALIZED_DESCRIPTION} />
          <Card titleKey={T.PROFESSIONAL} contentKeys={T.PROFESSIONAL_DESCRIPTION} />
          <Card titleKey={T.QUALITY} contentKeys={T.QUALITY_DESCRIPTION} />
          <Card titleKey={T.UNIQUE} contentKeys={T.UNIQUE_DESCRIPTION} />
        </div>
      </div>
      <div className={styles.explenation}>
        <TextBlock textKeys={[T.SFXEXPLENAION]} className={styles.header} />
        <TextBlock textKeys={[T.SFXEXPLENAION_DESCRIPTION]} className={styles.description} />
      </div>
      <div className={styles.examples}>
        <ImageSlider />
      </div>
      <div className={styles.catText}>
        <TextBlock textKeys={[T.CATEGORIES]} className={styles.header} />
        <TextBlock textKeys={[T.CATEGORIES_EFFECTS]} className={styles.description} />
        <TextBlock textKeys={[T.CATEGORIES_DESCRIPTION]} className={styles.description} />
      </div>
      <div className={styles.catImages}>
        <ImageStack />
      </div>
      <div className={styles.contactMe}>
        <ContactMe />
      </div>
    </div >
  );
}

export default Home;
