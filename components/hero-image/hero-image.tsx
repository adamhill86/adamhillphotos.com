import Image from 'next/image';

export default function HeroImage(): JSX.Element {
  return (
    <div className='relative h-80'>
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
