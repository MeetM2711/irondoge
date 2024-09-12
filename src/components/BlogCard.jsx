import React from 'react';
import Button from './Button';
import WhiteList from '../assets/images/whitelist.png';
import RoadmapFloating from "../assets/images/roadmap-floating.png";
import DogeImage from "../assets/images/dogeImage.png";

const blogPosts = [
  {
    id: 29,
    image:WhiteList,
    title: "Iron Doge...",
    description: "The cryptocurrency world is abuzz with excitement, and at the center of it all is Iron Doge ($IDoge)..."
  },
  {
    id: 25,
    image: RoadmapFloating,
    title: "Iron Doge...",
    description: "IronDoge Brings a New Era of GameFi with Immersive Play-to-Earn Games and an NFT Trading Platform"
  },
  {
    id: 23,
    image: DogeImage,
    title: "Iron Doge...",
    description: "In the ever-evolving landscape of cryptocurrency, one name has emerged as a beacon of innovation and ..."
  }
];

const BlogCard = () => {
  return (
    <div className="mt-5 md:mt-10 flex flex-wrap justify-center -mx-3 relative gap-y-6 z-1">
      {blogPosts.map(post => (
        <div key={post.id} className="w-full sm:w-1/2 lg:w-1/4 px-3">
          <div className="blog-box bg-secondary-dark p-3 rounded-xl md:rounded-2xl text-center">
            <div className="h-72 rounded-xl md:rounded-2xl overflow-hidden">
              <img src={post.image} className="w-full h-full object-cover object-center" alt="Blog post" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-white mt-5 text-left">{post.title}</h3>
              <p className="text-left mt-4">{post.description}</p>
              <div className="flex flex-wrap mt-5 mb-2">
                <Button buttonName="read more"/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;

