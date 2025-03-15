import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-5 justify-end bg-zinc-900 text-white px-5 py-5'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/services">Services</NavLink>
    </div>
  )
}

export default Nav