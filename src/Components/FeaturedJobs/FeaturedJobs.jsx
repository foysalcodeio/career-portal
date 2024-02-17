import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    // this is not the best way to load show
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('/data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
       <div>
            <div className="text-center">
                <h2 className="text-5xl text-black font-semibold">
                    Featured Jobs : {jobs.length}
                </h2>
                <br />
                <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-6">
               {
                jobs.slice(0, dataLength).map( (job) => <Job key={job.id} job={job}></Job>)
               }
            </div>

            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={ ()=> setDataLength(jobs.length) } className="mt-5 btn btn-primary text-white">Show All Jobs</button>
            </div>

       </div>

    );
};

export default FeaturedJobs;

