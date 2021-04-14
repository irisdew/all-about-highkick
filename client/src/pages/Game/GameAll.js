import React from 'react';
import Slider from 'react-slick';
import './GameAll.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div
      className="container"
      style={{ padding: '50px', background: '#fff', dispaly: 'flex' }}
    >
      <Slider {...settings}>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_1.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onClick={() => {
              console.log('1!');
            }}
          />
        </div>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_2.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_3.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_4.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_5.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_6.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ width: '30%' }}>
          <img
            src="/images/game/gacha_7.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Slider>
    </div>
  );
}
