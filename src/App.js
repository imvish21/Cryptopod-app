import './App.css';
import Preloader from './Components/Preloader'
import LoginSignup from './Components/LoginSignUp/LoginSignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainDashboardApp from './Components/MainDashboard/MainDashboardApp';

function App() {
  return (
   <>
   <Preloader />
   {/* <LoginSignup /> */}
   <MainDashboardApp />
   
   </>
  );
}

export default App;
