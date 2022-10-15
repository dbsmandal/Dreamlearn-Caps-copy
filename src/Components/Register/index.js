import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "../Modal";

// import { useParams } from "react-router-dom";
const Register = () => {
    const [courseDetail, setCourseDetail] = useState([]);
    const [showModal, setShowModal] = useState(false);
    // const params = useParams();
    // const { register } = params;
    // const { instrument, register } = params;

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=1`)
            .then((res) => {
                console.log("registerDetail", res.data);
                setCourseDetail(res.data);
            },
                (err) => {
                    console.log(err)
                })
    }, [])
    //     axios.get(`https://fakestoreapi.com/products/${instrument}/${register}`)
    //         .then((response) => {
    //             console.log("registerDetail", response.data);
    //             setCourseDetail(response.data)
    //         })
    // }, [instrument, register])
    return (
        <div>
            <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>{courseDetail.title}Register Courses</h3>
            {courseDetail?.map((course) => {
                return (
                    <div key={course.id} className="flex w-8/12 m-auto mt-14 text-purple-900 shadow-lg shadow-purple-500">
                        <div key={course.id} className="w-full p-4 shadow-sm shadow-purple-500 inline-block pl-10">
                            <img className="w-50 h-56 m-auto " src={course.image} alt={course.title} />
                            <h2 className="float-left pt-6 text-lg font-semibold">{course.category}</h2>
                            <p className="float-left -pl-0 pt-2 ">{course.title}</p>
                        </div>
                        <div className="shadow-sm shadow-purple-500 p-6">
                            <h2 className="text-2xl font-semibold mb-2">Description</h2>
                            <p className="p-4">{course.description}</p>
                            <button className="p-2 mt-8 border bg-purple-900 text-white rounded-md text-lg" onClick={() => setShowModal(true)}>Register Now</button>
                        </div>
                    </div>
                )
            })}
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </div>
    )
}

export default Register;