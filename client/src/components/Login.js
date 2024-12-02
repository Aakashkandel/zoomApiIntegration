import React, { useState } from 'react';
import axios from '../api/index';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
  

export default function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formHandler = async (e) => {
        e.preventDefault();
        const { username, password } = formData;
        console.log(username, password);

        

        dispatch({
            type:'login/loginUser',
            payload:{username,password,navigate}
        })

        
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <ToastContainer/>
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="font-bold text-3xl mb-4 text-blue-700 text-center">Log In</h2>
                <p className="font-semibold text-gray-700 text-center mb-8">Login with credentials</p>
                <form onSubmit={formHandler}>
                    <div className="mb-4">
                        <input
                            className="bg-gray-100 w-full p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                            type="text"
                            name="username"
                            placeholder="Email/Username"
                            onChange={changeHandler}
                            value={formData.username}
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            className="bg-gray-100 w-full p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={changeHandler}
                            value={formData.password}
                        />
                    </div>

                    <p className="text-sm font-semibold text-end text-blue-600 mb-4">
                        Forgot password?
                    </p>

                    <button
                        type="submit"
                        className="bg-blue-600 text-gray-100 font-bold w-full py-2 rounded-lg transition-colors hover:bg-blue-500"
                    >
                        Login
                    </button>
                </form>

                <div className="flex justify-center mt-4">
                    <p className="text-gray-800 text-sm font-semibold">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 font-semibold">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
