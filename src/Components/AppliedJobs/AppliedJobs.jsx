import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApp } from "../../Utility/LocalStorage";
import JobPosition from "../JobPosition/JobPosition";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]); // data load
    const [displayJobs, setDisplayJobs] = useState([]); // filter load

    const handleJobFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
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
            <Helmet>
                <title>Career | Applied Jobs </title>
            </Helmet>
            <div className="header h-56 items-center justify-center flex bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-600">Applied Jobs</h1>
            </div>

            <h2 className="text-2xl">You Applied Position : {appliedJobs.length} </h2>

            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter </summary>
                    <ul className="bg-gray-300 text-black text-semibold p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                        <li onClick={() => handleJobFilter('all')} ><a>All</a></li>
                        <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>


            <div className="">
                {displayJobs.map(jobApp => (
                    <JobPosition key={jobApp.id} jobApp={jobApp} />
                ))}
            </div>


        </div>
    );
};

export default AppliedJobs;

