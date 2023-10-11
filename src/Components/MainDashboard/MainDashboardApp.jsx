import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Layout from './Layout/Layout';
import Dashboard from './Dashboard/Dashboard';
import Trade from './Trade/Trade';
import Wallet from './Wallet/Wallet';
import Settings from './Settings/Settings';
import Error from './Error/Error';

const MainDashboardApp = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
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
