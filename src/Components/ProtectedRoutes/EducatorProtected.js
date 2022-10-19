const PrivateEducatorRoutes = (props) => {
    const { isEducator, children, isLoggedIn } = props;
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/signin")
    }
    return isEducator ? children : navigate('/404')
}
export default PrivateEducatorRoutes;