import React, { useState, useEffect } from 'react'

import HeroBgBanner from "../assets/images/hero-banner-bg.webm";
import HeroBanner from "../assets/images/hero-banner.webm";
import HeroBannerMobile from "../assets/images/hero-banner-mobile.webm";
import TronImage from "../assets/images/tron.png";
import LogoImage from "../assets/images/download.png";

import Button from '../components/Button';


function Hero() {
    
    const [hasModalOpened, setHasModalOpened] = useState(false);

    const openModal = (index) => {
        
        
        document.body.style.backgroundColor = '#333';
        document.body.classList.add('modal-open');
    };
    useEffect(() => {
        if (!hasModalOpened) {
            openModal(0);
            setHasModalOpened(true);
        }
    }, [hasModalOpened]);

    return (
        <section className='hero-section relative hero-blur z-10'>
            <div className='container h-full'>
                <div className="hero-bg w-full h-full absolute top-0 left-0 z-10">
                    <div className="bg-overlay w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 z-30 mix-blend-hard-light"></div>
                    <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover object-center"

                    >
                        <source src={HeroBgBanner} type="video/webm" />
                    </video>
                    <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="max-md:hidden w-full h-full object-cover object-center absolute bottom-0 left-0 z-10 opacity-80 mix-blend-normal"
                    >
                        <source src={HeroBanner} type="video/webm" />
                    </video>
                    <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="md:hidden w-full h-full object-cover object-center absolute bottom-0 left-0 z-10 opacity-80 mix-blend-normal"
                    >
                        <source src={HeroBannerMobile} type="video/webm" />
                    </video>
                </div>

                <div className="md:min-h-screen h-full flex flex-col items-center justify-center relative z-10 pt-40 pb-20 md:py-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                        <div className="content-box space-y-5 md:text-left max-md:text-center">
                            <h1 className="text-2xl  sm:text-3xl md:text-5xl !leading-normal tracking-[8px]">Iron Doge</h1>
                            <h4 className="text-xl md:text-2xl text-white mb-2 font-trajan font-bold tracking-[6px]">The King of Memes</h4>
                            <h2 className="text-2xl md:text-4xl text-white mb-2 font-trajan gameoffire font-bold tracking-[6px]">Game of Bones Begins</h2>
                            <div className="text-xs md:text-sm text-white-light leading-normal">
                                <p>Reserve your spot and join the council of riches in our very limited phase II for extremely profitable 80% extra tokens.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 md:gap-3 max-md:justify-center">
                                <Button buttonName="Private Sale" onClick={() => openModal()} />
                                <Button buttonName="Buy Now" />
                            </div>
                        </div>

                        <div className="img-box">
                            <div className="w-full max-w-lg max-md:mx-auto md:ml-auto mr-0">
                                <div className="buy-sell-box black-paper-card relative overflow-hidden z-10 px-2.5 py-0.5">
                                    <div className="relative p-4 md:p-8 z-20 card-gradiant-bg rounded-[20px]">
                                        <h2 className="text-lg md:text-xl text-white text-center tracking-wider mb-2">Buy IronDoge</h2>
                                        <div className="text-base text-white-light text-center mb-3 md:mb-5">
                                            <p>Phase I sold out phase II is live now with 80% extra tokens</p>
                                        </div>
                                        <form>
                                            <div className="space-y-2 md:space-y-4 ">
                                                <div className="token-box px-3 py-2 md:p-5 rounded-lg md:rounded-2xl flex items-start justify-between gap-3 bg-secondary-dark bg-opacity-80 shadow-inner">
                                                    <div className="token-input w-1/2 md:w-auto">
                                                        <div className="form-group">
                                                            <label for="from" className="text-xs text-white font-medium block mb-1">From</label>
                                                            <input type="text" name="" id="from" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" placeholder="0.00" className="max-w-full w-full bg-transparent border-0 p-0 text-base md:text-3xl placeholder:text-white-light outline-none focus:outline-none focus:ring-0 -tracking-wider" value="" fdprocessedid="3uta0o" />
                                                        </div>
                                                        <div className="token-label text-sm font-medium tracking-widest maticBalance">0.00</div>
                                                    </div>
                                                    <div className="token-balance">
                                                        <div className="text-sm text-white font-medium flex items-center rounded-full">
                                                            <div className="w-7 h-7 bg-white bg-opacity-15 rounded-full flex items-center justify-center mr-2 shrink-0 overflow-hidden">
                                                                <img src={TronImage} className="w-6 h-6 object-cover rounded-full" alt="" />
                                                            </div>
                                                            <span className="grow text-base">USDT</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="token-change text-center -my-16">
                                                    <button className="w-10 h-10 bg-secondary-dark bg-opacity-80 rounded-full flex items-center justify-center text-xl mx-auto text-white-light transition-all delay-100 rotate-90 hover:-rotate-90 " fdprocessedid="z1www">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="token-box px-3 py-2 md:p-5 rounded-lg md:rounded-2xl flex items-start justify-between gap-3 bg-secondary-dark bg-opacity-80 shadow-inner">
                                                    <div className="token-input w-1/2 md:w-auto">
                                                        <div className="form-group">
                                                            <label for="from" className="text-xs text-white font-medium block mb-1">To</label>
                                                            <input type="text" name="" id="from" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" placeholder="0.00" className="max-w-full w-full bg-transparent border-0 p-0 text-base md:text-3xl placeholder:text-white-light outline-none focus:outline-none focus:ring-0 -tracking-wider" value="0" fdprocessedid="96hmx7" />
                                                        </div>
                                                        <div className="token-label text-sm font-medium tracking-widest maticBalance">0.00</div>
                                                    </div>
                                                    <div className="token-balance">
                                                        <div className="text-sm text-white font-medium flex items-center rounded-full">
                                                            <div className="w-7 h-7 bg-white bg-opacity-15 rounded-full flex items-center justify-center mr-2 shrink-0 overflow-hidden">
                                                                <img src={LogoImage} className="w-6 h-6 object-cover rounded-full" alt="" />
                                                            </div>
                                                            <span className="grow text-base">Idoge</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="max-w-xs mx-auto w-full relative !my-6">
                                                    <input type="text" name="" id="" placeholder="Enter Promo code" className="w-full bg-white-light bg-opacity-20 py-3 px-4 rounded-md" value="" fdprocessedid="airvfi" />
                                                    <button className="absolute top-1/2 right-3 -translate-y-1/2 z-10" fdprocessedid="9z3z89">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-center">
                                                    <Button buttonName="Unlock Wallet" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero