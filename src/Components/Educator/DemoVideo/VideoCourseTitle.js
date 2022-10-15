import React, { useState, useEffect } from 'react'
import EducatorService from '../../Auth/educator.service';


const CourseTitle = (props) => {
  console.log(props)
  const [courseTitle, setCourseTitle] = useState("")
  const [courseList, setCourseList] = useState([{}]);
  const [option, setOption] = useState(false)
  // let errorsObj = { courseTitle: '', video: '' };
  // const [errors, setErrors] = useState(errorsObj);
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
  function handleSubmit(e) {
    e.preventDefault();
    // let error = false;
    // const errorObj = { ...errorsObj };
    // if (courseTitle === '') {
    //   errorObj.courseTitle = "** Required";
    //   error = true;
    // }
    // setErrors(errorObj);
    // if (!error) {
    //   console.log('form submit')
      // setFormSubmit(false)
      let videoDetail = new FormData();
      videoDetail.append("courseTitle", courseTitle);
      videoDetail.append("demoVideo", props.video);
      //for upload vide0 use only "demoVideo" key
      //for upload image use only "image" key
      EducatorService.uploadDemoVideo(videoDetail)
        .then((response) => {
          console.log(response.data)
        });
      // setTimeout(function () {
        // setFormSubmit(true);
      // }, 9000);
    
  }


  return (

    <div className=" mt-5 text-start">
      <div className='mt-2 w-84 ' >
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
        {/* {errors.courseTitle && <div className="text-red-600 font-semibold mb-3">{errors.courseTitle}</div>} */}
      </div>
     <button 
      className="border hover:border-transparent rounded-lg p-1 mt-2 text-lg  bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
     onClick={(e) =>handleSubmit(e)}>Submit</button>
      
    </div>
  )
}

export default CourseTitle
