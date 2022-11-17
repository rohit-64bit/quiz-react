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
import UserPRoute from './PrivateRoute/userPRoute'
import AdminPRoutes from './PrivateRoute/AdminPRoutes'
import InstructorLogin from './pages/InstructorLogin'
import InstructorPRoutes from './PrivateRoute/InstructorPRoutes'
import CategoryState from './context/category/categoryState'
import WatchVideo from './pages/WatchVideo'
import Level from './pages/Level'



function App() {

  const [user, setUser] = useState("")

  return (
    <>

      <CategoryState>
        <Routes>
          {/* user section pages */}

          {!localStorage.getItem("userToken") ? <Route path='/' element={<Home />}></Route> : <Route path='/' element={<UserPRoute>
            <Quizes />
          </UserPRoute>}>
          </Route>}

          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/reset-password' element={<ResetPassword />}></Route>

          <Route path='/quizes' element={
            <UserPRoute>
              <Quizes />
            </UserPRoute>
          }></Route>
          <Route path='/level' element={
            <UserPRoute>
              <Level />
            </UserPRoute>
          }></Route>
          <Route path='/quiz' element={
            <UserPRoute>
              <Quizpage />
            </UserPRoute>
          }></Route>
          <Route path='/myprofile' element={
            <UserPRoute>
              <MyProfile />
            </UserPRoute>
          }></Route>
          <Route path='/score' element={
            <UserPRoute>
              <ScoreCard />
            </UserPRoute>
          }></Route>
          <Route path='/editprofile' element={
            <UserPRoute>
              <EditProfile />
            </UserPRoute>
          }></Route>
          <Route path='/learn' element={<UserPRoute>
            <Learn />
          </UserPRoute>
          }></Route>
          <Route path='/watchvideo' element={<UserPRoute>
            <WatchVideo />
          </UserPRoute>
          }></Route>
          <Route path='/report' element={<UserPRoute>
            <Report />
          </UserPRoute>
          }></Route>



          {/* admin section pages */}
          {!localStorage.getItem("adminToken") ? <Route path='/admin' element={<AdminLogin />}></Route> : <Route path='/admin' element={<AdminPRoutes><AdminHome /></AdminPRoutes>}></Route>}
          <Route path='/admin/home' element={<AdminPRoutes><AdminHome /></AdminPRoutes>}></Route>
          <Route path='/admin/manage/category' element={<AdminPRoutes><AdminMain /></AdminPRoutes>}></Route>
          <Route path='/admin/manage/quiz' element={<AdminPRoutes><AdminQuiz /></AdminPRoutes>}></Route>
          <Route path='/admin/manage/instructors' element={<AdminPRoutes><AdminInstructor /></AdminPRoutes>}></Route>
          <Route path='/admin/manage/users' element={<AdminPRoutes><AdminUsers /></AdminPRoutes>}></Route>
          <Route path='/admin/analytics' element={<AdminPRoutes><AdminLogin /></AdminPRoutes>}></Route>


          {/* instructor section pages */}
          {/* <Route path='/instructor' element={<InstructorAuth />}></Route> */}

          {!localStorage.getItem("instructorToken") ? <Route path='/instructor' element={<InstructorLogin />} ></Route> : <Route path='/instructor' element={<InstructorPRoutes><InstructorLevel /></InstructorPRoutes>}></Route>}

          <Route exact path='/instructor/home' element={<InstructorPRoutes><InstructorLevel /></InstructorPRoutes>}></Route>
          <Route exact path='/instructor/home/addquiz' element={<InstructorPRoutes><InstructorAddQuiz /></InstructorPRoutes>}></Route >
          <Route exact path='/instructor/learn' element={<InstructorPRoutes><InstructorLearn /></InstructorPRoutes>}></Route>
          <Route exact path='/instructor/report' element={<InstructorPRoutes><InstructorReport /></InstructorPRoutes>}></Route>


          {/* 404 not found */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes >
      </CategoryState>
    </>
  )
}

export default App
