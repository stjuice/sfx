import React from 'react';
import styles from './Home.module.scss';

import Image from '../../components/media/image';

const Home: React.FC = () => {
  const logoSource = 'resources/media/logo/sfx-stjuice_site.png';
  return (
    <div className={styles.home}>
      <header className={styles.logo}>
        <Image src={logoSource} alt='logo for special effects website' />
      </header>

      <section className={styles.showcase}>
        <h2>Featured Work</h2>
        <div className={styles.carousel}>
          {/* ImageCarousel component */}
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Categories</h2>
        <div className={styles.imageGrid}>
          {/* ImageGrid component with links to Light, Moderate, and Epic categories */}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Contact me for custom SFX makeup requests!</p>
      </footer>
    </div>
  );
}

export default Home;
