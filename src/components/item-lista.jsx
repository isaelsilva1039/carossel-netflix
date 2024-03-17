import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

const ItemLista = ({ items }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-next"
        style={{ ...arrowStyles, right: '25px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-prev"
        style={{ ...arrowStyles, left: '25px', zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    cursor: 'pointer',
    color: 'black'
  };

    
  return (
    <div className='container'>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ItemLista;
