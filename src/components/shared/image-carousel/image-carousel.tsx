import React, { useState, useEffect } from 'react';
import './styles.css'

interface IProps {
    images: Array<string>;
    interval?: number;
}

const ImageCarousel = ({ images, interval = 3000 }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const timer = setInterval(() => setCurrentIndex(nextIndex), interval);

    return () => clearInterval(timer); // Clean up on component unmount
  }, [currentIndex, images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex justify-center carousel-container">
      <div
        className="flex transition-transform duration-500 ease-in-out carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel
