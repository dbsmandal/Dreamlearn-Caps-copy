import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Auth/auth.service';
import EducatorService from '../../Auth/educator.service';


const CourseTitle = (props) => {
  console.log(props)
  const [courseTitle, setCourseTitle] = useState("")
  const [courseList, setCourseList] = useState([{}]);
  const [option, setOption] = useState(false)
  let errorsObj = { courseTitle: '', video: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState([]);
  const [failMsg, setFailMsg] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await EducatorService.MyCourse();
        // console.log('eduactor Course List', response.data.message);
        if (response.data.message !== "No courses added yet!") {
          setCourseList(response.data.message);
        }
        setLoading(false);
        setOption(true);
      } catch (err) {
        // console.log(err.response.data.message);
        if (err.response.data.message === "Unauthorized!") {
          AuthService.logout();
          navigate("/signin")
          window.location.reload();
        }
      }
    }
    getData();
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setCourseTitle(value)
    // console.log(value)
  };
  function handleSubmit(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (courseTitle === '') {
      errorObj.courseTitle = "** Required";
      error = true;
    }
    setErrors(errorObj);
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
        // console.log(response.data.message);
        setSuccessMsg(response.data.message);
      }).catch((err) => {
        // console.log(err.response.data.fileFormat);
        setShowErr(true);
        setFailMsg(err.response.data.fileFormat);
        if (err.response.data.message === "Unauthorized!") {
          AuthService.logout();
          navigate("/signin")
          window.location.reload();
        }
      })
  }

  return (

    <div className=" mt-5">
      <div className='mt-2 w-84  text-start' >
        {showErr && <div className="text-red-600 font-semibold mb-3">{failMsg}</div>}
        <label className=" text-purple-900 text-sm font-bold mb-2" >Course Title:</label>
        {option ? (<select onChange={(e) => handleChange(e)}
          className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline cursor-pointer">
          <option value={courseTitle} >Please Select</option>
          {(courseList.map((data) => {
            const { title } = data;
            return (
              <option key={title}  > {title}
                {/* <option value={id} > {title}</option> */}

              </option>
            )
          }))
          }

        </select>) : <option className='default shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline'>{loading} Please Wait!!</option>}
        {errors.courseTitle && <div className="text-red-600 font-semibold mb-3">{errors.courseTitle}</div>}
      </div>
      {successMsg ?
        <div className='text-center mt-6 text-2xl font-semibold text-purple-700 capitalize'>
          {successMsg}
        </div>
        : null}
      <button
        className="border p-1 mt-6 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto hover:bg-purple-700"
        onClick={(e) => handleSubmit(e)}>Submit</button>

    </div>
  )
}

export default CourseTitle
