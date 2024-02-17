
import { IoLocationOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job
  return (
    <div className="card card-compact shadow-xl bg-slate-20 p-3 bg-slate-50">
      <figure><img src={logo} alt="Shoes" /></figure>
      <div className="card-body bg-white rounded-lg">
        <h2 className="card-title text-black">{job_title}</h2>
        <p className="text-gray-900">{company_name}</p>
        <div>
          <button className="px-5 py-2 font-semibold bg-green-50  border rounded border-[#36a138] mr-4 text-[#36a138]">{remote_or_onsite}</button>
          <button className="px-5 py-2 font-semibold bg-orange-50 border rounded border-[#e4913e] mr-4 text-[#e4913e]">{job_type}</button>
        </div>
        <div className="mt-4 flex mb-3 gap-5 text-gray-800">
          <h2 className="flex"> <IoLocationOutline className="text-xl mr-2 "></IoLocationOutline> {location}</h2>
          <h2 className="flex"> <FaSackDollar className="text-xl mr-2"></FaSackDollar> Salary : {salary}</h2>
        </div>

        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
            <button className="btn text-white border-none">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;