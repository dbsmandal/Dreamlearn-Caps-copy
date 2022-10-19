const PrivateLearnerRoutes = (props) => {
    const { isLearner, children, isLoggedIn } = props;
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/signin")
    }
    return isLearner ? children : navigate('/404')
}
export default PrivateLearnerRoutes;