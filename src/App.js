import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import Limited from './component/Limited'
import Login from './component/Login'
import PageNotFound from './component/PageNotFound'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import "./App.css";

function App() {
  return (
   <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/limited' element={<Limited/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="*" element = {<PageNotFound/>} />
    </Routes>
    <Footer/>
   </div>
  )
}

export default App


