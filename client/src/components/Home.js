    import React from 'react';
    import image from './assets/bg.jpg';
    import icon from './assets/icon.png';
    import { Link } from 'react-router-dom';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    export default function Home() {
        const token = localStorage.getItem("token");
        return (
            <>
            <div className=" flex flex-col md:flex-row ">
                <ToastContainer/>

                <div className="h-[70%] md:w-1/2 my-4 md:my-10 mx-5 md:mx-20 md:p-6 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 lg:6xl">
                        Don't Worry About Trouble
                    </h2>
                    <h2 className="text-2xl md:text-3xl text-gray-700 font-bold mb-4">
                        "Register your complain with us"
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 my-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto ab repellendus magni inventore
                        autem in placeat cupiditate blanditiis tenetur numquam fuga beatae voluptatibus possimus distinctio
                        architecto nemo, unde quod?
                    </p>
                    {
                        token ? (<>

                            <Link to="/complain" className="bg-green-800 text-center text-xl text-gray-100 px-6 py-2 font-semibold rounded-xl mt-6 md:mt-10 hover:bg-blue-600 transition duration-300">
                                Get Started
                            </Link>


                        </>) : (<>


                            <Link to="/signup" className="bg-blue-500 text-center text-xl text-gray-100 px-6 py-2 font-semibold rounded-xl mt-6 md:mt-10 hover:bg-blue-600 transition duration-300">
                                Signup for Complain
                            </Link>

                        </>)
                    }
                    <div className="mt-8 md:mt-4">
                        <img src={icon} className="w-48 md:w-96 h-auto" alt="Icon" />
                    </div>
                </div>


                <div className="relative md:w-1/2 w-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={image} alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r  to-white"></div>
                </div>


                
            </div>
            <footer className="bg-gray-800 text-gray-100 py-8 px-4 pb-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
                        quod? Odio, voluptatibus velit. Nulla, doloremque deserunt.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Complain</a></li>
                        <li><a href="#" className="hover:text-yellow-400">History</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Email: info@complainnepale.com</li>
                        <li className="text-gray-400">Phone: +9779867491591</li>
                        <li className="text-gray-400">Address: kathmandu,dillibazar</li>
                    </ul>
                </div>

            
            
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} nepla complain. All Rights Reserved.</p>
            </div>
        </footer>
        </>
        );
    }
