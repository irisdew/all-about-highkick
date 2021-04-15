import React from 'react';
import { useDispatch } from 'react-redux';
import { gameSelected, gameNumber } from '../../actions';
import Slider from 'react-slick';
import './carousel.css';

const Photo = ({ id }) => {
  const dispatch = useDispatch();

  const response = 0;

  return (
    <div>
      <img
        alt={`gacha_${id}`}
        src={`/images/game/gacha_${id}.png`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onClick={() => {
          console.log(id);
          // id와 매칭되는 데이터뭉치 API에 GET 요청 후 response 저장
          // dispatch(gameSelected(response));
          dispatch(gameNumber(id));
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

  console.log('data', data);

  return (
    <div
      className="container"
      style={{ padding: '50px', background: '#fff', dispaly: 'flex' }}
    >
      <Slider {...settings}>
        {[...Array(20).keys()].map((i) => {
          return <Photo id={i + 1} />;
        })}
      </Slider>
    </div>
  );
}
