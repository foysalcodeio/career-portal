import React from 'react';

const JobList = ({ jobOpen }) => {
    //console.log(jobOpen)
    return (
        <div className="p-2 w-72 mb-10 shadow-xl bg-slate-50 rounded-lg">
            <div className='p-4'>
                <img className='w-10' src={jobOpen.logo} alt="" />
                <h1 className='mt-4 text-semibold text-gray-600 text-2xl'>{jobOpen.category_name}</h1>
                <p className='text-semibold text-gray-400'> {jobOpen.availability}</p>
            </div>
        </div>
    );
};

export default JobList;