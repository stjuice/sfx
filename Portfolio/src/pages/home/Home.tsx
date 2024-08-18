import React from 'react';
import styles from './Home.module.scss';
import testStyles from './Home-test.module.scss';

import Image from 'components/media/image';
import { GreetingMessage } from 'components/text/greetingMessage';

const Home: React.FC = () => {
  const logoSource = 'resources/media/logo/sfx-stjuice_site.svg';
  const mainImageSource = 'resources/media/images/alien-body.jpg';

  return (
    <div className={testStyles.home}>
      <div className={testStyles.logo}>
        <Image src={logoSource} alt='logo for special effects website' />
      </div>
      <div className={testStyles.mainImage}>
        <Image src={mainImageSource} alt='home image' />
      </div>
      <div className={testStyles.girlImage}>
        <Image src={'resources/media/images/IMG_9108.jpg'} alt='image with girl in horns makeup' />
      </div>
      <div className={testStyles.content}>
        <GreetingMessage />
      </div>
    </div>
  );
}

export default Home;
