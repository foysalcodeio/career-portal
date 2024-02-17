import { useEffect, useState } from "react";
import JobList from "../../JobList/Joblist";


const CategoryList = () => {
    const[department, setDepartment] = useState([]);
    useEffect(() => {
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setDepartment(data))
    }, [])
    return (
        <div className="mt-20 mb-20"> 
            <h2 className="text-5xl text-center text-black font-semibold">Department open are : {department.length}</h2>
            <br />
            <p className="text-center text-gray-500">
            Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <ul className="flex flex:md gap-4 mt-6 justify-around">
                {
                    department.map( jobOpen => <JobList key={jobOpen.id} jobOpen={jobOpen}></JobList> )
                }
            </ul>
            
        </div>
    );
};

export default CategoryList;