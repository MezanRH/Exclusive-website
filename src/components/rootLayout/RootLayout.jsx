import React from 'react'
import TopHader from '../layouts/TopHader'
import Navbar from '../layouts/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <TopHader/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayout