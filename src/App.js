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

function App() {
  return (
    <div className="page-container">
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/drivers' element={<Drivers/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/races' element={<Races/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/driver/:driverId' element={<Driver/>}/>
          <Route path='/team/:teamId' element={<Team/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
