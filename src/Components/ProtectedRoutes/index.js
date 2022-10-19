
import { useNavigate } from "react-router-dom";

const PrivateRoutes = (props) => {
    const { learner, children } = props;
    const navigate = useNavigate();
    return learner ? children : navigate('/')

}

const PrivateLearnerRoutes = (props) => {
    const { isLearner, children, isLoggedIn } = props;
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/signin")
    }
    return isLearner ? children : navigate('/404')
}

const PrivateEducatorRoutes = (props) => {
    const { isEducator, children, isLoggedIn } = props;
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/signin")
    }
    return isEducator ? children : navigate('/404')
}

export default PrivateRoutes;