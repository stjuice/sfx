import React from 'react';
import styles from './Home.module.scss';

import Image from 'components/media/image';
import { GreetingMessage } from 'components/text/greetingMessage';
import Card from './Card';
import { textKeys as T } from 'components/text'

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
        <Card titleKey={T.PERSONALIZED} contentKeys={T.PERSONALIZED_DESCRIPTION} />
      </div>
    </div>
  );
}

export default Home;
