import { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ResetPassword from './pages/ResetPassword'
import MyProfile from './pages/MyProfile'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/myprofile' element={<MyProfile />}></Route>
      </Routes>
    </>
  )
}

export default App
