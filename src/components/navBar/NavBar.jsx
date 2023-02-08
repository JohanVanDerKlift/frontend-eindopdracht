import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
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
        <div className="navbar-logo"><Link to='/'><img src={logo} alt="F1 logo"/></Link></div>
        <div className="navbar-content-container">
          <div className="navbar-upper-container">
            {isAuth &&
              <Link className="user-link" to='/profile'>
                <span>{user.username}</span>
                <img src={userIcon} alt="User icon"/>
              </Link>
            }
          </div>
          <div
            className={`navbar-lower-container ${isAuth ? 'navbar-lower-container-auth' : 'navbar-lower-container-not-auth'}`}>
            {isAuth &&
              <ul className="nav-links">
                <li className="dropdown">
                  <button className="dropdown-button">Standings</button>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <NavLink
                          className={({isActive}) => isActive ? 'active-menu-link dropdown-link' : 'default-menu-link dropdown-link'}
                          to="/drivers">Drivers</NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({isActive}) => isActive ? 'active-menu-link dropdown-link' : 'default-menu-link dropdown-link'}
                          to="/teams">Teams</NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({isActive}) => isActive ? 'active-menu-link dropdown-link' : 'default-menu-link dropdown-link'}
                          to="/last-result">Last Result</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink
                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/races">Races</NavLink>
                </li>
              </ul>
            }
            <ul className="nav-buttons">
              <li>
                {!isAuth &&
                  <>
                    <button onClick={() => navigate('/register')}>Register</button>
                    <button onClick={() => navigate('/login')}>Login</button>
                  </>
                }
                {isAuth &&
                  <button onClick={logout}>Log out</button>
                }
              </li>
              <li>
                <a href="https://www.fia.com"><img src={fiaLogo} alt="Fia logo"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;