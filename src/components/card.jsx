import React from 'react';

function Card({ text, imgSrc, altText, link }) {
  return (
    <div className="card">
      <div className="px-3 h-full" tabIndex="-1" style={{ width: "100%", display: "inline-block" }}>
      <a
          href={link}
          className="news-box card-gradiant-bg !border-2 !border-primary-dark !border-opacity-10 px-4 5 py-5 h-full rounded-2xl group overflow-hidden cursor-pointer flex items-center justify-between flex-col space-y-5"
        >
          <img src={imgSrc} alt={altText} className="w-auto h-14 max-w-56 mx-auto object-contain mt-6" />
          <h2 className="text-center text-white text-sm md:text-xl font-trajan font-bold">{text}</h2>
         
        </a>
      </div>
    </div>
  );
}

export default Card;
