import React from 'react'

function MediaState() {
    return (
        <section className="mediastats mt-5 md:mt-10 mb-20 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 relative z-10 max-w-7xl mx-auto">
                <div className="w-full sm:w-[245px]  p-5 rounded-3xl flex flex-col items-center text-center mx-auto">
                    <div className="mt-2.5 mb-2 media-text2 text-3xl md:text-4xl uppercase">333.4k+</div>
                    <div className="text-black text-[22px] font-700">People reached</div>
                </div>
                <div className="w-full sm:w-[245px]  p-5 rounded-3xl flex flex-col items-center text-center mx-auto">
                    <div className="mt-2.5 mb-2 media-text2 text-3xl md:text-4xl uppercase">250+</div>
                    <div className="text-black text-[22px] font-700">Number of media mention</div>
                </div>
                <div className="w-full sm:w-[245px]  p-5 rounded-3xl flex flex-col items-center text-center mx-auto">
                    <div className="mt-2.5 mb-2 media-text2 text-3xl md:text-4xl uppercase">10k+</div>
                    <div className="text-black text-[22px] font-700">Social Media Engagement</div>
                </div>
            </div>
        </section>
    )
}

export default MediaState