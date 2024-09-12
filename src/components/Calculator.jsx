import React from 'react'

import CardBg from "../assets/images/card-bg.png";
import RangeBar from "../components/RangeProcess";
import Button from "../components/Button";

function Calculator() {
    return (
        <section className=''>
            <div className='container'>
                <div className='flex max-xl:gap-36 gap-8 justify-around flex-wrap relative'>
                    <div className='w-full max-w-md relative'>
                        <div className='rounded-2xl relative overflow-hidden shadow-xl z-10'>
                            <img src={CardBg} alt="" className='w-full h-full object-fill object-center absolute top-0 left-0' />
                            <div className="relative p-6 md:p-10">
                                <h2 className="text-lg md:text-xl text-white text-center tracking-wider mb-3 md:mb-5">Investment Calculator</h2>
                                <form action="" className="space-y-4 md:space-y-7">
                                    <div className="bg-secondary-dark bg-opacity-80 pt-2.5 pb-3 px-5 rounded-lg backdrop-blur-sm border-b-2 border-secondary border-opacity-60 shadow-lg">
                                        <label for="investmentAmount" className="inline-block text-sm md:text-base group-hover:text-secondary mb-1 transition-all duration-500">Enter Investment Amount in USDT</label>
                                        <input type="text" name="" id="investmentAmount" inputmode="decimal" autocomplete="off" autocorrect="off" pattern="^[0-9]*[.,]?[0-9]*$" minlength="1" maxlength="79" spellcheck="false" placeholder="0.00" className="max-w-full w-full bg-transparent text-lg md:text-xl placeholder:text-white-light outline-none focus:outline-none focus:ring-0 -tracking-wider" fdprocessedid="75mhmb" />
                                    </div>
                                    <RangeBar />

                                    <div className="timer-box px-3 py-3 rounded-lg shadow-lg text-center flex flex-col items-center justify-between gap-2">
                                        <span className="text-base md:text-lg">Investment Value</span>
                                        <span className="text-xl md:text-2xl text-white-light">0</span>
                                    </div>
                                </form>
                                <div className="text-center mt-4 md:mt-6">
                                    <Button buttonName="Buy now"></Button>
                                </div>
                                <div className="text-secondary text-base text-light font-semibold text-center mt-4">$200 Buy ~ $27000 at Listing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator