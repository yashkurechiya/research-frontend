import Link from 'next/link';
import React from 'react';

const DarkResearchCard = ( {type,name ,location,regNo, profileUrl}) => {
  return (
    <div className="bg-black  rounded-3xl p-7 max-w-sm w-full shadow-xs border border-slate-800 flex flex-col justify-between">
      <div>
        {/* Category Tag */}
        <p className="text-indigo-600 text-xs font-bold mb-3 tracking-wide">
          {type}
        </p>

        {/* Entity Name */}
        <h2 className="text-slate-200 text-2xl font-bold leading-tight mb-2">
          {name}
        </h2>

        {/* Location & Registration ID */}
        <div className="space-y-1 mb-2">
          <p className="text-slate-400 text-sm font-medium">
            {location}
          </p>
          <p className="text-slate-400 text-sm font-semibold tracking-wider">
            {regNo}
          </p>
        </div>
      </div>

      {/* Action Link with Inline SVG Arrow */}
      <Link
        href={profileUrl}
        className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold text-base transition-colors group w-fit"
      >
        <span>View profile</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
};

export default DarkResearchCard ;