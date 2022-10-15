import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
// import Instrument from "../Instrument";
const LearnerDropdown = () => {
    const [instrumentList, setInstrumentList] = useState(false);
    const [instruments, setInstruments] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=10')
            .then((res) => {
                console.log("instrumentsDD", res)
                setInstruments(res.data);
            })
    }, [])
    const showInstrumentList = () => {
        setInstrumentList(true);
    }
    const hideInstrumentList = () => {
        setInstrumentList(false);
    }

    return (<>
        <div className='productList'>

            <div className='z-10 pl-24 mt-8 text-xl  text-purple-900 shadow-md shadow-purple-300'>
                <ul className="flex ">
                    <li className="relative pr-2">
                        <button onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} className="font-medium">Instruments</button>

                        {instrumentList ?
                            <div className="absolute pr-6 pl-6 shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} >
                                {instruments?.map((instrument) => {
                                    return (
                                        <div key={instrument.id} >
                                            <div className="hover:font-semibold p-0.5"><Link to={`/instruments/${instrument.id}`}>{instrument.price}</Link></div>
                                        </div>
                                    )
                                })}
                            </div>
                            : null}
                    </li>
                    <li >
                        <button className="font-medium pl-2 pr-2" onClick={() => navigate("/courses")}>Courses</button>
                    </li>
                    <li >
                        <button className="font-medium pl-2 pr-2" onClick={() => navigate("/allschedule")}>Schedule</button>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default LearnerDropdown;


// <div className='z-10 pl-24 mt-8 text-lg  text-purple-900 shadow-md shadow-purple-300'>
//             <ul className="flex ">
//                 <li className="relative pr-4">
//                     <button onMouseEnter={showInstruments} onMouseLeave={hideInstruments} className="font-medium">Instruments</button>

//                     {instruments ?
//                         <div className="absolute shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstruments} onMouseLeave={hideInstruments} >
//                             <table className="table-auto p-4">
//                                 <thead className="shadow-sm shadow-purple-300">
//                                     <tr >
//                                         <th >Indian</th>
//                                         <th className="p-1 ml-9">Western</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody >
//                                     <td className="p-3">
//                                         <tr className="hover:font-semibold"><Link to="/home">Tabla</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Dholak</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Flute</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Veena</Link></tr>
//                                         <tr className="hover:font-semibold "><Link to="">Harmonium</Link></tr>
//                                     </td>
//                                     <td className="pr-6 pl-6">
//                                         <tr className="hover:font-semibold"><Link to="">Piano</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="/home">Guitar</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Drums</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Trumpet</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Violin</Link></tr>
//                                     </td>
//                                 </tbody>
//                             </table>
//                         </div>
//                         : null}
//                 </li>
//                 <li >
//                     <button onMouseEnter={showCourses} onMouseLeave={hideCourses} className="font-medium pl-2">Courses</button>
//                     {courses ?
//                         <div className="absolute shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showCourses} onMouseLeave={hideCourses} >
//                             <table className="table-auto">
//                                 <tbody>
//                                     <td className="pr-6 pl-6">
//                                         <tr className="hover:font-semibold"><Link to="/home">Tabla</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Dholak</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Flute</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Veena</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Harmonium</Link></tr>
//                                     </td>
//                                 </tbody>
//                             </table>
//                         </div>
//                         : null}
//                 </li>
//             </ul>
//         </div>