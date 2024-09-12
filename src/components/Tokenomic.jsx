import React from 'react'
import HeadingBorder from "../assets/images/heading-border.png";
import Tokenomics from "../assets/images/tokenomics-graph.webm";
import Heading from "../components/Heading";



function Tokenomic() {
  return (
    <section className="section-padding relative">
                <div className="container">
                    <Heading sectionHeading="Tokenomics" sectionImage={HeadingBorder}></Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full mt-6 md:mt-10">

                        <div className="img-box md:sticky top-20 z-10">
                            <video
                                autoPlay
                                muted
                                playsInline
                                poster="/assets/tokenomics-img-fIqxiJYY.png"
                                className="mx-auto max-w-full sm:max-w-lg"
                                preload="auto"
                            >
                                <source src={Tokenomics} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="w-full max-w-lg mx-auto card-gradiant-bg p-6 rounded-2xl space-y-3 md:space-y-5 relative z-9">
                            <div className="w-full flex items-center justify-between gap-3">
                                <h4 className="text-sm md:text-base text-white font-trajan">Name</h4>
                                <div className="text-sm md:text-base text-white-light text-right">IronDoge</div>
                            </div>
                            <div className="divider w-full h-0.5"></div>
                            <div className="w-full flex items-center justify-between gap-3">
                                <h4 className="text-sm md:text-base text-white font-trajan">Symbol</h4>
                                <div className="text-sm md:text-base text-white-light text-right">IDOGE</div>
                            </div>
                            <div className="divider w-full h-0.5"></div>
                            <div className="w-full flex items-center justify-between gap-3">
                                <h4 className="text-sm md:text-base text-white font-trajan">Total Supply</h4>
                                <div className="text-sm md:text-base text-white-light text-right">99,999,999,999 IDOGE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
  )
}

export default Tokenomic