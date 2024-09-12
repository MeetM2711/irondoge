import React from 'react'

import HeadingBorder from "../assets/images/heading-border.png";
import Heading from "../components/Heading";

import Button from '../components/Button';
import GotIcon2 from "../assets/images/got-icon-2.png";
import GotIcon3 from "../assets/images/got-icon-3.png";
import RoadmapFloating from "../assets/images/roadmap-floating.png";

function Conqust() {
  return (
    <section className='section-padding hero-blur kingdom-roadmap relative '>
                <div className="bg-overlay w-full h-full bg-black bg-opacity-40 absolute top-0 left-0 z-10"></div>
                <div className='container ralative z-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full relative z-20'>

                        <div class="content-box space-y-5 z-9 md:sticky top-28 left-0">
                            <Heading sectionHeading="Roadmap &quot;IronDoge Kingdom&quot;" style={{ "text-align": "left" }} ></Heading>
                            <div class="text-sm md:text-base text-white font-light !leading-loose tracking-wider space-y-2">
                                <p>The IronDoge Kingdom is deeply integrated with the Idoge token. All in-platform transactions, rewards, and fees are conducted using idoge, creating a steady circulation of the token and adding to its utility. The platform also features a staking system where users can lock in their idoge to gain access to premium features and larger bounty rewards.</p>
                            </div>
                            <Button buttonName="buy now"></Button>
                        </div>

                        <div className='roadmap wrapper space-y-5 md:space-y-10 relative'>
                            <div class="card-gradiant-bg p-5 lg:p-10 rounded-3xl space-y-3 shadow-2xl sticky top-12 md:top-16 left-0">
                                <h3 class="text-xl lg:text-2xl text-white tracking-widest">CONQUEST NO.1</h3>
                                <div class="text-sm md:text-base text-white leading-loose tracking-wider space-y-6">
                                    <p>The inaugural forging of the IronDoge MemeForge demands meticulous strategy and craftsmanship, guaranteeing the quest's triumphant fulfillment.</p>
                                    <ul class="list-dots text-sm md:text-base space-y-2">
                                        <li>Team formation</li>
                                        <li>Community formation</li>
                                        <li>Powerful marketing</li>
                                        <li class="flex flex-wrap gap-3">
                                            <span>Private Sale Phase I 100% Extra Tokens</span>
                                            <div class="inline-block w-auto px-3 py-0.5 bg-red-600 bg-opacity-50 rounded-full text-xs font-semibold text-white animate-pulse">SOLD OUT</div>
                                        </li>
                                        <li class="flex flex-wrap gap-3">
                                            <span>Private Sale Phase II 80% Extra Tokens Whitelist</span>
                                            <div class="inline-block w-auto px-3 py-0.5 bg-green-600 bg-opacity-50 rounded-full text-xs font-semibold text-white animate-pulse">IN PROGRESS</div>
                                        </li>
                                        <li class="flex flex-wrap gap-3">
                                            <span>Private Sale Phase III 50% Extra Tokens</span>
                                            <div class="inline-block w-auto px-3 py-0.5 bg-orange-300 bg-opacity-50 rounded-full text-xs font-semibold text-white animate-pulse">COMING SOON</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-gradiant-bg p-5 lg:p-10 rounded-3xl space-y-3 shadow-2xl sticky top-12 md:top-16 left-0">
                                <h3 class="text-xl lg:text-2xl text-white tracking-widest">CONQUEST NO.2</h3>
                                <div class="text-sm md:text-base text-white leading-loose tracking-wider space-y-6">
                                    <p>With the IronDoge charged and set for action, we shall embark across diverse realms, intent on surpassing all rival jestst.</p>
                                    <ul class="list-dots text-sm md:text-base space-y-2">
                                        <li>Launch of IronDoge Token on market</li>
                                        <li>Launching on popular exchanges &amp; DEXs</li>
                                        <li>Partnership with top tier influencers &amp; platforms</li>
                                        <li>Staking launched</li>
                                        <li>Exclusive NFTs launched</li>
                                    </ul>
                                </div>
                                <img src={GotIcon2} class="w-32 absolute top-1/2 -right-3 -z-10" alt="" />
                            </div>

                            <div class="card-gradiant-bg p-5 lg:p-10 rounded-3xl space-y-3 shadow-2xl sticky top-12 md:top-16 left-0">
                                <h3 class="text-xl lg:text-2xl text-white tracking-widest">CONQUEST NO.3</h3>
                                <div class="text-sm md:text-base text-white leading-loose tracking-wider space-y-6">
                                    <p>As the IronDoge marches further, we anticipate growth in our dominion and advancements in our arsenal of creations.</p>
                                    <ul class="list-dots text-sm md:text-base space-y-2">
                                        <li>Blockchain development</li>
                                        <li>"IronDoge: Guardians of the Northwall"</li>
                                        <li>More play to earn games</li>
                                        <li>"IronDoge Emporium: The Marketplace of Myths" Market place for goods, digital products &amp; NFT</li>
                                    </ul>
                                </div>
                                <img src={GotIcon3} class="w-32 absolute -top-4 -right-3 -z-10" alt="" />
                            </div>
                            <div class="card-gradiant-bg p-5 lg:p-10 rounded-3xl space-y-3 shadow-2xl sticky top-12 md:top-16 left-0">
                                <h3 class="text-xl lg:text-2xl text-white tracking-widest">CONQUEST NO.4</h3>
                                <div class="text-sm md:text-base text-white leading-loose tracking-wider space-y-6">
                                    <p>The IronDoge Kingdom rises, destined to dominate the crypto realm. Where dragons once soared, IronDoge now reigns supreme. Witness our conquest.</p>
                                    <ul class="list-dots text-sm md:text-base space-y-2">
                                        <li>The <span class="font-got">"IronDoge: Kingdom"</span> rises</li>
                                        <li>IronDoge to the Moon</li>
                                    </ul>
                                </div>
                                <img src={RoadmapFloating} class="w-32 absolute -bottom-4 -right-3 -z-10" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
  )
}

export default Conqust
