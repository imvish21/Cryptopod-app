import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Layout from './Layout/Layout';
// import Dashboard from './Dashboard/Dashboard';
import Trade from './Trade/Trade';
import Wallet from './Wallet/Wallet';
import Settings from './Settings/Settings';
import Error from './Error/Error';
import DashHome from './Dashboard/DashHome/DashHome';
import Coinpage from './Dashboard/DashHome/Coinpage';
import Dashboard from './Dashboard/Dashboard';

const MainDashboardApp = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashHome />} />
          <Route path='/coins/:id' element={<Coinpage />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default MainDashboardApp
