import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApp } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData() // all object data
    const {id} = useParams();
    const idInt = parseInt(id) // convert string to int

    const job = jobs.find( job => job.id === idInt);
    
    // console.log(jobs)
    const handleApplyJob = () => {
        //Add DB
        saveJobApp(idInt)
        toast('you have applied successfully');
    }

    return (
        <div className="h-screen">
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">{job.company_name}</h2>
                    <h2>Job Details of : {job.job_title}</h2>
                </div>

                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply</button>
                 </div>

            </div>
                 
            <ToastContainer />
        </div>
    );
};

export default JobDetails;