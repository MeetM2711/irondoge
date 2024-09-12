import React from 'react'
import TweetBoxSlider from './TweetBoxSlider'
import HeadingBorder from "../assets/images/heading-border.png";
import Heading from "../components/Heading";


function TweetBox() {
    return (
        <section class="section-padding">
            <div class="container">
                <Heading sectionHeading="Our top threads" sectionImage={HeadingBorder}></Heading>
            </div>

            <div className='animation-container mt-4'>

                <TweetBoxSlider />

            </div>
        </section>
    )
}

export default TweetBox