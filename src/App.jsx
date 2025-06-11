import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Numbers from './Components/Numbers/Numbers'
import Offer from './Components/Offer/Offer'
import Active from './Components/Active/Active'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-up" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
