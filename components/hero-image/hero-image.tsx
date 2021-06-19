import Image from 'next/image';
import heroImage from 'public/images/IMG_9336-8.jpg';

export default function HeroImage(): JSX.Element {
  return (
    <div className='relative h-80'>
      <Image
        alt='Mountain sunset'
        layout='fill'
        objectFit='cover'
        objectPosition='50% 35%'
        placeholder='blur'
        priority={true}
        src={heroImage} />
    </div>
  );
}
