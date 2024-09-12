import React from 'react'

import HeadingBorder from "../assets/images/heading-border.png";
import Slick from '../components/Slick';
import Heading from "../components/Heading";

function News() {
    return (
        <section className='section-padding  background-image hero-blur relative overflow-hidden mt-10 md:mt-20'>
            <div className="bg-overlay w-full h-full bg-black bg-opacity-20 absolute top-0 left-0  "></div>
            <div className='container relative'>
                <Heading sectionHeading="IronDoge in the News" sectionImage={HeadingBorder}></Heading>
            </div>
            <div className="animation-container mt-4">
                <Slick />
            </div>
        </section>
    )
}

export default News