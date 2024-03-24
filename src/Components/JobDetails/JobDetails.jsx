import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApp } from "../../Utility/LocalStorage";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineSubtitles } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { Helmet } from "react-helmet";


const JobDetails = () => {
    const jobs = useLoaderData() // all object data
    const { id } = useParams();
    const idInt = parseInt(id) // convert string to int

    const job = jobs.find(job => job.id === idInt);

    console.log(jobs)
    const handleApplyJob = () => {
        //Add DB
        saveJobApp(idInt)
        toast('you have applied successfully');
    }

    return (
        <div>
            <Helmet>
                <title>Career | Details : {id}</title>
            </Helmet>
            <div className="header h-56 items-center justify-center flex bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-600">Job Details</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="border-none mb-10 md:col-span-3 ">
                    <h2 className="text-4xl">{job.company_name}</h2>
                    <h2>Job Details of : {job.job_title}</h2>
                    <div className="border mt-5 mb-5"></div>
                    <p className="leading-8 mt-5"><b className="text-black">Job Description : </b> {job.job_description}</p>
                    <p className="leading-8 mt-5"> <b className="text-black">Job Responsibility : </b>{job.job_responsibility} </p>
                    <p className="leading-8 mt-5"><b className="text-black">Education Requirements : </b>{job.educational_requirements} </p>
                    <p className="leading-8 mt-5"><b className="text-black">Experience : </b>{job.experiences} </p>
                </div>

                <div className="border-none bg-gradient-to-r from-violet-50 to-indigo-50 p-4">
                    <h2 className="text-xl text-black mt-5 mb-5">Job Details </h2>
                    <div className="border mb-2"></div>

                    <div className="flex gap-1">
                        <AiOutlineDollar className="text-400 text-2xl text-violet-500" />
                        <p><b className="text-black">Salary : </b>{job.salary}</p>
                    </div>

                    <div className="flex gap-1 ">
                        <MdOutlineSubtitles className="text-400 text-2xl text-violet-500 mt-2" />
                        <p className="mt-2"><b className="text-black">Job Title : </b>{job.job_title}</p>
                    </div>


                    <h2 className="text-black text-xl mt-5 mb-4 ">Contact Information</h2>
                    <div className="border mb-4"></div>


                    <div className="flex gap-1 items-center">
                        <HiOutlinePhone className="text-400 text-2xl text-violet-500" />
                        <p className="mt-2"><b className="text-black">Phone : </b>{job.contact_information.phone}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <MdOutlineEmail className="text-400 text-2xl text-violet-500" />
                        <p className="mt-2"><b className="text-black">Email : </b>{job.contact_information.email}</p>
                    </div>

                    <div className="flex gap-1">
                        <MdLocationCity className="text-400 text-4xl text-violet-500" />
                        <p className="mt-2"><b className="text-black">Address : </b>{job.contact_information.address}</p>
                    </div>

                    <button onClick={handleApplyJob} className="btn text-white w-full mt-5 bg-gradient-to-r from-violet-600 to-indigo-600 ">Apply</button>
                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;