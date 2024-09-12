import React from 'react'


import SoldImage from "../assets/images/sold-out.png";
import HeadingBorder from "../assets/images/heading-border.png";
import LogoImage from "../assets/images/download.png";

import Heading from "../components/Heading";
import Button from '../components/Button';

function Sale() {
  return (
    <section className='section-padding'>
                <div className='container'>
                    <Heading sectionHeading="Private Sale" sectionImage={HeadingBorder}></Heading>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start w-full mt-6 md:mt-10'>
                        <div className="black-paper-card py-4 px-5 relative overflow-hidden">
                            <div className="relative bg-secondary-dark text-center z-10">
                                <div className="w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <img src={SoldImage} className="max-w-72 md:max-w-96 animate-pulse" alt="" />
                                </div>
                                <div className="flex flex-wrap max-sm:flex-col gap-3 items-center w-full justify-between mb-6 md:mb-10">
                                    <div className="flex gap-3 items-center w-full max-sm:justify-center">
                                        <div className="logo-box">
                                            <img src={LogoImage} className="w-16" alt="" />
                                        </div>
                                        <h3 className="text-3xl text-white font-trajan">Phase 1</h3>
                                    </div>
                                    <div className="py-1.5 px-5 mx-auto flex-shrink-0 inline-block bg-primary text-sm text-white font-semibold border-b-2 border-secondary rounded-lg">100% Extra Tokens</div>
                                </div>
                                <div className="progress-bar relative w-full h-6 rounded-md overflow-hidden mt-6">
                                    <div className="progress min-w-6 w-[var(--progress)] h-full text-dark text-center font-semibold absolute top-0 left-0">100%</div>
                                </div>
                                <div className="w-full flex items-center justify-between px-3 mt-1">
                                    <div className="text-sm text-white-light">0 IDOGE</div>
                                    <div className="text-sm text-white-light">200M IDOGE</div>
                                </div>
                                <div className="space-y-2 mt-6 sm:mt-10 mb-6">
                                    <div className="flex items-center justify-between gap-3">
                                        <h5 className="text-sm md:text-base text-white font-trajan">Irondoge Price</h5>
                                        <h5 className="text-sm md:text-base text-white-light font-trajan">$0.0002</h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                        <h5 className="text-sm md:text-base text-white font-trajan">Irondoge Sale</h5>
                                        <h5 className="text-sm md:text-base text-white-light font-trajan">200M</h5>
                                    </div>
                                </div>
                                <Button buttonName="Buy Now" disabled={true}></Button>
                            </div>
                        </div>
                        <div className="black-paper-card py-4 px-5 relative overflow-hidden">
                            <div className="relative bg-secondary-dark text-center z-10">

                                <div className="flex flex-wrap max-sm:flex-col gap-3 items-center w-full justify-between mb-6 md:mb-10">
                                    <div className="flex gap-3 items-center w-full max-sm:justify-center">
                                        <div className="logo-box">
                                            <img src={LogoImage} className="w-16" alt="" />
                                        </div>
                                        <h3 className="text-3xl text-white font-trajan">Phase 2</h3>
                                    </div>
                                    <div className="py-1.5 px-5 mx-auto flex-shrink-0 inline-block bg-primary text-sm text-white font-semibold border-b-2 border-secondary rounded-lg">80% Extra Tokens</div>
                                </div>
                                <div className="progress-bar relative w-full h-6 rounded-md overflow-hidden mt-6">
                                    <div className="progress min-w-6 w-[var(--progress)] h-full text-dark text-center font-semibold absolute top-0 left-0">100%</div>
                                </div>
                                <div className="w-full flex items-center justify-between px-3 mt-1">
                                    <div className="text-sm text-white-light">0 IDOGE</div>
                                    <div className="text-sm text-white-light">450M IDOGE</div>
                                </div>
                                <div className="space-y-2 mt-6 sm:mt-10 mb-6">
                                    <div className="flex items-center justify-between gap-3">
                                        <h5 className="text-sm md:text-base text-white font-trajan">Irondoge Price</h5>
                                        <h5 className="text-sm md:text-base text-white-light font-trajan">$0.0002</h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                        <h5 className="text-sm md:text-base text-white font-trajan">Irondoge Sale</h5>
                                        <h5 className="text-sm md:text-base text-white-light font-trajan">450M</h5>
                                    </div>
                                </div>
                                <Button buttonName="Buy Now" disabled={false}></Button>
                            </div>
                        </div>
                        <div className="black-paper-card py-4 px-5 relative overflow-hidden">
                            <div className="relative bg-secondary-dark text-center z-10">

                                <div className="flex flex-wrap max-sm:flex-col gap-4 items-center w-full justify-between mb-6 md:mb-10">
                                    <div className="flex gap-3 items-center w-full max-sm:justify-center">
                                        <div className="logo-box">
                                            <img src={LogoImage} className="w-16" alt="" />
                                        </div>
                                        <h3 className="text-3xl text-white font-trajan">Phase 3</h3>
                                    </div>
                                    <div className="py-1.5 px-5 mx-auto flex-shrink-0 inline-block bg-primary text-sm text-white font-semibold border-b-2 border-secondary rounded-lg">50% Extra Tokens</div>
                                </div>
                                <div className="timer-box px-3 py-6 text-xl text-white">Coming Soon</div>
                                <div className="space-y-2 mt-5 mb-6">
                                    <div className="flex items-center justify-between gap-3">
                                        <h5 className="text-sm md:text-base text-white font-trajan">Irondoge Price</h5>
                                        <h5 className="text-sm md:text-base text-white-light font-trajan">$0.0002</h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                        <h5 className="text-sm md:text-base text-white font-trajan">Irondoge Sale</h5>
                                        <h5 className="text-sm md:text-base text-white-light font-trajan">450M</h5>
                                    </div>
                                </div>
                                <Button buttonName="Reserve your spot" disabled={true}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Sale