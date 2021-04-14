import React from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import './carousel.css';

const Photo = (key) => {
  const dispatch = useDispatch();

  return (
    <div style={{ width: '30%' }}>
      <img
        alt={`gacha_${key}`}
        src={`/images/game/gacha_${key}.png`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onClick={() => {
          console.log(key);
          // key와 매칭되는 데이터뭉치 API에 GET 요청 후 response 저장
          dispatch(gameSelected(response));
        }}
      />
    </div>
  );
};

export default function Carousel({ data }) {
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
    ],
  };
  return (
    <div
      className="container"
      style={{ padding: '50px', background: '#fff', dispaly: 'flex' }}
    >
      <Slider {...settings}>
        {data.map((d) => {
          return <Photo number={d.number} />;
        })}
      </Slider>
    </div>
  );
}
