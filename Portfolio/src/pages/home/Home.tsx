import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to My SFX Makeup Portfolio</h1>
        <p>Explore the world of special effects makeup and discover the art of transformation.</p>
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
