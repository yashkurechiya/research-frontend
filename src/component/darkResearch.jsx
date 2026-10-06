import React from 'react'
import ResearchCard from './researchCard'
import DarkResearchCard from './darkResearchCard';

const DarkResearch = () => {
    const researchAnalysts = [
        {
            id: "INH300000211",
            type: "Non-Individual",
            name: "360 ONE Capital Market Private Limited",
            location: "Kolkata",
            regNo: "INH300000211",
            profileUrl: "/analyst/INH300000211",
        },
        {
            id: "INH000019327",
            type: "Individual",
            name: "Sasikumar Peyyala",
            location: "Vijayawada",
            regNo: "INH000019327",
            profileUrl: "/analyst/INH000019327",
        },
        {
            id: "INH000021553",
            type: "Individual",
            name: "Raghav Malik",
            location: "New Delhi",
            regNo: "INH000021553",
            profileUrl: "/analyst/INH000021553",
        },
        {
            id: "INH000016269",
            type: "Individual",
            name: "Latesh Narula, Proprietor of Equity Dynamo",
            location: "Alwar",
            regNo: "INH000016269",
            profileUrl: "/analyst/INH000016269",
        },
        {
            id: "INH000023719",
            type: "Individual",
            name: "Rahul Das, Proprietor of AnalyzerView Market Research",
            location: "Bardhaman",
            regNo: "INH000023719",
            profileUrl: "/analyst/INH000023719",
        },
    ];
    return (
        <div className='my-20'>
            <div className=' mx-10 flex gap-10'>
                <div>
                    <h2 className='text-slate-400 '>Search by name</h2>
                    <input type="text" className='w-70 border-slate-600 border h-10 p-3 bg-black text-slate-400 rounded-xl' placeholder='e.g. Raghav Malik ' />
                </div>
                <div>
                    <h2 className='text-zinc-500'>Search by city</h2>
                    <input type="text" className='w-70 h-10 p-3 border-slate-600 border bg-black text-slate-300 rounded-xl' placeholder='e.g. Kolkata' />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {researchAnalysts.map((analyst) => (
                    <DarkResearchCard
                        key={analyst.id}
                        type={analyst.type}
                        name={analyst.name}
                        location={analyst.location}
                        regNo={analyst.regNo}
                        profileUrl={analyst.profileUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default DarkResearch
