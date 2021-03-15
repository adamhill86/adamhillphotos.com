import Image from 'next/image';

import styles from './hero-image.module.scss';

export default function HeroImage(): JSX.Element {
  return (
    <div className={styles.heroImage}>
      <Image
        alt='Mountain sunset'
        layout='fill'
        objectFit='cover'
        objectPosition='50% 35%'
        priority={true}
        src='/images/IMG_9336-8.jpg' />
    </div>
  );
}
