import React from 'react'
import ImageCarousel from '../shared/image-carousel/image-carousel';
import hero1 from './../../assets/hero/hero1.webp';
import hero2 from './../../assets/hero/hero2.webp';
import hero3 from './../../assets/hero/hero3.webp';
import hero4 from './../../assets/hero/hero4.webp';
import hero5 from './../../assets/hero/hero5.webp';
import hero6 from './../../assets/hero/hero6.webp';

const HeroImageCarousel = () => {
  const images = [hero1, hero4, hero5, hero6, hero2, hero3];


  return (
    <div className='h-screen overflow-hidden'>
      <ImageCarousel images={images} />
    </div>
  )
}

export default HeroImageCarousel