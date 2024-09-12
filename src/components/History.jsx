import React from 'react'
import Button from './Button'


function History() {
  return (
    <section>
                <div class="pb-10 md:pb-20">
                    <div class="container">
                        <div class="flex flex-wrap flex-col items-center justify-between gap-6 max-w-2xl mx-auto text-center">
                            <h2 class="text-xl md:text-2xl text-white !leading-relaxed">Be Part of Our History, Join Phase II Now with Extra Tokens!</h2>
                            <div class="text-xs md:text-sm text-white-light leading-normal">
                                <p>Reserve your spot and join the council of riches in our very limited phase II for extremely profitable 80% extra tokens.</p>
                            </div>
                            <Button buttonName="buy now" ></Button>
                            <div class="text-white text-base text-light font-semibold text-center">Now at $0.00011 and will be Listing at $0.015</div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default History