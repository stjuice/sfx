import React from 'react';
import styles from './Home.module.scss';

import Image from '../../components/media/image';

const Home: React.FC = () => {
  const logoSource = 'resources/media/logo/sfx-stjuice_site.png';
  const mainImageSource = 'resources/media/images/alien-body.jpg';

  return (
    <div className={styles.home}>
      <header className={styles.logo}>
        <Image src={logoSource} alt='logo for special effects website' />
      </header>

      <div className={styles.mainImage}>
        <Image src={mainImageSource} alt='home image' />
      </div>
    </div>
  );
}

export default Home;
