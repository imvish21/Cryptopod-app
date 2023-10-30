import React from 'react'
import './dashboard.css'
import "@fontsource/rubik";
import "@fontsource/poppins";
import DashHome from './DashHome/DashHome';
import Coinpage from './DashHome/Coinpage';


const Dashboard = () => {

  return (
    <div>
      <DashHome />
      <Coinpage />
    </div>
  )
}

export default Dashboard
