import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
  const [isAuth, setIsAuth] = useState({
    isAuth: false,
    user: null,
    status: 'pending',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      if (token && Math.floor(Date.now()/1000) < decoded.exp) {
        void fetchUser(token, decoded, '/profile');
      }
    } else {
      setIsAuth({
        isAuth: false,
        user: null,
        status: 'done',
      })
    }
  }, [])

  function login(token) {
    localStorage.setItem('token', token);
    const decoded = jwt_decode(token);

    void fetchUser(token, decoded);
  }

  async function fetchUser(token, decoded, redirect) {
    try {
      const response = await axios.get(`http://localhost:3000/600/users/${decoded.sub}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(response.data);
      setIsAuth({
        isAuth: true,
        user: {
          username: response.data.username,
          email: response.data.email,
          id: response.data.id,
        },
        status: 'done',
      });
      console.log("De gebruiker is ingelogd");
      if (redirect) {
        navigate(redirect);
      }
    } catch (e) {
      console.error(e);
    }
  }

  function logout() {
    setIsAuth({
      isAuth: false,
      user: null,
      status: 'done',
    })
    localStorage.clear();
    console.log("De gebruiker is uitgelogd");
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{
      isAuth: isAuth.isAuth,
      user: isAuth.user,
      login,
      logout,
    }}>
      {isAuth.status === 'done'
        ? children
        : <span>Loading...</span>
      }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;