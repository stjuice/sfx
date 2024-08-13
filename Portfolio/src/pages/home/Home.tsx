import React from 'react';
import styles from './Home.module.scss';

import Image from 'components/media/image';
import Text from 'components/text';
import { GreetingMessage } from 'components/text/greetingMessage';

const Home: React.FC = () => {
  const logoSource = 'resources/media/logo/sfx-stjuice_site.png';
  const mainImageSource = 'resources/media/images/alien-body.jpg';

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logoSource} alt='logo for special effects website' />
        </div>
        <div className={styles.mainImage}>
          <Image src={mainImageSource} alt='home image' />
        </div>
      </header>
      
      <GreetingMessage />
    </div>
  );
}

export default Home;
