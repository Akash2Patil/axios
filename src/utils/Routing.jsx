import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
import Products from '../component/Products'
import Services from '../component/Services'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  )
}

export default Routing