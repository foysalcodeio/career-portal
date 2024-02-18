
import { IoLocationOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const JobPosition = ({ jobApp }) => {
    // console.log(jobApp)
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jobApp;
    return (
        <div className="flex items-center border-2 p-3 mt-10 border-gray-200 rounded">
            <div className="ml-5">
                <figure><img src={logo} alt="Shoes" /></figure>
            </div>

            <div className="mt-4 ml-20">
                <div className="card-body  bg-white rounded-lg">
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
                </div>
            </div>

            <div className="flex">
                <button className="btn text-white w-full mt-5 bg-gradient-to-r from-violet-600 to-indigo-600">Show All Jobs</button>
            </div>

        </div>
    );
};

export default JobPosition;