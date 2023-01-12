import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './NavBar.css'
import logo from '../../assets/F1-logo.png';
import fiaLogo from '../../assets/fia_logo.png'
import userIcon from '../../assets/user-icon.png'
import {AuthContext} from "../../context/AuthContext";

function NavBar(props) {
  const {isAuth, user, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <div className="navbar-inner-container">
        <div className="navbar-logo"><img src={logo} alt="F1 logo"/></div>
        <div className="navbar-content-container">
          <div className="navbar-upper-container">
            {isAuth &&
              <>
                <span>{user.username}</span>
                <img src={userIcon} alt="User icon"/>
              </>
            }
          </div>
          <div className="navbar-lower-container">
            <ul className="nav-links">
              <li>
                <NavLink
                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                  to="/drivers">Drivers</NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                  to="/teams">Teams</NavLink>
              </li>
              <li>
                <NavLink
                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                  to="/races">Races</NavLink>
              </li>
            </ul>
            <ul className="nav-buttons">
              <li>
                {!isAuth &&
                  <>
                    <button onClick={() => navigate('/register')}>Registreren</button>
                    <button onClick={() => navigate('/login')}>Log in</button>
                  </>
                }
                {isAuth &&
                  <button onClick={logout}>Log out</button>
                }
              </li>
              <li>
                <img src={fiaLogo} alt="Fia logo"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;