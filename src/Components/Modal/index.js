import { useNavigate } from "react-router-dom";

const Modal = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        props.setShowModal(false);
        navigate('/courses');
    }
    return (
        <div className="bg-black text-purple-900 bg-opacity-70 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center bg-white p-10 border-2 bg-opacity-100 border-purple-900 rounded-md">
                    <div className="text-4xl font-bold ">Succuessfully Registered !</div>
                    <div>
                        <button className="border-1 bg-purple-900 p-2 mt-12 rounded-md font-semibold text-white" onClick={handleClick}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal