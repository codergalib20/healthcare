import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    console.log(user)
    return (
        <div style={{minHeight: '500px'}} className="flex items-center justify-center">
            <div className="w-80">
                <form >
                    <input className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="email" placeholder="E-mail" />
                    <input className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="password" placeholder="Password" />
                    <button className="text-lg text-white font-medium bg-yellow-600 hover:bg-transparent py-1 px-8 shadow-inner hover:shadow-inner border-2 hover:text-yellow-600 border-yellow-500">Login</button>
                </form>
                <div>
                    <span>Are you new user? </span>
                    <NavLink to="/register"> please Register</NavLink>
                </div>
                <div>
                    <button onClick={signInUsingGoogle} className="bg-yellow-600 text-white px-8 h-12 mt-4 mx-auto flex items-center justify-between rounded-full text-2xl capitalize"><span className="mr-4"><i class="fab fa-google"></i></span> by google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;