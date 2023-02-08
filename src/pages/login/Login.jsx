import React, {useContext} from 'react';
import './Login.css';
import {useForm} from "react-hook-form";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

function Login(props) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {login} = useContext(AuthContext);

  function handleFormSubmit(data) {
    console.log(data);
    void signIn(data);
  }

  async function signIn(data) {
    try {
      const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', data);
      console.log(response.data);
      login(response.data.accessToken);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <h1 className="title">Login</h1>
      <div className="container form-container">
        <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="email-field">Username
          </label>
          <input
            type="text"
            id="username-field"
            placeholder="Username..."
            {...register("username", {
              required: {
                value: true,
                message: 'Please type in your username'
              }
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
          <label htmlFor="password-field">Password
          </label>
          <input
            type="password"
            id="password-field"
            placeholder="Password..."
            {...register("password", {
              required: {
                value: true,
                message: 'Please type in your password'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button className="button form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;