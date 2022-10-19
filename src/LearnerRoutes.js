function LearnerRoutes() {
    return (
        <>
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:schedule' element={<Schedule />} />
            <Route path='/allschedule' element={<AllSchedule />} />
            <Route path='/adddemovideo' element={<AddDemoVideo />} />
            <Route path='/addcourse' element={<AddCourse />} />
            <Route path='/addschedule' element={<AddSchedule />} />
            <Route path='/mycourses' element={<MyCourses />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} /></>
    )
}