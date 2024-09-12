import React from 'react'

import HeadingBorder from "../assets/images/heading-border.png";
import Heading from "../components/Heading";
import FAQCard from "../components/FAQCard";

function Faqc() {
    return (
        <section className='section-padding overflow-hidden'>
            <div className='container'>
                <div className='relative'>
                    <div className='faq-wrapper relative rounded-2xl max-w-2xl mx-auto card-gradiant-bg z-9 py-5 md:py-10'>
                        <Heading sectionHeading="FAQS" sectionImage={HeadingBorder}></Heading>
                        <FAQCard ></FAQCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqc