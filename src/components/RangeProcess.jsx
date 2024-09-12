import React, { useState } from 'react';

const RangeBar = () => {
  const phases = [
    "Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6", "Phase 7", "Phase 8", 
    "Phase 9", "Phase 10", "Phase 11", "Phase 12", "Phase 13", "Phase 14", "Phase 15", 
    "At Listing", "IronDoge To The Moon", "Beyond"
  ];
  const totalSteps = phases.length; 
  const stepSize = 100 / totalSteps; // 5.56
  const defaultIndex = 2;
  const [value, setValue] = useState(defaultIndex * stepSize); //11.12

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
  }
  
  const currentPhaseIndex = Math.min(Math.round((value / stepSize) - 1), totalSteps);


  return (
    <div className="bg-secondary-dark bg-opacity-80 pt-2.5 pb-3 px-5 rounded-lg backdrop-blur-sm border-b-2 border-secondary border-opacity-60 shadow-lg">
      <label htmlFor="range" className="inline-block text-sm md:text-base group-hover:text-secondary mb-1 transition-all duration-500">
        {phases[currentPhaseIndex]}
      </label>
      <input
        id="range"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        step={stepSize}
        className="w-full h-4 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default RangeBar;
