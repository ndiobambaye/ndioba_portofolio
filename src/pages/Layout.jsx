import React from 'react'
import Navbar from "../composants/Navbar"
import Footer from "../composants/Footer"
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
       <Navbar/>
         <main>
            <Outlet/>
         </main>
       <Footer/>
    </div>
  )
}

export default Layout

























