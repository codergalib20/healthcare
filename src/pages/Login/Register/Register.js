import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const { error,handleNameChange,getImgLinks,handleFormcontrol, user,signInUsingGoogle ,handlePasswordChange, handleEmailChange } = useAuth();
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()


    // Handle Google Sign In_________________
    const HandleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                swal("Good job!", "Account has been created!", "success");
                history.push(redirect_url);
            })
            .catch(error => swal("Warning", `${error.message}`, "error"));
    }
    

    return (
        <div style={{minHeight: '500px'}} className="flex items-center justify-center">
            <div className="w-full p-4 max-w-lg shadow-2xl">
                <h1 className="text-2xl text-yellow-600 font-bold mb-3">Register please</h1>
                <span className="text-red-600 text-md md:text-lg ">{ error}</span>
                <form onSubmit={handleFormcontrol}>
                   
                    <input onBlur={handleNameChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="text" placeholder="Full name" />
                  
                    <input onBlur={handleEmailChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="email" placeholder="E-mail" />
                    <input onBlur={handlePasswordChange} className="outline-none border-2 border-yellow-500 py-1 px-3 w-full mb-2 text-yellow-600 text-lg font-medium" type="password" placeholder="Password" />
                    <button className="text-lg text-yellow-100 font-medium bg-yellow-600 hover:bg-transparent py-1 px-8 shadow-inner hover:shadow-inner border-2 hover:text-yellow-600 border-yellow-500">Register</button>
                </form>
                <div className="flex justify-between py-2">
                    <span className="text-yellow-900 text-lg font-medium">Are You are already signed in? </span>
                    <Link className="text-yellow-900 text-lg font-medium" to="/login"> Login now</Link>
                </div>
                <div>
                    <button onClick={HandleGoogleSignIn} className="bg-yellow-600 text-red-100 px-8 h-12 mt-4 mx-auto flex items-center justify-between rounded-full text-2xl capitalize"><span className="mr-4"><i className="fab fa-google"></i></span> by google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;