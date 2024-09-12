import React from 'react';

function StaticCard({ title, value, subtitle }) {
  return (
    <div className="card-gradiant-bg p-5 py-6 md:py-10 rounded-3xl text-center space-y-5 flex items justify-center flex-col">
      <h3 className="text-base lg:text-xl text-white tracking-widest">
        {title} {subtitle && <span className="text-2xl md:text-3xl break-all text-secondary text-opacity-60 font-extrabold font-trajan ml-2">{subtitle}</span>}
      </h3>
      <div className="text-2xl md:text-3xl break-all text-secondary text-opacity-60 font-extrabold">
        {value}
      </div>
    </div>
  );
}

export default StaticCard;
