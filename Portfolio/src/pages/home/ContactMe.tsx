import { Video } from 'components/media/video';
import styles from './Home.module.scss';

import { textKeys as T } from 'components/text'
import TextBlock from 'components/text/textBlock/TextBlock';
import Link from 'components/route/Link';

const ContactMe = () => {
  return (
    <>
      <div className={styles.textContainer}>
        <TextBlock textKeys={[T.CONTACT_ME]} className={styles.header} />
        <div className={styles.subHeaders}>
          <div className={styles.email}>
            <TextBlock textKeys={[T.EMAIL]} className={styles.subHeader} />
            <Link href="mailto:stbluejuice@gmail.com">
              <span style={{ color: '#cb53bb', fontSize: '30px' }}>STBLUEJUICE</span>
              <span style={{ fontSize: '30px' }}>@GMAIL.COM</span>
            </Link>
          </div>
          <div className={styles.insta}>
            <TextBlock textKeys={[T.INSTA]} className={styles.subHeader} />
            <Link href="https://www.instagram.com/stbluejuice">
              <span style={{ fontSize: '30px' }}>@</span>
              <span style={{ color: '#cb53bb', fontSize: '30px' }}>STBLUEJUICE</span>
            </Link>
          </div>
        </div>
      </div >
      <div className={styles.videoContainer}>
        <Video
          src="resources/media/videos/mutant.mp4"
          className={`${styles.video} ${styles.roundedVideo}`}
          controls={false}
          autoPlay={true}
          loop
          muted
        />
        <Video
          src="resources/media/videos/icona.mp4"
          className={`${styles.video} ${styles.recVideo}`}
          controls={false}
          autoPlay={true}
          loop
          muted
        />
      </div>
    </>
  );
}

export default ContactMe;
