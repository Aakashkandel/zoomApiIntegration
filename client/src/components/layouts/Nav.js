import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { resetComplainData } from '../../features/reducers/HistorySlice';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logouthandler = () => {
        localStorage.removeItem("token");
        
        dispatch(resetComplainData());
        
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="md:flex justify-between sm:w-full bg-slate-900 px-4 py-2 text-gray-100 text-xl items-center">
                <div className="hidden md:block flex items-center font-extrabold text-lg">
                    Complain Nepal
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-100 hover:text-gray-300 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <nav className="md:flex space-x-4 sm:space-x-6 md:space-x-8 items-center text-lg hidden">
                    <Link
                        to="/"
                        className="cursor-pointer rounded-xl px-4 py-2 text-gray-100 hover:bg-yellow-300 hover:text-gray-800 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/complain"
                        className="cursor-pointer rounded-xl px-4 py-2 text-gray-100 hover:bg-yellow-300 hover:text-gray-800 transition duration-300"
                    >
                        Complain
                    </Link>
                    <Link
                        to="/history"
                        className="cursor-pointer rounded-xl px-4 py-2 text-gray-100 hover:bg-yellow-300 hover:text-gray-800 transition duration-300"
                    >
                        History
                    </Link>
                </nav>

               
                <div className="flex items-center space-x-2 md:space-x-4">
                    {token ? (
                        <button
                            onClick={logouthandler}
                            className="hidden md:block bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition duration-200"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hidden md:block bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition duration-200"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition duration-200"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu for smaller screens */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 text-gray-100 w-full px-4 py-2">
                    <nav className="space-y-4">
                        <Link
                            to="/"
                            className="block px-4 py-2 rounded-xl text-gray-100 hover:bg-yellow-300 hover:text-gray-800 transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/complain"
                            className="block px-4 py-2 rounded-xl text-gray-100 hover:bg-yellow-300 hover:text-gray-800 transition duration-300"
                        >
                            Complain
                        </Link>
                        <Link
                            to="/history"
                            className="block px-4 py-2 rounded-xl text-gray-100 hover:bg-yellow-300 hover:text-gray-800 transition duration-300"
                        >
                            History
                        </Link>

                        {token ? (
                            <button
                                onClick={logouthandler}
                                className="block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition duration-200"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition duration-200"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition duration-200"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            )}

            <Outlet />
        </>
    );
}
