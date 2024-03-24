import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import { Helmet } from "react-helmet";

const Jobs = () => {
  const JobsData = useLoaderData();
  console.log(JobsData)
  return (
    <div>
      <Helmet>
        <title> Career | Jobs </title>
      </Helmet>
      <div className="header h-56 items-center justify-center flex bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-600">  Total Jobs : {JobsData.length} </h1>
      </div>

      <ul className="grid grid-cols-2 gap-3">
        {
          JobsData.map( (job) => <Job key={job.id} job={job}></Job>)
        }
      </ul>
    </div>
  );
};

export default Jobs;