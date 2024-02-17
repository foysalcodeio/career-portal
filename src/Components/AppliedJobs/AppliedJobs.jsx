import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApp } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]); // data load
    const [displayJobs, setDisplayJobs] = useState([]); // filter load

    const handleJobFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobId = getStoredJobApp(); // get id from DB or LS
        if (jobs.length > 0) {

           // hard way -  const jobsApplied = jobs.filter(job => storedJobId.includes(job.id)) // in DB or storage we check it's exist or not; if exist then we printout

            // easy-way
            const jobsApplied = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job);
                }
            }
            // console.log(jobs, storedJobId, jobsApplied)

            //asign the info 
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])

    return (
        <div className="">
            <h2 className="text-2xl">Jobs I applied : {appliedJobs.length} </h2>

            <details className="dropdown">
                <summary className="m-1 btn">Filter </summary>
                <ul className="bg-gray-300 text-black text-semibold p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                    <li onClick={ ()=> handleJobFilter('all') } ><a>All</a></li>
                    <li onClick={ () => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={ ()=> handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>          

            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} , {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;