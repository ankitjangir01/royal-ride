import React from 'react'
import ImageCarousel from '../shared/image-carousel/image-carousel';
import hero1 from './../../assets/hero/hero1.webp';
import hero2 from './../../assets/hero/hero2.webp';
import hero3 from './../../assets/hero/hero3.webp';

const HeroImageCarousel = () => {
  const images = [hero1, hero2, hero3];


  return (
    <div className='h-screen overflow-hidden'>
      <ImageCarousel images={images} />
    </div>
  )
}

export default HeroImageCarousel