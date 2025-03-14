import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
import Products from '../component/Products'

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
    </Routes>
  )
}

export default Routing