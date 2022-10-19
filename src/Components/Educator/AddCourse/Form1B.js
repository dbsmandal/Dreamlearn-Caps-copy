import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Auth/auth.service';
import EducatorService from '../../Auth/educator.service';

const Form1B = (props) => {
    // console.log("form1B", props)
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        description: "",
        instrument: "",
        duration: "",
        startDate: "",
        endDate: "",
        classDays: "",
        image: null,
        video: null,
    })
    // console.log(data)
    let errorsObj = {
        title: '',
        description: '',
        instrument: '',
        duration: '',
        startDate: '',
        endDate: '',
        classDays: '',
        image: '',
        video: '',
    };
    const [errors, setErrors] = useState(errorsObj);
    const [successMsg, setSuccessMsg] = useState('');
    const [err, setErr] = useState([]);
    const [showErr, setShowErr] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (data.title === '') {
            errorObj.title = "** Required";
            error = true;
        }
        if (data.description === '') {
            errorObj.description = "** Required";
            error = true;
        }
        if (data.instrument === '') {
            errorObj.instrument = "** Required";
            error = true;
        }
        if (data.duration === '' && data.duration > 1) {
            errorObj.duration = "** Required";
            error = true;
        }
        if (data.startDate === '') {
            errorObj.startDate = "** Required";
            error = true;
        }
        if (data.endDate === '') {
            errorObj.endDate = "** Required";
            error = true;
        }
        if (data.classDays === '') {
            errorObj.classDays = "** Required";
            error = true;
        }
        if (props.image === '') {
            errorObj.image = "** Required";
            error = true;
        }
        setErrors(errorObj);
        if (!error) {
            // console.log('form submit')
            let courseDetail = new FormData();
            courseDetail.append("title", data.title);
            courseDetail.append("description", data.description);
            courseDetail.append("instrument", data.instrument);
            courseDetail.append("duration", data.duration);
            courseDetail.append("startDate", data.startDate);
            courseDetail.append("endDate", data.endDate);
            courseDetail.append("classDays", data.classDays);
            courseDetail.append("image", props.image);
            courseDetail.append("video", props.video);
            EducatorService.uploadCourse(courseDetail).then((response) => {

                // console.log("successMsg", response.data.message)
                setSuccessMsg(response.data.message);
            }).catch((err) => {
                setErr(err.response.data.message);
                setShowErr(true);
                if (err.response.data.message === "Unauthorized!") {
                    AuthService.logout();
                    navigate('/signin');
                    window.location.reload();
                }
            });
        }
    }

    function handleChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        // console.log(newdata)

    }
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <>
            <div className=" mt-12 text-start m-auto w-96 row-span-3">

                <form onSubmit={(e) => handleSubmit(e)} className=" text-purple-900  bg-white rounded  flex flex-col content-center mb-4 " >
                    <div >
                        <label className=" text-purple-900 text-md font-bold  mb-2">Course Title:</label>
                        <input
                            value={data.title}
                            onChange={(e) => handleChange(e)}
                            type="text" name="title" id="title" placeholder='Course Title'
                            className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {errors.title && <div className="text-red-600 font-semibold  mb-6">{errors.title}</div>}
                    <div>
                        <label className=" text-purple-900 text-md font-bold mb-6 mt-5">Course Description:</label>
                        <input
                            value={data.description}
                            onChange={(e) => handleChange(e)}
                            type="text" name="Description" id="description" placeholder='Course  Description'
                            className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {errors.description && <div className="text-red-600 font-semibold mb-6">{errors.description}</div>}
                    <div >
                        <label className=" text-purple-900 text-md font-bold mb-6"> Select Instrument</label>
                        <select onChange={(e) => handleChange(e)} name="instrument" id="instrument"
                            className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline">
                            <option >Please  Select</option>
                            <option value="tabla"  >Tabla</option>
                            <option value="dholak" >Dholak</option>
                            <option value="flute" >Flute</option>
                            <option value="veena">Veena</option>
                            <option value="harmonium" >Harmonium</option>
                            <option value="piano">Piano</option>
                            <option value="guitar" >Guitar</option>
                            <option value="drums" >Drums</option>
                            <option value="trumpet" >Trumpet</option>
                            <option value="violin">Violin</option>
                        </select>
                    </div>
                    {errors.instrument && <div className="text-red-600 font-semibold mb-6">{errors.instrument}</div>}
                    <div >
                        <label className=" text-purple-900 text-md font-bold mb-2">Course Duration:</label>
                        <input
                            value={data.duration}
                            onChange={(e) => handleChange(e)}
                            type="number" name="Duration" min="10" id="duration" placeholder=' Course Duration (numbers of day)'
                            className="shadow appearance-none border rounded w-full mt-1 py-2 px-3  text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {errors.duration && <div className="text-red-600 font-semibold mb-6">{errors.duration}</div>}
                    <div className='mt-2' >
                        <label className=" text-purple-900 text-md font-bold mb-2">Course Starting Date:</label>
                        <input
                            value={data.startDate}
                            onChange={(e) => handleChange(e)}
                            type="date" name="startDate" id="startDate" placeholder='Starting Date'
                            className="shadow appearance-none border rounded w-full mt-1  py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {errors.startDate && <div className="text-red-600 font-semibold mb-6">{errors.startDate}</div>}
                    <div className='mt-2'>
                        <label className=" text-purple-900 text-md font-bold mb-2">Course End Date:</label>
                        <input
                            value={data.endDate}
                            onChange={(e) => handleChange(e)}
                            type="date" name="endDate" id="endDate" placeholder='End Date'
                            className="shadow appearance-none border rounded w-full mt-1  py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {errors.endDate && <div className="text-red-600 font-semibold mb-6">{errors.endDate}</div>}
                    <div className='mt-2'>
                        <label className=" text-purple-900 text-md font-bold mb-2">Days:</label>
                        <select onChange={(e) => handleChange(e)} name="classDays" id="classDays"
                            className="shadow appearance-none border rounded w-full mt-1  py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" >
                            <option  >Please Select</option>
                            <option value="weekend" id='weekend' >Weekend</option>
                            <option value="workingday" id='workingday'>Working Day</option>

                        </select>
                    </div>
                    {errors.classDays && <div className="text-red-600 font-semibold mb-6">{errors.classDays}</div>}
                    <button className="border p-1 mt-3 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
                        type='submit' >Submit</button>
                    {successMsg ? (
                        <>
                            <div className='text-center mt-6 text-3xl font-semibold text-purple-700 capitalize'>
                                {successMsg}
                            </div>
                            <div className="mb-4 m-auto ">
                                <button className="border p-1 mt-4 text-lg rounded-lg bg-purple-900 text-white w-30 focus:outline-none focus:shadow-outline hover:bg-purple-700" type='submit' onClick={handleReload}>Add More Course</button>
                            </div>
                        </>) : null}
                    {showErr && <div className="text-red-600 font-semibold">{err}</div>}
                </form>

            </div>
        </>
    )
}

export default Form1B;
