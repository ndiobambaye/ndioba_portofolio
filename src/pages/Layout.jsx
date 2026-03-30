import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../composants/Navbar'
import Footer from '../composants/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout