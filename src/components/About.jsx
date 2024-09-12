import React from 'react'


import AboutImage from "../assets/images/about-img.png";
import GOTChair from "../assets/images/game-of-thrones-chair.png";  

import Heading from "../components/Heading";

function About() {
    return (
        <section className='section-padding relative'>
            <div className='container'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center w-full">
                    <div className="img-box">
                        <img src={AboutImage} className="mx-auto max-w-72 sm:max-w-sm drop-shadow-2xl relative z-10" alt="" />
                    </div>
                    <div className="content-box space-y-5 relative z-20">
                        <Heading sectionHeading="About us" ></Heading>
                        <div className="text-sm md:text-base text-white font-light !leading-loose tracking-wider space-y-2">
                            <p>Welcome to IronDoge, where being the best isn’t just a goal—it’s our baseline. We create wonders out of thin air, changing the course of crypto history with ideas so fresh, they make mint condition look rusty.</p>
                            <p>Ever seen a meme that made you rich? Stick with us, and you might. We combine the uncombinable, generating concepts the crypto scene has never dreamed of. We're the alchemists turning digital dust into gold.</p>
                            <p>At IronDoge, we don’t just set the bar—we launch it into the stratosphere. Our projects are legendary, blending innovation and hilarity in ways that will leave you both amazed and rolling on the floor laughing.</p>
                            <p>Ready to be a part of the revolution? Get in now and ride the wave with us. IronDoge isn’t just a meme—it’s the future, and you don’t want to miss out on making history with us.</p>
                        </div>
                    </div>
                    <img src={GOTChair} alt="" className='w-56 absolute bottom-5 right-5 animate-pulse' />
                </div>
            </div>
        </section>
    )
}

export default About