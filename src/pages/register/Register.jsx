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
    void signup(data);
  }

  async function signup(data) {
    try {
      const response = await axios.post('http://localhost:3000/register', data);
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
          <label htmlFor="firstname-field">First name
          </label>
          <input
            type="text"
            id="firstname-field"
            placeholder="First name..."
            {...register("firstname", {
              required: {
                value: true,
                message: 'Dit veld is verplicht'
              },
              minLength: {
                value: 3,
                message: 'Input moet minimaal 3 karakters bevatten'
              },
              maxLength: {
                value: 20,
                message: 'Input mag maximaal 20 karakters bevatten'
              },
            })
            }
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
          <label htmlFor="lastname-field">Last name
          </label>
          <input
            type="text"
            id="lastname-field"
            placeholder="Last name..."
            {...register("lastname", {
              required: {
                value: true,
                message: 'Dit veld is verplicht'
              },
              minLength: {
                value: 3,
                message: 'Input moet minimaal 3 karakters bevatten'
              },
              maxLength: {
                value: 20,
                message: 'Input mag maximaal 20 karakters bevatten'
              },
            })
            }
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
          <label htmlFor="name-field">Username
          </label>
          <input
            type="text"
            id="name-field"
            placeholder="Username..."
            {...register("username", {
              required: {
                value: true,
                message: 'Dit veld is verplicht'
              },
              minLength: {
                value: 3,
                message: 'Input moet minimaal 3 karakters bevatten'
              },
              maxLength: {
                value: 20,
                message: 'Input mag maximaal 20 karakters bevatten'
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
                message: 'Dit veld is verplicht'
              },
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Voldoet niet aan de eisen voor email adres'
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
                message: 'You must specify a password'
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