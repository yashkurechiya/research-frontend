import { BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ResearchCard = ({ type, name, city, regNo }) => {


  return (
    <div className="bg-white rounded-3xl p-7  max-w-sm w-full shadow-xs border border-slate-100 flex flex-col justify-between">
      <div>

        {/* Entity Name */}
        <h2 className="text-slate-900 text-xl font-semibold leading-tight mb-2">
          {name}
        </h2>

        {/* Location & Registration ID */}
        <div className="space-y-1 mb-2">
          <p className="text-slate-500 text-sm font-medium">
            {city}
          </p>
          <div className='flex flex-col gap-0 '>
            <a
              href={`https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14&regno=${regNo}`}
              className="  flex text-blue-500 text-xs font-semibold tracking-wider hover:underline">
                SEBI {regNo} <BadgeCheck
                size={20}
                className="fill-green-500 text-white"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Action Link with Inline SVG Arrow */}
      <a
        href={`/research-analysts/${regNo}`}
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
      </a>
    </div>
  );
};

export default ResearchCard;