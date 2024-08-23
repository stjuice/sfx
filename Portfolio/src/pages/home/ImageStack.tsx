import styles from './Home.module.scss';
import Image from 'components/media/image';

const ImageStack = () => {
  const images = [
    'resources/media/images/stack/1.png',
    'resources/media/images/stack/2.png',
    'resources/media/images/stack/3.png',
  ];

  return (
    <div className={styles.imageStack}>
      {images.map((imageSource, index) => (
        <div key={index} className={`${styles.imageContainer} ${styles[`imageContainer-${index + 1}`]}`}>
          <Image src={imageSource} alt={`image-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
