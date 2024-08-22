import React from 'react';
import styles from './Home.module.scss';

const ImageSlider: React.FC = () => {
  const images = [
    'resources/media/images/slide/1.jpg',
    'resources/media/images/slide/2.jpg',
    'resources/media/images/slide/3.jpg',
    'resources/media/images/slide/4.jpg',
    'resources/media/images/slide/5.jpg',
    'resources/media/images/slide/6.jpg',
    'resources/media/images/slide/7.jpg',
    'resources/media/images/slide/8.jpg',
    'resources/media/images/slide/9.jpg',
    'resources/media/images/slide/10.jpg',
    'resources/media/images/slide/11.jpg',
    'resources/media/images/slide/12.jpg',
    'resources/media/images/slide/13.jpg',
    'resources/media/images/slide/14.jpg',
    'resources/media/images/slide/15.jpg',
  ];
  
  

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {images.map((src, index) => (
          <div className={styles.sliderItem} key={index}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
        {images.map((src, index) => (
          <div className={styles.sliderItem} key={`duplicate-${index}`}>
            <img src={src} alt={`Slide Duplicate ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

function importAll(r: ReturnType<NodeRequire['context']>) {
  return r.keys().map(r) as string[];
}