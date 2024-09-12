import React from 'react'


import SectionVBg from "../assets/images/section-v-bg-.jpg";

function Youtube() {
  return (
    <section className="section-padding hero-blur relative">
                <img src={SectionVBg} className="w-full h-full object-cover object-center absolute top-0 left-0 animate-pulse" alt="" />
                <div className="container relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="youtube-frame">
                            <iframe width="100%" height="360" src="https://www.youtube.com/embed/asKDIFoi2es?playsinline=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;fs=0&amp;start=undefined&amp;autoplay=0&amp;enablejsapi=1&amp;widgetid=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Youtube