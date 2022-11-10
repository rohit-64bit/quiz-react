import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

// user pages import
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ResetPassword from './pages/ResetPassword'
import MyProfile from './pages/MyProfile'
import Home from './pages/Home'
import Quizes from './pages/Quizes'
import Quizpage from './pages/Quizpage'
import ScoreCard from './pages/ScoreCard'
import EditProfile from './pages/EditProfile'
import Learn from './pages/Learn'
import Report from './pages/Report'

// admin pages import
import AdminLogin from './pages/AdminLogin'
import AdminMain from './pages/AdminMain'
import AdminQuiz from './pages/AdminQuiz'
import AdminInstructor from './pages/AdminInstructor'
import AdminUsers from './pages/AdminUsers'
import AdminHome from './pages/AdminHome'

// instructor pages import
import InstructorQuiz from './pages/InstructorQuiz'
import InstructorLearn from './pages/InstructorLearn'
import InstructorReport from './pages/InstructorReport'
import InstructorLevel from './pages/InstructorLevel'
import InstructorAddQuiz from './pages/InstructorAddQuiz'

// 404 not found
import NotFound from './pages/NotFound'



function App() {

  const [user, setUser] = useState("")

  return (
    <>

      <Routes>

        
        {/* user section pages */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/quizes' element={<Quizes />}></Route>
        <Route path='/quiz' element={<Quizpage />}></Route>
        <Route path='/myprofile' element={<MyProfile />}></Route>
        <Route path='/score' element={<ScoreCard />}></Route>
        <Route path='/editprofile' element={<EditProfile />}></Route>
        <Route path='/learn' element={<Learn />}></Route>
        <Route path='/report' element={<Report />}></Route>


        {/* admin section pages */}
        <Route path='/admin' element={<AdminLogin />}></Route>
        <Route path='/admin/home' element={<AdminHome />}></Route>
        <Route path='/admin/analytics' element={<AdminLogin />}></Route>
        <Route path='/admin/manage/category' element={<AdminMain />}></Route>
        <Route path='/admin/manage/quiz' element={<AdminQuiz />}></Route>
        <Route path='/admin/manage/instructors' element={<AdminInstructor />}></Route>
        <Route path='/admin/manage/users' element={<AdminUsers />}></Route>


        {/* instructor section pages */}
        {/* <Route path='/instructor' element={<InstructorAuth />}></Route> */}
        <Route exact path='/instructor/home' element={<InstructorQuiz />}></Route>
        <Route exact path='/instructor/home/level' element={<InstructorLevel />}></Route>
        <Route exact path='/instructor/home/level/addquiz' element={<InstructorAddQuiz />}></Route>
        <Route path='/instructor/learn' element={<InstructorLearn />}></Route>
        <Route path='/instructor/report' element={<InstructorReport />}></Route>


        {/* 404 not found */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
