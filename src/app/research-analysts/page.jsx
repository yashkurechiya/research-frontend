import Research from '@/component/research';
import React from 'react';

const ResearchAnalyst = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center bg-slate-100/50  py-12 lg:w-[100%] md:w-[80%] w-[90%]">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        <div className="flex items-center  justify-center gap-2 text-sm font-semibold tracking-wider text-slate-500 uppercase">
          <span>SEBI REGISTER</span>
          <span className="h-1 w-1 rounded-full bg-slate-400"></span>
          <span>RESEARCH ANALYSTS</span>
        </div>

        <h1 className="text-2xl sm:text-6xl text-slate-900 leading-tight tracking-tight mb-2">
          Every SEBI-registered <br className="hidden sm:block" />
          Research Analyst, in one place
        </h1>

        <p className="text-slate-600 text-base sm:text-s max-w-md leading-relaxed mb-6">
          A public directory compiled from SEBI's official register, provided for informational and verification purposes only.
        </p>

        <div className="w-full text-left bg-[#eef2ff] border-2 border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <h3 className="text-indigo-600 font-bold text-sm mb-2">
            Disclosure
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            This directory reproduces publicly available SEBI registration records for informational and verification purposes only, as of September 14, 2026. SignalZ does not warrant the accuracy, completeness, or currency of this data — always confirm current status on SEBI's official register before relying on it. None of the individuals or entities listed are affiliated with, endorsed by, or clients of SignalZ, unless stated otherwise elsewhere on this site. Being listed implies no partnership, review, or endorsement in either direction. Any Research Analyst may request removal from this directory via the link on their profile page.
          </p>
        </div>

      </div>
      <Research />
    </div>
  );
};

export default ResearchAnalyst;