import React from 'react'
import Layout from './Layout'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  )
}

export default MainLayout
