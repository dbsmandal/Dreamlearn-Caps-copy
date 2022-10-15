import { useState } from "react";
import { Link } from "react-router-dom"
const Dropdown = () => {
    const [instruments, setInstruments] = useState(false);
    const [courses, setCourses] = useState(false);
    const showInstruments = () => {
        setInstruments(true);
    }
    const hideInstruments = () => {
        setInstruments(false);
    }
    const showCourses = () => {
        setCourses(true)
    }
    const hideCourses = () => {
        setCourses(false);
    }

    return (
        <div className='z-10 pl-24 mt-8 text-lg  text-purple-900 shadow-md shadow-purple-300'>
            <ul className="flex ">
                <li className="relative pr-4">
                    <button onMouseEnter={showInstruments} onMouseLeave={hideInstruments} className="font-medium">Instruments</button>

                    {instruments ?
                        <div className="absolute shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstruments} onMouseLeave={hideInstruments} >
                            <table className="table-auto p-4">
                                <thead className="shadow-sm shadow-purple-300">
                                    <tr >
                                        <th >Indian</th>
                                        <th >Western</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <td className="p-3">
                                        <tr className="hover:font-semibold"><Link to={`/instruments/tabla`}>Tabla</Link></tr>
                                        <tr className="hover:font-semibold"><Link to={`/instruments/Dholak`}>Dholak</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Flute</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Veena</Link></tr>
                                        <tr className="hover:font-semibold "><Link to="">Harmonium</Link></tr>
                                    </td>
                                    <td className="pr-6 pl-6">
                                        <tr className="hover:font-semibold"><Link to="">Piano</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="/home">Guitar</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Drums</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Trumpet</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Violin</Link></tr>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                        : null}
                </li>
                <li >
                    <button onMouseEnter={showCourses} onMouseLeave={hideCourses} className="font-medium pl-2">Courses</button>
                    {courses ?
                        <div className="absolute shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showCourses} onMouseLeave={hideCourses} >
                            <table className="table-auto">
                                <tbody>
                                    <td className="pr-6 pl-6">
                                        <tr className="hover:font-semibold"><Link to="/home">Tabla</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Dholak</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Flute</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Veena</Link></tr>
                                        <tr className="hover:font-semibold"><Link to="">Harmonium</Link></tr>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                        : null}
                </li>
            </ul>
        </div>
    )
}

export default Dropdown;