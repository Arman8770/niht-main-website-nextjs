"use client";
import React from 'react';
import Logomarquee from '../ui/courseui/logoMarque';

const ToolsLogo = () => {
  return (
    <div className="flex flex-col items-center py-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Master Digital Marketing Tools
      </h2>

      {/* Logos container */}
      <div className="">
        {/* Example logos */}
        <Logomarquee />
      </div>
    </div>
  );
};

export default ToolsLogo;
