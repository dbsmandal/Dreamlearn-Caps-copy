import React from "react";
import { useNavigate } from "react-router-dom"
const EducatorDropdown = () => {
    const navigate = useNavigate()

    return (
        <div className='z-10 pl-24 mt-8 text-lg  text-purple-900 shadow-md shadow-purple-300'>
            <ul className="flex ">
                <li >
                    <button className="font-medium pl-2 pr-2"
                        onClick={() => { navigate("/addcourse") }}
                    >Add Course</button>
                </li>
                <li className="relative pr-2 pl-2">
                    <button className="font-medium"
                        onClick={() => { navigate("/adddemovideo") }}
                    >Add Demo Video</button>
                </li>
                <li >
                    <button className="font-medium pl-2 pr-2" onClick={() => { navigate("/addschedule") }}>Add Schedule</button>
                </li>
                <li >
                    <button className="font-medium pl-2 pr-2" onClick={() => { navigate("/mycourses") }}>My Courses</button>
                </li>
            </ul>
        </div>
    )
}

export default EducatorDropdown;