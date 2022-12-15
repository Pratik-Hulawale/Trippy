import React from 'react'
import Navbar from './comoponents/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './comoponents/routes/Home';
import About from './comoponents/routes/About';
import Service from './comoponents/routes/Service';
import Contact from './comoponents/routes/Contact';


export default function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<Home/>} path="/" />
    <Route element={<About/>} path="/about" />
    <Route element={<Service/>} path="/service" />
    <Route element={<Contact/>} path="/contact" />
    </Routes>
  </BrowserRouter>
  </>
  )
}
