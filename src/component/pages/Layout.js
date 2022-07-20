import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout