
import { IoLocationOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";




const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
        </div>
        <div className="mt-4 flex mb-3 gap-5">
          <h2 className="flex"> <IoLocationOutline className="text-xl mr-2"></IoLocationOutline> {location}</h2>
          <h2 className="flex"> <FaSackDollar className="text-xl mr-2"></FaSackDollar> Salary : {salary}</h2>
        </div>

        <div className="card-actions justify-start">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;