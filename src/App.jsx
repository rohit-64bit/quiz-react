import { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
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
import AdminLogin from './pages/AdminLogin'
import AdminMain from './pages/AdminMain'


function App() {

  const [user, setUser] = useState("")

  return (
    <>
      <Header />
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
        <Route path='/admin/main' element={<AdminMain />}></Route>
        <Route path='/admin/auth' element={<AdminLogin />}></Route>
        <Route path='/admin/manage/instructors' element={<AdminLogin />}></Route>
        <Route path='/admin/manage/users' element={<AdminLogin />}></Route>
        <Route path='/admin/analytics' element={<AdminLogin />}></Route>

      </Routes>
    </>
  )
}

export default App
