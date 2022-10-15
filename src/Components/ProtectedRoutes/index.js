
import { useNavigate } from "react-router-dom";


const PrivateRoutes = (props) => {
    const { learner, children } = props;
    const navigate = useNavigate();
    return learner ? children : navigate('/')

}
export default PrivateRoutes;