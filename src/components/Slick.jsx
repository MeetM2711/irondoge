import React from 'react';
import Slider from 'react-slick';
import Card from './card.jsx';
import '../assets/css/App.css'

import centralImg from '../assets/images/patners/central.png';
import benzingaImg from '../assets/images/patners/benzinga.png';
import businessImg from '../assets/images/patners/bussiness.png';
import tachbullionImg from '../assets/images/patners/tachbullion.png';
import yahooImg from '../assets/images/patners/yahoo.png';
import streetinsideImg from '../assets/images/patners/streetinside.png';
import morningstarImg from '../assets/images/patners/morningstar.png';
import marketWatchImg from '../assets/images/patners/marketWatch.png';

const Slick = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slidesData = [
    {
      text: 'Innovative Immersive Play-To-Earn Games and NFT trading platform.',
      imgSrc: centralImg,
      altText: 'Central',
      link: '#',
    },
    {
      text: 'IronDoge Unveils Game-Changing GameFi Innovations, Redefining the Future of Gaming and Finance!',
      imgSrc: benzingaImg,
      altText: 'Benzinga',
      link: '#',
    },
    {
      text: 'Unmatchable GameFi & Play To Earn Experience',
      imgSrc: businessImg,
      altText: 'Business',
      link: '#',
    },
    {
      text: 'Featuring our immersive play-to-earn games and NFT trading platform',
      imgSrc: tachbullionImg,
      altText: 'TachBullion',
      link: '#',
    },
    {
      text: 'New era of Play - To - Earn and NFT Trading Platform',
      imgSrc: yahooImg,
      altText: 'Yahoo',
      link: '#',
    },
    {
      text: 'IronDoge: A breakthrough in the GameFi industry.',
      imgSrc: streetinsideImg,
      altText: 'StreetInside',
      link: '#',
    },
    {
      text: 'A Unique approach to Play-To-Earn Games and NFT trading platforms.',
      imgSrc: morningstarImg,
      altText: 'MorningStar',
      link: '#',
    },
    {
      text: 'IronDoge: A unique approach to GameFi.',
      imgSrc: marketWatchImg,
      altText: 'MarketWatch',
      link: '#',
    },
  ];

  return (
    <div className="slide">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Card
            key={index}
            text={slide.text}
            imgSrc={slide.imgSrc}
            altText={slide.altText}
            link={slide.link}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
