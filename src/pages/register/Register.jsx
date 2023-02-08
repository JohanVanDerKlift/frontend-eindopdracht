import React from 'react';
import './Register.css';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register(props) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const navigate = useNavigate();

  function handleFormSubmit(data) {
    console.log(data);
    const signupData = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: ["user"],
    }
    void signup(signupData);
  }

  async function signup(data) {
    try {
      const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', data);
      console.log(response.data);
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <h1 className="title">Register</h1>
      <div className="container form-container">
        <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="username-field">Username
          </label>
          <input
            type="text"
            id="username-field"
            placeholder="Username..."
            {...register("username", {
              required: {
                value: true,
                message: 'You must specify a valid username'
              },
              minLength: {
                value: 6,
                message: 'Username should be at least 6 characters long'
              },
              maxLength: {
                value: 20,
                message: 'Username should contain a maximum of 20 characters'
              },
            })
            }
          />
          {errors.username && <p>{errors.username.message}</p>}

          <label htmlFor="email-field">Email
          </label>
          <input
            type="email"
            id="email-field"
            placeholder="Email..."
            {...register("email", {
              required: {
                value: true,
                message: 'You must specify a valid email address'
              },
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email address not valid'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password-field">Password
          </label>
          <input
            type="password"
            id="password-field"
            placeholder="Password..."
            {...register("password", {
              required: {
                value: true,
                message: 'You must specify a valid password'
              },
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters long'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button className="button form-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;