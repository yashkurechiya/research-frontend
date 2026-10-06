"use client";

import RequestRa from "@/component/requestRa";
import SebiFaq from "@/component/SebiFaq";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResearchAnalystDetailPage() {

  const { regNo } = useParams();

  const [ra, setRa] = useState(null);
  const [request, setRequest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const getRA = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/research-analyst/getResearchAnalyst/${regNo}`,
        {
          method: "GET",
        }
      );

      const result = await response.json();

      console.log("RA Data:", result.data);

      setRa(result.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (regNo) {
      getRA();
    }
  }, [regNo]);


  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-100">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-indigo-600"></div>
      </div>
    );
  }


  // RA not found
  if (!ra) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100">
        <p className="text-lg text-slate-700">
          Research Analyst not found
        </p>

        <Link
          href="/research-analysts"
          className="mt-4 text-indigo-600 hover:underline"
        >
          ← All Research Analysts
        </Link>

      </div>
    );
  }


  return (
    <div className="relative flex min-h-screen w-full bg-slate-100 flex-col items-center">

      {/* ================= MAIN PAGE ================= */}

      <div className="flex w-full max-w-full flex-col items-center gap-5 px-8 py-14">

        <div className="flex w-full max-w-220 flex-col items-start gap-5">

          {/* Back */}
          <Link
            href="/research-analysts"
            className="text-[16px] text-slate-700 hover:text-ink"
          >
            ← All Research Analysts
          </Link>


          {/* Disclosure */}
          <div className="w-full rounded-[14px] bg-[#eef2ff] border-2 border-purple-200  px-5.5 py-4.5">

            <div className="mb-1.5 text-[13px] font-bold text-indigo-600">
              Disclosure
            </div>

            <p className="text-[13px] leading-relaxed text-slate-700">
              This profile reproduces a publicly available SEBI registration
              record for informational and verification purposes only, as of
              15 Sept. Signalz does not warrant the accuracy, completeness,
              or currency of this data — confirm current status directly on
              SEBI&rsquo;s official register (linked above) before relying on it.
              This Research Analyst is not affiliated with, endorsed by, or a
              client of Signalz, unless stated otherwise elsewhere on this site.
              Being listed implies no partnership, review, or endorsement in
              either direction. To request removal, use the button below.
            </p>

          </div>


          {/* RA Profile */}
          <div className="flex w-full flex-col items-start rounded-[18px] bg-white p-9">

     
            {/* Name */}
            <h1 className="my-3 text-[28px] font-semibold leading-tight text-ink">
              {ra.name}
            </h1>
 


            {/* SEBI Registration Number */}
            <a
              href={`https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14&regno=${regNo}`}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[15px] flex gap-2 underline font-bold text-blue-500 hover:underline"
            >
              SEBI {ra.regNo} <BadgeCheck
                size={20}
                className="fill-green-500 text-white"
              />
            </a>
            


            <p className="mt-2 text-[13px] text-slate-600">
              Click the registration number to verify this entry on
              SEBI&rsquo;s official register.
            </p>


            {/* Details */}
            <div className="flex flex-col items-start gap-2.5">

              {/* Location */}
              <p className="text-[17px] my-2 text-ink">
                {ra.location}
              </p>
 


              {/* Validity */}
              <p className="text-[14px] text-slate-700">
                Registration Date : {ra.registration_date}
              </p>


              {/* Email */}
              <p className="text-[14px] text-slate-800">
                Email : {ra.email}
              </p>

            </div>

          </div>


          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">

            <button
              onClick={() => {
                setPopUp(true);
                setRequest(true);
              }}
              className="rounded-[14px] px-[18px] py-3 cursor-pointer text-[15px] font-bold text-white shadow-[0px_10px_22px_0px_rgba(15,182,120,0.24)] transition hover:brightness-105"
              style={{ background: "rgb(15,182,120)" }}
            >
              Get onboarded on Signalz
            </button>


            {/* Remove button */}
           

          </div>


          {/* FAQ */}

        </div>
        <div className="mx-40 my-5">
          <SebiFaq />

        </div>
        </div>
               <button
              type="button"
              onClick={() => { setPopUp(true); setRequest(false); }}
              className="self-center ml-38 text-[10px] -my-6 items-center text-center cursor-pointer font-bold text-slate-500 hover:underline"
            >
              Get your name removed from the website
            </button>


      {/* ================= POPUP ================= */}

      {popUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <RequestRa onClose={() => setPopUp(false)} request={request} />

        </div>
      )}

    </div>
  );
}