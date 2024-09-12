import React from 'react'

import MainLogo from '../assets/images/logo.png'

function Footer() {
    return (
        <footer class="bg-primary rounded-t-3xl">
            <div class="top-footer py-10 border-b border-white border-opacity-10">
                <div class="container">
                    <div class="flex max-sm:flex-col max-sm:items-center justify-between max-sm:text-center gap-5">
                        <div class="max-w-72 w-full max-sm:mx-auto">
                            <a href="/">
                                <img src={MainLogo} class="max-w-auto w-auto h-14 max-sm:mx-auto" />
                            </a>
                        </div>
                        <div class="max-w-72 w-full max-sm:mx-auto">
                            <ul class="flex items-center max-sm:justify-center gap-3">
                                <li>
                                    <a href="https://www.facebook.com/IronDoge?mibextid=LQQJ4d" class="w-10 h-10 bg-white bg-opacity-5 hover:bg-opacity-20 border border-white border-opacity-10 hover:border-opacity-20 text-white rounded-xl flex items-center justify-center"
                                        target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook" class="w-5 h-5" fill="currentColor">
                                            <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/irondogetoken?igsh=OWNjdmRxY3I2ajBx" class="w-10 h-10 bg-white bg-opacity-5 hover:bg-opacity-20 border border-white border-opacity-10 hover:border-opacity-20 text-white rounded-xl flex items-center justify-center"
                                        target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                            <path d="M16.5 7.5l0 .01"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@irondogetoken?si=tOZ8-8rv455Q3tNJ" class="w-10 h-10 bg-white bg-opacity-5 hover:bg-opacity-20 border border-white border-opacity-10 hover:border-opacity-20 text-white rounded-xl flex items-center justify-center"
                                        target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                                            <path d="M10 9l5 3l-5 3z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/Iron_DogeToken" class="w-10 h-10 bg-white bg-opacity-5 hover:bg-opacity-20 border border-white border-opacity-10 hover:border-opacity-20 text-white rounded-xl flex items-center justify-center" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/irondogememe" class="w-10 h-10 bg-white bg-opacity-5 hover:bg-opacity-20 border border-white border-opacity-10 hover:border-opacity-20 text-white rounded-xl flex items-center justify-center" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer py-5 text-left">
                <div class="container">
                    <div class="flex justify-between max-md:justify-center max-md:text-center flex-wrap gap-2">
                        <div class="text-sm md:text-base text-white tracking-wider mb-2">For any queries mail at
                            <a href="mailto:info@irondoge.io" class="text-secondary">info@irondoge.io</a>
                        </div>
                        <div class="text-sm md:text-base text-white tracking-wider mb-2">To request promo code mail at
                            <a href="mailto:elite@irondoge.io" class="text-secondary">elite@irondoge.io</a>
                        </div>
                        <div class="text-sm md:text-base text-white tracking-wider mb-2">irondoge 2024 © All rights reserved</div>
                    </div>
                </div>
            </div>
        </footer>
        


    )
}

export default Footer

{/* <div class="fixed top-1/2 -translate-y-1/2 right-0 z-50">
                <a target="_blank" rel="noopener noreferrer" class="flex flex-col gap-3">
                    <svg id="fi_3488463" height="512" class="relative z-1 w-12 h-12" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                        <rect fill="#3FA9F5" height="440" rx="56" width="440" x="26" y="40"></rect>
                        <path d="m388.965 141.043c-3.151-5.529-7.367-6.269-13.242-4q-132.489 51.2-265.087 102.1c-5.82 2.237-7.6 5.127-7.6 11.186 2.417 3.387 85.3 84.525 88.583 85.786q3.4 10.877 6.784 21.756c2.155 6.929 120.485 121.467 120.743 122.129h90.854a56 56 0 0 0 56-56v-206.547c-2.219-1.717-77.035-76.239-77.035-76.41z" fill="#1A1A1A" opacity=".21"></path>
                        <path d="m388.965 141.043c0 1.695-34.374 167.682-48.194 234-2 9.623-7.161 11.705-15.192 5.874q-30.225-21.945-60.427-43.917c-8.469-6.158-11.933-5.957-20.166.846q-15.154 12.524-30.463 24.862c-8.216 6.605-13.031 5.1-16.121-4.833-7.602-24.453-15.317-48.875-22.702-73.388-1.169-3.88-3.08-5.925-6.775-7.261-18.753-6.776-37.425-13.756-56.125-20.664-3.7-1.369-7.343-2.843-9.76-6.23 0-6.058 1.781-8.949 7.6-11.187q132.575-50.972 265.088-102.1c5.872-2.271 10.086-1.531 13.237 3.998zm-64.517 45.782c-.771.41-86.4 53.034-128.083 78.812-6.278 3.883-8.554 8.757-6.7 15.559 4.258 15.583 8.918 31.056 13.349 46.593.61 2.137 1.208 4.236 3.828 4.27 3.256.043 3.405-2.786 3.739-4.945 1.094-7.082 2.276-14.176 2.819-21.311a26.3 26.3 0 0 1 9.008-18.139c28.423-26.255 97.466-90.491 103.622-96.291 2.021-1.9 1.858-4.88-1.582-4.548z" fill="#fff"></path>
                    </svg>
                </a>
            </div> */}