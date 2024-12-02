import React, { useState } from 'react';
import axios from '../api/index';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  const formHandler = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, username, password, confirmpassword } = formData;
    const userData={
      firstname,lastname,username,email,password,confirmpassword
    }

    
    if (password !== confirmpassword) {
      alert('Passwords do not match.');
      return;
    }

    dispatch({
      type: 'register/registerUser',
      payload: { ...userData,navigate},
    });

    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="font-bold text-3xl mb-4 text-blue-700 text-center">Sign Up</h2>
        <p className="font-semibold text-gray-700 text-center mb-8">Please register with valid information</p>
        <form onSubmit={formHandler} className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <input
              className="bg-gray-100 w-full sm:w-5/12 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              className="bg-gray-100 w-full sm:w-5/12 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 w-full p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 w-full p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 w-full p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 w-full p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-gray-100 font-bold w-full py-3 rounded-lg transition-colors hover:bg-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-gray-800 text-sm font-semibold">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
