import React from 'react';
import Slider from 'react-slick';

import GotIcon3 from "../assets/images/got-icon-3.png";
import RoadmapFloating from "../assets/images/roadmap-floating.png";
import OverThreads from "../assets/images/overThreads.jpg";
import WhiteList from '../assets/images/whitelist.png';
import DogeImage from "../assets/images/dogeImage.png";

const TweetBoxSlider = () => {
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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slidesData = [
        {
            href: '',
            imgSrc: OverThreads,
            title: 'IronDoge Takes the Spotlight!',
        },
        {
            href: '',
            imgSrc: RoadmapFloating,
            title: 'IronDoge Takes the Spotlight!',
        },
        {
            href: '',
            imgSrc: WhiteList,
            title: 'IronDoge Takes the Spotlight!',
        },
        {
            href: '',
            imgSrc: DogeImage,
            title: 'IronDoge Takes the Spotlight!',
        },
        {
            href: '',
            imgSrc: GotIcon3,
            title: 'IronDoge Takes the Spotlight!',
        },
    ];

    return (
        <div className="slide">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div  key={index} className='px-3'>
                        <div className='border-2 border-secondary p-2 rounded-xl md:rounded-2xl'>                       
                             <a
                           
                            href={slide.href}
                            className="tweet-box bg-secondary-dark max-md:max-w-80  w-full md:w-1/2   text-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="h-72 rounded-xl md:rounded-2xl overflow-hidden">
                                <img
                                    src={slide.imgSrc}
                                    className="w-full h-full object-cover object-center"
                                    alt=""
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mt-4">{slide.title}</h3>
                        </a>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TweetBoxSlider;
