import React from 'react'

import Ball4 from "../assets/images/ball-4.svg";
import HeadingBorder from "../assets/images/heading-border.png";

import Heading from "../components/Heading";
import StaticCard from "../components/StaticCard";

function Static() {
  return (
    <section className='section-padding relative !pt-0'>
            <div className='container relative z-10'>
                <Heading sectionHeading="Statistics" sectionImage={HeadingBorder}></Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">
                    <StaticCard title="Total Supply" value="99,999,999,999" />
                    <StaticCard title="Phase" subtitle="2" value="80% Extra Tokens" />
                    <StaticCard
                        title="Now at"
                        subtitle="$0.00011"
                        value={
                            <>
                                <span className="text-base lg:text-xl text-white tracking-widest font-GOT">Listing</span> $0.015
                            </>
                        }
                    />
                    <StaticCard title="Gains at Listing" value="15000%" />
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <img src={Ball4} className="w-52 opacity-40" alt="" />
            </div>
        </section>
  )
}

export default Static