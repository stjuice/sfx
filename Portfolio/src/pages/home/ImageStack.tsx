import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import Image from 'components/media/image';

const ImageStack = () => {
  const navigate = useNavigate();
  const images = [
    { src: 'resources/media/images/stack/1.png', link: '/category-light' },
    { src: 'resources/media/images/stack/2.png', link: 'https://example.com/link2' },
    { src: 'resources/media/images/stack/3.png', link: 'https://example.com/link3' },
  ];

  const handleClick = (index: number, link: string) => {
    if (index === 0) {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener noreferrer'); 
    }
  };
  
  return (
    <div className={styles.imageStack}>
      {images.map((image, index) => (
        <div key={index} onClick={() => handleClick(index, image.link)} className={`${styles.imageContainer} ${styles[`imageContainer-${index + 1}`]}`}>
          <Image src={image.src} alt={`image-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
