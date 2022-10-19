import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Components/NavFooter/Nav';
import Footer from './Components/NavFooter/Footer';
import LearnerHome from './Components/HomePage/Learner';
import EducatorHome from './Components/HomePage/EducatorHome/MyCourse';
import LandingPage from './Components/LandingPage';
import Comp from './Components/NavFooter/Comp'
import SignIn from './Components/SignIN/SignIn';
// import SignUp from './Components/SignIN/SignUp';
import AuthService from './Components/Auth/auth.service';
import LearnerDropdown from './Components/SecondNavbar/LearnerDD'
import InstrumentCourses from './Components/InstrumentCourses';
import Register from './Components/Register';
import Courses from './Components/Courses'
import Schedule from './Components/Schedule';
import About from './Components/AboutContact/About'
import Contact from './Components/AboutContact/Contact';
import Profile from './Components/Profile';
// import PrivateRoutes from './Components/ProtectedRoutes';
// import AllSchedule from './Components/AllSchedule';
import EducatorDropdown from './Components/SecondNavbar/EducatorDD';
import AddDemoVideo from './Components/Educator/DemoVideo/AddVideo';
import AddCourse from './Components/Educator/AddCourse/AddCourse';
import AddSchedule from './Components/Educator/AddSchedule/AddCourseSchedule';
import MyDemoVideo from './Components/Educator/MyCourses/Educator';
import EducatorSchedule from './Components/Educator/EducatorSchedule/EducatorSchedule';
import Modal from './Components/Modal';
import PageNotFound from './Components/PageNotFound';
// import EducatorRoutes from './EducatorRoutes';
function App() {
  const [learner, setLearner] = useState(false);
  const [educator, setEducator] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // console.log(user, 'currentuser');
    if (user) {
      setCurrentUser(user);
      setLearner(user.role.includes("ROLE_LEARNER"));
      setEducator(user.role.includes("ROLE_EDUCATOR"));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          currentUser={currentUser}
          learner={learner} educator={educator} />
        {learner ? <LearnerDropdown /> : ""}
        {educator ? <EducatorDropdown /> : ""}
        <Routes>
          {/* <Route path='/home' element={<PrivateRoutes learner={learner} ><Home /></PrivateRoutes>} /> */}
          <Route exact path='/' element={<LandingPage />} />
          {/* <Route path='/signup' element={<SignUp />} /> */}
          <Route path='/signin' element={<SignIn learner={learner} educator={educator} />} />
          <Route path='/learner' element={<LearnerHome />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/instruments/:instrument' element={<InstrumentCourses />} />
          <Route path='/instruments/:instrument/:courseTitle' element={<Register />} />
          <Route path='/modal/:courseID' element={<Modal />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseTitle' element={<Schedule />} />
          {/* <Route path='/allschedule' element={<AllSchedule />} /> */}
          {/* educator routes */}
          <Route path='/educator' element={<EducatorHome />} />
          <Route path='/adddemovideo' element={<AddDemoVideo />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/addschedule' element={<AddSchedule />} />
          <Route path='/educatorschedule/:title' element={<EducatorSchedule />} />
          <Route path='/mycourses' element={<MyDemoVideo />} />
          {/* <EducatorRoutes /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Comp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
