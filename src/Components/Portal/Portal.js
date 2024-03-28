import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './Navbar/Navbar'
const Portal = () => {
  return (
    <div>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default Portal