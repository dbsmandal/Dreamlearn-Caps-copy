import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Instrument() {
    const [instruments, setInstruments] = useState({});
    const params = useParams();

    const { instrument } = params;
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${instrument}`)
            .then((res) => {
                console.log("courses", res.data)
                setInstruments(res.data);
            },
                (err) => {
                    console.log(err)
                })
    }, [instrument])
    return (<div >
        <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>{instruments.title} Courses</h3>
        <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instruments.id}/register`}>
            {/* <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instrument}`}> */}
            <img className="w-full h-56 " src={instruments.image} alt={instruments.title} />
            <h2 className="float-left pt-3 text-lg font-semibold">{instruments.category}</h2>
            <p className="float-left ">{instruments.description}</p></Link>
        </div>
    </div>
    )
}