import React, { useState, useEffect } from 'react'
import Schedule from './Schedule'
import EducatorService from '../../Auth/educator.service';


const CourseTitle = () => {
  const [courseTitle, setCourseTitle] = useState("")
  const [courseList, setCourseList] = useState([{}]);
  const [option, setOption] = useState(false)

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    EducatorService.MyCourse().then(
      (response) => {
        console.log('eduactor Course List', response.data.message);
        setCourseList(response.data.message);
        setLoading(false);
        setOption(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setCourseTitle(value)
    console.log(value)
  };
  
  useEffect(() => {
    localStorage.setItem('courseTitle', JSON.stringify(courseTitle));
  }, [courseTitle])

  return (

    <div className=" mt-10 text-start">
      <div className='mt-2 w-52 ' >
        <label className=" text-purple-900 text-sm font-bold mb-2" >Course Title:</label>    
        {option ? (  <select onChange={(e) => handleChange(e)} 
          className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline">
            <option value={courseTitle} >Please Select</option>
          {(courseList.map((data) => {
            const { id, title } = data;
            return (
              <option key={id}  >
                <option value={id} > {title}</option>

              </option>
            )
          }))
          }

        </select>):<option   className='default shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline'>{loading} Please Wait!!</option> }
      </div>
    
      <Schedule courseTitle={courseTitle} />
    </div>
  )
}

export default CourseTitle
