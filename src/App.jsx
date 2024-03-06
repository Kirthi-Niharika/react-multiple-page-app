import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePageComponent from './assets/Components/routes/HomePageComponent/HomePageComponent'
import AboutUsPageComponent from './assets/Components/routes/AboutUsPageComponent/AboutUsPageComponent'
import ContactUsPageComponent from './assets/Components/routes/ContactUsPageComponent/ContactUsPageComponent'
const App = () => {
  return (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route exact path='/' element={<HomePageComponent/>}></Route>
      <Route exact path='/about' element={< AboutUsPageComponent/>}></Route>
      <Route exact path='/contact' element={<ContactUsPageComponent/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App