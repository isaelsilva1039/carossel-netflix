import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriaLista from './categoriaLista';

const NetflixCarousel = ({ items }) => {
  const sliderRef = useRef();

  return (
    <div className="netflix-carousel-container" style={{ position: 'relative' }}>
        <CategoriaLista  items={items} /> 
    </div>
  );
};

export default NetflixCarousel;
