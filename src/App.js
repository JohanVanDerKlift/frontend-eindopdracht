import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import Drivers from './pages/drivers/Drivers.jsx';
import Teams from './pages/teams/Teams';
import Races from './pages/races/Races';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Driver from "./pages/driver/Driver";
import Team from "./pages/team/Team";
import Profile from "./pages/profile/Profile";
import Race from "./pages/race/Race";
import LastResult from "./pages/lastResult/LastResult";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {
  const {isAuth} = useContext(AuthContext);

  return (
    <div className="page-container">
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/drivers' element={isAuth ? <Drivers/> : <Login/>}/>
          <Route path='/teams' element={isAuth ? <Teams/> : <Login/>}/>
          <Route path='/Last-result' element={isAuth ? <LastResult/> : <Login/>}/>
          <Route path='/races' element={isAuth ? <Races/> : <Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/driver/:driverId' element={isAuth ? <Driver/> : <Login/>}/>
          <Route path='/team/:teamId' element={isAuth ? <Team/> : <Login/>}/>
          <Route path='/race/:raceId' element={isAuth ? <Race/> : <Login/>}/>
          <Route path='/profile' element={isAuth ? <Profile/> : <Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
