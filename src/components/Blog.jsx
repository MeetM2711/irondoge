import React from 'react'

import HeadingBorder from "../assets/images/heading-border.png";
import Heading from "../components/Heading";
import Button from './Button';
import BlogCard from './BlogCard';

function Blog() {
    return (
        <section className='section-padding !pb-0'>
            <div className='container'>
                <Heading sectionHeading="our blogs" sectionImage={HeadingBorder}></Heading>
                <p class="text-center mt-4">Read our Blogs here.</p>
                <BlogCard></BlogCard>
                <div class="mx-auto mb-2 flex justify-center   items-center max-w-sm mt-10 ">
                    <a href="/blog">
                        <Button buttonName="view all"></Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blog