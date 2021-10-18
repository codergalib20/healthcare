import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="h-screen position absolute w-screen top-0 left-0 overflow-hidden flex items-center bg-yellow-200 justify-center px-3">
            <div className="container mx-auto text-center">
                <h1 className=" text-3xl md:text-4xl lg:text-6xl mb-10 text-gray-800 font-bold">Opp's!😑 Page Not Found!</h1>
                <span className="text-2xl capitalize font-bold"> <Link to="/home" className="transition-all duration-300 ease-linear text-red-700 border-2 border-red-600 bg-transparent hover:bg-red-600 hover:text-white px-7 py-1">home</Link></span>
            </div>
        </div>
    );
};

export default NotFoundPage;